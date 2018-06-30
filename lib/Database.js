const Sequelize = require('sequelize');

const Models = require('./models');

class Database {
  constructor(options) {
    const config = Object.assign({
      database: '',
      password: '',
      username: '',
    }, options);

    this.db = new Sequelize(
      config.database,
      config.username,
      config.password,
      config,
    );

    this.connect();
  }

  async connect() {
    if (this.db) {
      try {
        await this.testConnection();
        await this.sync();
      } catch (err) {
        console.error(`Error getting models: ${err.message}`);
      }
    }
  }

  async close() {
    if (this.db) {
      await this.db.close();
    }
  }

  async testConnection() {
    try {
      await this.db.authenticate();
      console.info('Connection has been established successfully.');
    } catch (err) {
      console.error(`Unable to connect to the database: ${err.message}`);
    }
  }

  async sync() {
    try {
      this.db = await new Models(this.db).load();
    } catch (err) {
      console.error(`Unable to sync models: ${err.message}`);
    }
  }
}

module.exports = Database;
