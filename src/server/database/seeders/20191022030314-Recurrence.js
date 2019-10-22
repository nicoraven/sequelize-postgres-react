'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Recurrences', [
      {
        name: 'Weekday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Once-off',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Every Saturday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Part-time thrice weekly',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Recurrences', null, {})
};
