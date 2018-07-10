const reminders = require('./reminders');

module.exports = (finale, sequelize) => {
  reminders(finale, sequelize);
};
