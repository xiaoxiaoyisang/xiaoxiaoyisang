const { getStore } = require('@netlify/blobs');

const STORE_NAME = 'orders';

exports.handler = async (event, context) => {
  const store = getStore(STORE_NAME, { context });

  const method = event.httpMethod;
  const path = event.path.replace(/^\/\.netlify\/functions\/orders\/?/, '');

  try {
    if (method === 'GET') {
      const pairCode = event.queryStringParameters.pairCode || '';
      let data;
      try {
        data = await store.get('all', { type: 'json' });
      } catch (e) {
        data = { orders: [] };
      }
      const orders = Array.isArray(data.orders) ? data.orders : [];
      const filtered = pairCode
        ? orders.filter(o => o.pairCode === pairCode).sort((a, b) => b.timestamp - a.timestamp)
        : orders;
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ orders: filtered })
      };
    }

    if (method === 'POST') {
      const body = JSON.parse(event.body || '{}');
      const order = body.order;
      if (!order || !order.id) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Invalid order' }) };
      }
      let data;
      try {
        data = await store.get('all', { type: 'json' });
      } catch (e) {
        data = { orders: [] };
      }
      const orders = Array.isArray(data.orders) ? data.orders : [];
      orders.push(order);
      await store.setJSON('all', { orders });
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ ok: true, order })
      };
    }

    if (method === 'PUT') {
      const body = JSON.parse(event.body || '{}');
      const { orders } = body;
      if (!Array.isArray(orders)) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Invalid orders' }) };
      }
      await store.setJSON('all', { orders });
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ ok: true })
      };
    }

    if (method === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: ''
      };
    }

    return {
      statusCode: 405,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message })
    };
  }
};
