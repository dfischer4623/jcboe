const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppur410hs', {
    USG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PODOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    POVEND: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    POATTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POREQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POREF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PODAT: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PODREQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POSHIP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POMSG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POSTRM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POPTRM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PONOTE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PORREC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POHOLD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POAPCL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POACCT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POEACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POBLNK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POSUB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POTAX1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POTCAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POTAX2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PODISC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POTFRE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POFRT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POTOT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POTTAX: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POTDIS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POTPAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POTFP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POPRNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POREV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PODRAF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POCONF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POREC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POIUSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POAUSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POUNAP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PORSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PORVDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PODATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    POREDATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PORVDATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ppur410hs',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
