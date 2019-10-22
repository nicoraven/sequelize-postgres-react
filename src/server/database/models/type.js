'use strict';

module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING
  }, {});
  // eslint-disable-next-line func-names
  Type.associate = function (models) {
    // associations can be defined here
    Type.hasMany(models.Session, {
      foreignKey: 'typeId',
      as: 'type',
      onDelete: 'CASCADE',
    });
  };
  return Type;
};
