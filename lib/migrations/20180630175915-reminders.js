module.exports = {
  down: (queryInterface) => {
    queryInterface.dropTable('Reminders');
  },

  up: (queryInterface, sequelize) => {
    queryInterface.createTable('Reminders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: sequelize.DATE,
      },
      ownedBy: {
        type: sequelize.STRING,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      channel: {
        allowNull: false,
        type: sequelize.ENUM('push', 'email', 'webhook'),
      },
      title: {
        type: sequelize.STRING,
        allowNull: false,
      },
      min: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      'min-unit': {
        type: sequelize.ENUM('hours', 'days', 'weeks', 'months'),
        allowNull: false,
      },
      max: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      'max-unit': {
        type: sequelize.ENUM('hours', 'days', 'weeks', 'months'),
        allowNull: false,
      },
      limit: {
        type: sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  },
};
