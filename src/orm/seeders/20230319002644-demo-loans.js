"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Loans",
      [
        {
          manga_id: 1,
          profile_id: 1,
          loan_date: "2023-03-20",
          return_date: "2023-03-27",
          status: "Activo",
          quantity_loan: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          manga_id: 4,
          profile_id: 1,
          loan_date: "2023-03-20",
          return_date: "2023-03-27",
          status: "Activo",
          quantity_loan: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          manga_id: 6,
          profile_id: 2,
          loan_date: "2023-03-20",
          return_date: "2023-03-27",
          status: "Activo",
          quantity_loan: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          manga_id: 5,
          profile_id: 2,
          loan_date: "2023-03-20",
          return_date: "2023-03-27",
          status: "Activo",
          quantity_loan: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          manga_id: 3,
          profile_id: 3,
          loan_date: "2023-03-20",
          return_date: "2023-03-27",
          status: "Activo",
          quantity_loan: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Loans", null, {});
  },
};
