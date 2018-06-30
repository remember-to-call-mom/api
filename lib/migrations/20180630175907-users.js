module.exports = {
  down: (queryInterface) => {
    queryInterface.dropTable('Users');
  },

  up: (queryInterface, sequelize) => {
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: sequelize.STRING,
      },
      password: {
        allowNull: false,
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
    });
  },
};
