'use strict';

module.exports = (sequelize, DataTypes) => {
  const Recurrence = sequelize.define('Recurrence', {
    name: DataTypes.STRING
  }, {});
  // eslint-disable-next-line func-names
  Recurrence.associate = function (models) {
    // associations can be defined here
    Recurrence.hasMany(models.Session, {
      foreignKey: 'recurrenceId',
      as: 'recurrence',
      onDelete: 'CASCADE',
    });
  };
  return Recurrence;
};
