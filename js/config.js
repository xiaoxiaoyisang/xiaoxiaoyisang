// 跨设备订单同步配置
// 基于 Netlify Functions + Netlify Blobs
 
const SYNC_CONFIG = {
  // 配对码：两个人用同一个配对码才能看到彼此的订单
  PAIR_CODE: '102531',
 
  // 下单人称呼默认值（可在页面"我的设置"里修改，存在本地）
  DEFAULT_CUSTOMER_NAME: '小猪',
 
  // 接单台轮询间隔（毫秒），5 秒拉一次新订单
  POLL_INTERVAL: 5000
};
  POLL_INTERVAL: 5000,
  BLOB_ID: '019f69c2-d737-7e39-ad02-53d35b33a7cf',
  BASE_URL: '/api'
};
