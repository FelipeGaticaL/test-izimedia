'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Mangas', 
    [{
        name: 'LA CHICA A LA ORILLA DEL MAR',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'NIJIGAHARA HOROGURAFU',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'SOLANIN',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'TOMIE',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'UZUMAKI',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'BERSEK 01',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'BERSEK 02',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'BERSEK 03',
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
 
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Mangas', null, {});
  }
};
