const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS480D', {
    'PC#': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PCTID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PCLINE: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PCCOL1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCCOL2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCCOL3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCCOL4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCCOL5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PCCOL6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCCOL7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PCBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS480D',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
