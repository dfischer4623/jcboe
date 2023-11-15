const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY122H', {
    DDTABL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDJURS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDHDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDHCLS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHCSS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHVAN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DDHFC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDHTEX: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDHPEN: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DDHBAS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    GR1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GR2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    GR3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    GR4: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    GR5: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDHAEX: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DDHACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDHCAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDHUNI: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DDHCTH: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DDHJ: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DDHP: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DDHM: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    'DDHID#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDHGB2: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DDHMXP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DDHMXY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DDHMXL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DDHEXP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DDHEXY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DDHEXL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DDHDD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHJUR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHPRI: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDHIND: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDHOMT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DDHO01: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDHO02: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDHO03: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDHO04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHO15: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHLPG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHLLB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHAPG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHALB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDHUSG: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DDHBSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY122H',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
