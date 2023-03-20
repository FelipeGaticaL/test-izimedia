'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', 
    [{
        author_name: 'INIO ASANO',
      },
    {
        author_name: 'JUNJI ITO',
      },
    {
        author_name: 'KENTARO MIURA',
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Authors', null, {});
  }
};
