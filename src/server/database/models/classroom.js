'use strict';

module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define('Classroom', {
    name: DataTypes.STRING,
    sessionId: DataTypes.INTEGER
  }, {});
  // eslint-disable-next-line func-names
  Classroom.associate = function (models) {
    // associations can be defined here
    Classroom.belongsTo(models.Session, {
      foreignKey: 'sessionId',
      as: 'session',
      onDelete: 'CASCADE',
    });
  };
  return Classroom;
};
