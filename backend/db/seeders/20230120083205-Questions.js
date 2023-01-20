'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const rawQuestions = [
      {id:1, question: "Сколько раз похищали скульптуру Чижика-пыжика?", answer: "7", value:"100",createdAt: new Date(), updatedAt:new Date() },
      {id:2,question: "С какого моста в Петербурге можно увидеть семь других мостов?", answer: "Троицкий", value:"200", createdAt:new Date(), updatedAt:new Date() },
      {id:3,question: "Название этого музея певодится с французского как 'парковый павильон, место уединения, малый сельский дворец'", answer: "Эрмитаж", value:"400", createdAt:new Date(), updatedAt:new Date() },
      {id:4,question: "В каком городе в музее хранится самый большой кусок малахита в мире", answer: "Санкт-Петербург", value:"500", createdAt:new Date(), updatedAt:new Date() },
      {id:5,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:6,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:7,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:8,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:9,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:10,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:11,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:12,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:13,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:14,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
      {id:15,question: "Test3", answer: "Test3", value:"300", createdAt:new Date(), updatedAt:new Date() },
    ];

    await queryInterface.bulkInsert('Questions', rawQuestions);
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Questions');
  }
};
