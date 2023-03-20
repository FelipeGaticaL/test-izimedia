'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    function hashing(value){
      const passHashed = bcrypt.hashSync(value, 10)
      return passHashed
    }
    

    await queryInterface.bulkInsert('Users', 
    [{
        email: 'alexis.sanchez@gmail.com',
        password: hashing('Masterdog1234'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        email: 'mario.bros@gmail.com',
        password: hashing('Bowser1234'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        email: 'hasbulla@gmail.com',
        password: hashing('Vivalamadrepatria1234'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
