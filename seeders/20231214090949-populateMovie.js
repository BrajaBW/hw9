'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('movies',[{
    id: 1,
    title: 'tenggelam nya kapal vanderwick',
    gendre: 'romance',
    years: 2000,
    createdAt: new Date(), // Atur createdAt dengan nilai tanggal dan waktu saat ini
    updatedAt: new Date()

   },
   {
    id: 2,
    title: 'naruto',
    gendre: 'kartun',
    years: 2001,
    createdAt: new Date(), // Atur createdAt dengan nilai tanggal dan waktu saat ini
    updatedAt: new Date()

   }],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies', null, {});
  }
};
