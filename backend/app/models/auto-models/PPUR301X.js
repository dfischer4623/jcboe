const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPUR301X', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNNO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    V1CL99: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    V2CL99: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    V1CLBW: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    V2CLBW: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPUR301X',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
