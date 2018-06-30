module.exports = (sequelize, DATA_TYPES) => sequelize.define('Reminder', {
  id: {
    primaryKey: true,
    type: DATA_TYPES.STRING,
  },
  ownedBy: DATA_TYPES.STRING,
  channel: DATA_TYPES.ENUM('push', 'email', 'webhook'),
  title: DATA_TYPES.STRING,
  min: DATA_TYPES.INTEGER,
  'min-unit': DATA_TYPES.ENUM('hours', 'days', 'weeks', 'months'),
  max: DATA_TYPES.INTEGER,
  'max-unit': DATA_TYPES.ENUM('hours', 'days', 'weeks', 'months'),
  limit: DATA_TYPES.BOOLEAN,
}, {});
