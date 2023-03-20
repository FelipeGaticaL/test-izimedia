"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Profiles",
      [
        {
          name: "Alexis",
          last_name: "Sanchez",
          gender: "Masculino",
          addres: "Francia 1234",
          city: "Marsella",
          country: "Francia",
          age: 32,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mario",
          last_name: "Bros",
          gender: "Masculino",
          addres: "USA 1234",
          city: "New York",
          country: "USA",
          age: 52,
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hasbulla",
          last_name: "Mogamedov",
          gender: "Masculino",
          addres: "Rusia 1234",
          city: "Moscú",
          country: "Rusia",
          age: 23,
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Profiles", null, {});
  },
};
