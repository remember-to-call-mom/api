const cors = require('cors');
const express = require('express');

const config = require('./config');
const Database = require('./lib/Database');

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

    const app = express();

    app.use(cors());

    this.server = await (new Promise((resolve, reject) => {
      const server = app.listen(config.webserver.port, (error) => {
        if (error) {
          return reject(error);
        }

        return resolve(server);
      });
    }));

    return app;
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
