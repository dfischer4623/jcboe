const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS322', {
    'EB#': {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    EBLINE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EBSSAN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EBLNAM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EBFNAM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EBMNAM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBFNCM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBNPRE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBNSUF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBFMTN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBLNMC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBFNMC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBMMMC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBADD1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EBADD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBCITY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EBCNTY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBST: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EBZIP1: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EBZIP2: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EBCTRY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBPRV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBCPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBGPC: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    EBHTL0: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EBHTEL: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EBHUNL: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EBOTL0: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EBOTEL: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EBOUNL: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EBEXTN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBRLTN: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EBUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EBBUSY: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS322',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
