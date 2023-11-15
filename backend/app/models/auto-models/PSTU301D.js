const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PSTU301D', {
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUPHA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUPHN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUAR2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUPH2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUSNM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUFNM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUMNM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUONM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUMIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUSRT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUSUF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUSEN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUSOC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUSEX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUBCT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUBST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUBDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUBDTC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUPN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUAR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUUNL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUPRV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STURES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU01: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU02: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU03: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU04: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU05: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU06: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU07: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU08: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU09: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU11: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU12: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU13: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU14: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STU15: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUCDN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUCSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUCCL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STULID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUNDN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUNSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUNCL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUNLN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STULDN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STULSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STULCL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STULLN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUSCH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUCCE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    STUCCA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    STUCGP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    STUTCE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    STUTCA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    STUTGP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    STUEDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUEDTC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUENR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUABS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STUFLA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUFLB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUFLC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUFLD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUFLE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUATA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUATB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUATC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUATD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUTTA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUTAB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUTAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUTAD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUTAE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUDRG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STURDH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STUPHT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PSTU301D',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
