'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Classrooms', [
      {
        name: 'Classroom 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Classroom 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Classroom 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Classroom 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Classroom 5',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Classrooms', null, {})
};
