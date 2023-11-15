const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS175', {
    TDID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TDDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TDSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TDYR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TDHD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDHD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDHD3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDHD4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDHD5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDHD6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDHD7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDTYPE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TDVER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TDBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS175',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
