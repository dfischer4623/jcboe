const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY3403', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DVSSAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'DVDED#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVJUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DVPCT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SJ1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SJ2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SJ3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SJ4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SJ5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SJ6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DVNTCK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'DVID#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVCKS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DVEMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DVECT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DVSDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DVSCEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DVEDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DVECEN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DVOTCF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVOTCD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DVOTCC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DVDLTF: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DVDPRI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVEMXP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DVEMXY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DVEMXL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DVRMXP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DVRMXY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DVRMXL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DVEXT1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DVEXT2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DVEXT3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY3403',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
