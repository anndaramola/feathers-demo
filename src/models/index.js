const Sequelize = require('sequelize');
const user = require('./user');
const messages = require('./messages');

module.exports = function () {
  const app = this;

  const sequelize = new Sequelize(app.get('db_url'), {
    dialect: app.get('db_dialect'),
    logging: console.log
  });
  app.set('sequelize', sequelize);

  app.configure(user);
  app.configure(messages);

  app.set('models', sequelize.models);

  Object.keys(sequelize.models).forEach(modelName => {
    if ('associate' in sequelize.models[modelName]) {
      sequelize.models[modelName].associate();
    }
  });

  sequelize.sync();
};