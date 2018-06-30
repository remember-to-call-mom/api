module.exports = (sequelize, DATA_TYPES) => sequelize.define('User', {
  id: {
    primaryKey: true,
    type: DATA_TYPES.STRING,
  },
  email: DATA_TYPES.STRING,
  password: DATA_TYPES.STRING,
}, {});
