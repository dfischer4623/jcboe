const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY124', {
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
    JDKEY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JDTITL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JD3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JD4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JD5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    JDPAY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AD3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AD4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AD5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AD6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AM1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AM2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AM3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AM4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AM5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AM6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    AB1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AB2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AB3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AB4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AB5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AB6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BM1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BM2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BM3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BM4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BM5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BM6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DD3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DD4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DD5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DD6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DJ1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DJ2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DJ3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DJ4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DJ5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DJ6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DM1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DM2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DM3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DM4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DM5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DM6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    JDPTYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDHDL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JDHPD: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    JDNDAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    JDWCC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    JDNPER: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY124',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
