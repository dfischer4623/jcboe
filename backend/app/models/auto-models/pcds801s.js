const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcds801s', {
    USG: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RETN: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    SESN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CM: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CKANAN: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    CKBACT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CKBFRM: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    CKCHKN: {
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
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    CKREC: {
      type: DataTypes.CHAR(10),
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
    }
  }, {
    sequelize,
    tableName: 'pcds801s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
