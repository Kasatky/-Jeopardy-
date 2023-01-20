/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rawQuestions = [
      {
        id: 1,
        question: 'Сколько раз похищали скульптуру Чижика-пыжика?',
        answer: '7',
        value: '100',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        question:
          'С какого моста в Петербурге можно увидеть семь других мостов?',
        answer: 'Троицкий',
        value: '200',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        question:
          "Название этого музея певодится с французского как 'парковый павильон, место уединения, малый сельский дворец'",
        answer: 'Эрмитаж',
        value: '300',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        question:
          'В каком городе в музее хранится самый большой кусок малахита в мире',
        answer: 'Санкт-Петербург',
        value: '400',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        question: 'Какой город самый холодный в России и на планете?',
        answer: 'Верхоянск',
        value: '500',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        question: 'В чем разница между под землей и в земле?',
        answer: 'В предлогах и окончаниях',
        value: '100',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        question: 'Когда у бессмертных начинается кризис среднего возраста?',
        answer: 'Никогда, т.к они не боятся стареть',
        value: '200',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        question:
          'Если она морячка и он моряк, почему они не встретятся никак?',
        answer: 'Потому что он на суше, она на море',
        value: '300',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        question: 'Что превращает девушку в женщину?',
        answer: 'Возраст',
        value: '400',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        question: 'Какой болезнью на земле не болеют?',
        answer: 'Морской',
        value: '500',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        question: 'Easy come, easy go',
        answer: 'Легко нашел - легко потерял',
        value: '100',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        question: 'Dont judge a book by its cover',
        answer: 'Не суди о книге по обложке',
        value: '200',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        question: 'A cat in gloves catches no mice',
        answer: 'Без труда не выловишь и рыбку из пруда',
        value: '300',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        question: 'Like father, like son',
        answer: 'Яблоко от яблони недалеко падает',
        value: '400',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        question: 'As the fool thinks, so the bell clinks',
        answer: 'Дуракам закон не писан',
        value: '500',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Questions', rawQuestions);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions');
  },
};
