const fs = require('fs');
const path = require('path');

class Models {
  constructor(db) {
    this.db = db;
  }

  load() {
    const basename = path.basename(__filename);

    fs.readdirSync(__dirname)
      .filter(file => (file.indexOf('.') !== 0) && (file !== basename)
          && (file.slice(-3) === '.js'))
      .forEach((file) => {
        const model = this.db.import(path.join(__dirname, file));

        this.db[model.name] = model;
      });

    Object.keys(this.db).forEach((modelName) => {
      if (this.db[modelName].associate) {
        this.db[modelName].associate(this.db);
      }
    });

    this.db.User.hasMany(this.db.Reminder, {
      foreignKey: 'ownedBy',
    });

    return this.db;
  }
}

module.exports = Models;
