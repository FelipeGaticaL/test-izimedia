'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Manga_authors', 
    [{
        id_manga: 1,
        id_author: 1,
      },
      {
        id_manga: 2,
        id_author: 1,
      },
      {
        id_manga: 3,
        id_author: 1,
      },
      {
        id_manga: 4,
        id_author: 2,
      },
      {
        id_manga: 5,
        id_author: 2,
      },
      {
        id_manga: 6,
        id_author: 3,
      },
      {
        id_manga: 7,
        id_author: 3,
      },
      {
        id_manga: 8,
        id_author: 3,
      },
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Manga_authors', null, {});
  }
};
