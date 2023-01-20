'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const rawQuestions = [
      {id:1, question: "Test", answer: "Test", value:"100",createdAt: new Date(), updatedAt:new Date() },
      { id:2,question: "Test1", answer: "Test1", value:"200", createdAt:new Date(), updatedAt:new Date() },
      { id:3,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
    ];

    await queryInterface.bulkInsert('Questions', rawQuestions);
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Questions');
  }
};
