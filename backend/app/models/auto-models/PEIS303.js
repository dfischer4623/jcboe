const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS303', {
    'EA#': {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    EALINE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EAINCD: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EADEG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EADYR: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EADAHR: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    EADMAJ: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EADMIN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EADGPA: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    EADSCL: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    EALYR: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EAUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EABUSY: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS303',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
