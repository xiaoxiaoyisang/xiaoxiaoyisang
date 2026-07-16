const { getStore } = require('@netlify/blobs');

const STORE_NAME = 'orders';

exports.handler = async (event, context) => {
  const store = getStore({ name: STORE_NAME, context });

  const method = event.httpMethod;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (method === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    let data = { orders: [] };
    try {
      data = await store.get('all', { type: 'json' });
    } catch (e) {
      // blob 不存在时忽略
    }
    const orders = Array.isArray(data.orders) ? data.orders : [];

    if (method === 'GET') {
      const pairCode = event.queryStringParameters && event.queryStringParameters.pairCode || '';
      const filtered = pairCode
        ? orders.filter(o => o.pairCode === pairCode).sort((a, b) => b.timestamp - a.timestamp)
        : orders;
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ orders: filtered })
      };
    }

    if (method === 'POST') {
      const body = JSON.parse(event.body || '{}');
      const order = body.order;
      if (!order || !order.id) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid order' }) };
      }
      orders.push(order);
      await store.setJSON('all', { orders });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ok: true, order })
      };
    }

    if (method === 'PUT') {
      const body = JSON.parse(event.body || '{}');
      const { orders: newOrders } = body;
      if (!Array.isArray(newOrders)) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid orders' }) };
      }
      await store.setJSON('all', { orders: newOrders });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ok: true })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message })
    };
  }
};
