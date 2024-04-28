const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lacp441s', {
    USG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHVEN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHINV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHPOD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHPON: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHPOV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHREQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHVCH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHIDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHDDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHIAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHVAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHEBY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHECL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHABY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHACL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHPDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHBCH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APH109: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHOAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHPAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHDAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHCDY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHCOP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHCTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHBNK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHBAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHFRM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHCHK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHCDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHCAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APHNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    member: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lacp441s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
