const orderSync = {
  _pollTimer: null,
  _lastSeenIds: new Set(),
  _initialized: false,

  getCustomerName() {
    return localStorage.getItem('customerName') || SYNC_CONFIG.DEFAULT_CUSTOMER_NAME;
  },

  setCustomerName(name) {
    localStorage.setItem('customerName', name);
  },

  getPairCode() {
    return localStorage.getItem('pairCode') || SYNC_CONFIG.PAIR_CODE;
  },

  setPairCode(code) {
    localStorage.setItem('pairCode', code);
  },

  _blobUrl() {
    return SYNC_CONFIG.BASE_URL + '/jsonBlob/' + SYNC_CONFIG.BLOB_ID;
  },

  async _getAll() {
    const res = await fetch(this._blobUrl(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    if (!res.ok) throw new Error('读取云端失败: ' + res.status);
    const data = await res.json();
    return data.orders || [];
  },

  async _saveAll(orders) {
    const res = await fetch(this._blobUrl(), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orders: orders })
    });
    if (!res.ok) throw new Error('写入云端失败: ' + res.status);
    return res.json();
  },

  _genId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  },

  async submitOrder(items, total, note) {
    const order = {
      id: this._genId(),
      pairCode: this.getPairCode(),
      customer: this.getCustomerName(),
      items: items,
      total: total,
      note: note || '',
      timestamp: Date.now(),
      status: 'pending'
    };

    const orders = await this._getAll();
    orders.push(order);
    await this._saveAll(orders);
    return order;
  },

  async markDone(orderId) {
    const orders = await this._getAll();
    const order = orders.find(function(o) { return o.id === orderId; });
    if (order) {
      order.status = 'done';
      order.doneAt = Date.now();
      await this._saveAll(orders);
    }
  },

  async deleteOrder(orderId) {
    const orders = await this._getAll();
    const filtered = orders.filter(function(o) { return o.id !== orderId; });
    await this._saveAll(filtered);
  },

  async clearFinished() {
    const orders = await this._getAll();
    const pairCode = this.getPairCode();
    const filtered = orders.filter(function(o) {
      return o.pairCode !== pairCode || o.status !== 'done';
    });
    await this._saveAll(filtered);
  },

  async getOrders() {
    const orders = await this._getAll();
    const pairCode = this.getPairCode();
    return orders
      .filter(function(o) { return o.pairCode === pairCode; })
      .sort(function(a, b) { return b.timestamp - a.timestamp; });
  },

  startPolling(onOrders, onNewOrder) {
    this.stopPolling();
    this._initialized = false;
    this._lastSeenIds = new Set();

    var self = this;
    var tick = async function() {
      try {
        const orders = await self.getOrders();
        onOrders(orders);

        const newOrders = orders.filter(function(o) {
          return o.status === 'pending' && !self._lastSeenIds.has(o.id);
        });

        if (self._initialized && newOrders.length > 0 && onNewOrder) {
          onNewOrder(newOrders);
        }

        orders.forEach(function(o) { self._lastSeenIds.add(o.id); });
        self._initialized = true;
      } catch (e) {
        console.warn('轮询失败:', e.message);
        if (typeof setConnStatus === 'function') {
          setConnStatus(false, e.message.substring(0, 12));
        }
      }
    };

    tick();
    this._pollTimer = setInterval(tick, SYNC_CONFIG.POLL_INTERVAL);
  },

  stopPolling() {
    if (this._pollTimer) {
      clearInterval(this._pollTimer);
      this._pollTimer = null;
    }
  }
};
