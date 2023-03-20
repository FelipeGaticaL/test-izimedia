'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Literary_genres', 
    [{
      genre_name: 'SEINEN',
      },{
      genre_name: 'SHONEN',
      },
 
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Literary_genres', null, {});
  }
};
