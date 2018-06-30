const database = require('./config.database');

const { assign } = Object;

module.exports = assign({
  webserver: {
    port: 1337,
  },
}, database);
