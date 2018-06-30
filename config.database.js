
const localConfig = require('./config.database.local');

module.exports = Object.assign({
  database: 'rtcm',
  dialect: 'postgres',
  username: 'rtcm',
  password: null,
  host: '127.0.0.1',
}, localConfig);
