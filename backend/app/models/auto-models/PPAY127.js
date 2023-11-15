const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY127', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    CM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ADDKEY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ADDDES: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ADDPER: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ADDACT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ADDTXF: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ADDTXS: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ADDTXC: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ADDTXL: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ADDTXO: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ADDFIC: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ADDAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ADDPCT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ADDOCK: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY127',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
