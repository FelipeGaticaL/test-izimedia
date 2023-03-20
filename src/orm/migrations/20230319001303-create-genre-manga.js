'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Manga_genres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_manga: {
        type: Sequelize.INTEGER,
        references: { model: 'Mangas', key: 'id' },
      },
      id_genre: {
        type: Sequelize.INTEGER,
        references: { model: 'Literary_genres', key: 'id' },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Manga_genres');
  }
};