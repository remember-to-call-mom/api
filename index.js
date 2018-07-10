const cors = require('cors');
const express = require('express');
const finale = require('finale-rest');
const bodyParser = require('body-parser');

const config = require('./config');
const Database = require('./lib/Database');
const endpoints = require('./lib/endpoints');

class WebServer {
  static setupDatabase() {
    return new Database(config);
  }

  constructor() {
    this.database = WebServer.setupDatabase();
    this.server = null;
  }

  getDatabase() {
    return this.database;
  }

  async start() {
    if (this.database) {
      await this.database.connect();
    }

    this.app = express();

    this.app.use(cors());
    this.app.use(bodyParser.json());

    this.startFinale();

    this.server = await (new Promise((resolve, reject) => {
      const server = this.app.listen(config.webserver.port, (error) => {
        if (error) {
          return reject(error);
        }

        return resolve(server);
      });
    }));
  }

  startFinale() {
    finale.initialize({
      app: this.app,
      sequelize: this.database.db,
    });

    endpoints(finale, this.database.db);
  }

  close() {
    if (this.server) {
      this.server.close();
    }

    if (this.database) {
      this.database.close();
    }
  }
}

/**
 * Starting the web
 */
new WebServer().start();
