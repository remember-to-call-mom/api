const reminders = require('./reminders');
const users = require('./users');

module.exports = (finale, sequelize) => {
  reminders(finale, sequelize);
  users(finale, sequelize);
};
