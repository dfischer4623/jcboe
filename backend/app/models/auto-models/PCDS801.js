const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PCDS801', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CKANAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKBACT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CKBFRM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'CKCHK#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CKJDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CKOAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CKVOID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKREC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CKRAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CKRJDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CKSUB: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PCDS801',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
