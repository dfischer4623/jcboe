const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('peis480ds', {
    PC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PCTID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCLINE: {
      type: DataTypes.FLOAT,
      allowNull: true
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
      type: DataTypes.STRING(50),
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
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'peis480ds',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
