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
   await queryInterface.bulkInsert('users', [{
      id: 1,
    email: 'braja@yahoo.com',
    gender: 'L',
    password: 'admin1',
    role: 'admin',
    createdAt: new Date(), // Atur createdAt dengan nilai tanggal dan waktu saat ini
    updatedAt: new Date()
   },
   {
    id: 2,
  email: 'hilda@yahoo.com',
  gender: 'P',
  password: 'admin2',
  role: 'admin2',
  createdAt: new Date(), // Atur createdAt dengan nilai tanggal dan waktu saat ini
  updatedAt: new Date()
 }],{});
  },

  async down (queryInterface, Sequelize) {clear
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users',null, {});
  }
};
