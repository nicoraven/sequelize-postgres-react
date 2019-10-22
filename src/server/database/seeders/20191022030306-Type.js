'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Types', [
      {
        name: 'Full-Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Part-Time',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Workshop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Saturday Class',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Event',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Types', null, {})
};
