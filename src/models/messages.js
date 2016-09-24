'use strict';

const Sequelize = require('sequelize');

module.exports = function() {
  const app = this;
  const sequelize = app.get('sequelize');

  const Messages = sequelize.define('messages', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate () {
        const models = app.get('models');
        this.belongsTo(models.users, {});
      }
    }
  });

  return Messages;
};
