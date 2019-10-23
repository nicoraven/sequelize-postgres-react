'use strict';

module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    name: DataTypes.STRING,
    instructor: DataTypes.STRING,
    timeStart: DataTypes.DATE,
    timeEnd: DataTypes.DATE,
    recurrenceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  // eslint-disable-next-line func-names
  Session.associate = function (models) {
    // associations can be defined here
    Session.hasOne(models.Classroom, {
      foreignKey: 'id',
      as: 'classroom',
      onDelete: 'CASCADE',
    });
    Session.belongsTo(models.Type, {
      foreignKey: 'typeId',
      as: 'type',
      onDelete: 'CASCADE',
    });
    Session.belongsTo(models.Recurrence, {
      foreignKey: 'recurrenceId',
      as: 'recurrence',
      onDelete: 'CASCADE',
    });
  };
  return Session;
};
