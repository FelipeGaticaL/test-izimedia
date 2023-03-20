'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      manga_id: {
        type: Sequelize.INTEGER,
         references:  { model: 'Mangas', key: 'id' }
      },
      profile_id: {
        type: Sequelize.INTEGER,
         references:  { model: 'Profiles', key: 'id' },
      },
      loan_date: {
        type: Sequelize.DATEONLY
      },
      return_date: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.STRING
      },
      quantity_loan: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Loans');
  }
};