const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PSTU350D', {
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMARA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMPHN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMGS1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGF1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGM1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGS2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGF2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGM2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'FAMS#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMSPX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMSNM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMSTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMSSX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'FAMSA#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'FAMM#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMPX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMNM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMSX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'FAMMA#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMCTC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMCTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMPRV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMZIP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMZP2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMCPC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMAP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMFWK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMWK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMFPA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMFPP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMFPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMPA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMMPP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMMPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMFFD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMFD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMFAR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMFPH: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMMCT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMPR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMZP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMMZ2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMMCP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGT1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGT2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMUNL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGAR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMGPH: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMGUN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMFOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'FAMGS#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGPX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGNM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGSX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'FAMGA#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGCY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GAMST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGPV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMGZP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMGZ2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMGCP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'FAMMG#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMGP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMGN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMGT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMGX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMGA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMGC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMGS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMGV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMMGZ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMMG2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GAMMG6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMEM1: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    FAMEM2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    FAMD11: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMA11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMP11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAME11: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMD12: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMA12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMP12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAME12: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMD21: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMA21: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMP21: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAME21: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMD22: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FAMA22: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAMP22: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAME22: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PSTU350D',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
