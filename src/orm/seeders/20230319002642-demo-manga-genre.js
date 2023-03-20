'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Manga_genres', 
    [{
        id_manga: 1,
        id_genre: 1,
      },{
        id_manga: 2,
        id_genre: 1,
      },{
        id_manga: 3,
        id_genre: 1,
      },{
        id_manga: 4,
        id_genre: 1,
      },{
        id_manga: 5,
        id_genre: 1,
      },{
        id_manga: 6,
        id_genre: 2,
      },{
        id_manga: 7,
        id_genre: 2,
      },{
        id_manga: 8,
        id_genre: 2,
      },
 
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Manga_genres', null, {});
  }
};
