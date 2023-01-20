/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const themes = [
      { id: 1, title: 'Россия', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, title: 'Загадки', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, title: 'Перевод', createdAt: new Date(), updatedAt: new Date() },
    ];

    await queryInterface.bulkInsert('Themes', themes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes');
  },
};
