'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.describeTable('messages').then(attributes => {
      if ( !attributes.drafts )
      {
        return queryInterface.addColumn(
          'messages',
          'drafts',
          {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false
          }
        );
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.describeTable('messages').then(attributes => {
      if ( attributes.drafts ) {
        return queryInterface.removeColumn('messages', 'drafts');
      }
    });
  }
};
