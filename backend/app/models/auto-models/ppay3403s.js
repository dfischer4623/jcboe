const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppay3403s', {
    ADAT: {
      type: DataTypes.TINYINT,
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
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DVSSAN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DVDED: {
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SJ2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SJ3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SJ4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SJ5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SJ6: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVEMT: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVOTCC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVDLTF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVDPRI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVEMXP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DVEMXY: {
      type: DataTypes.STRING(50),
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
    },
    schyear: {
      type: DataTypes.CHAR(10),
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
    tableName: 'ppay3403s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
