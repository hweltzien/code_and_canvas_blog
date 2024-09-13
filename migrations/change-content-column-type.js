'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('posts', 'content', {
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('posts', 'content', {
      type: Sequelize.STRING(255),
    });
  },
};
