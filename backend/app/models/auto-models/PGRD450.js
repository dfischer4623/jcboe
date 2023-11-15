const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PGRD450', {
    TRNSTU: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TRNYR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TRNTRM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TRNSEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TRNDIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNSCH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNCLS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNREQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNTCE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TRNTCA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TRNTGP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TRNGRD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNSUB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNGPA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNPDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TRNPDTC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNSTS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNCOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNGLV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNGTL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TRNEXA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TRNUNA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PGRD450',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
