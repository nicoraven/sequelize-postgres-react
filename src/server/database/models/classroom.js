'use strict';

module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define('Classroom', {
    name: DataTypes.STRING
  }, {});
  // eslint-disable-next-line func-names
  Classroom.associate = function (models) {
    // associations can be defined here
    Classroom.hasMany(models.Session, {
      foreignKey: 'classroomId',
      as: 'sessions',
      onDelete: 'CASCADE',
    });
  };
  return Classroom;
};
