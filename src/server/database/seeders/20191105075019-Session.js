'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Sessions', [
      {
        name: 'Software Engineering Immersive',
        instructor: 'Akira Wong',
        timeStart: '2019-10-19 09:00:00+08',
        timeEnd: '2019-10-19 17:00:00+08',
        recurrenceId: 1,
        typeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'User Experience Design Immersive',
        instructor: 'Wei',
        timeStart: '2019-10-19 09:00:00+08',
        timeEnd: '2019-10-19 17:00:00+08',
        recurrenceId: 1,
        typeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Sessions', null, {})
};
