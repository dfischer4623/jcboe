const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY375', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDEMPL: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    BDDEDC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BDCODE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDDAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    BDACCR: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    BD0050: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BD0075: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BD0100: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BD0200: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    BD0500: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BD1000: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BD5000: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    B10000: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDOSSN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BDONML: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BDONMF: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BDONMM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BDMTFL: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDOAD1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BDOAD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BDCITY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BDOSTA: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BDOZP1: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    BDOZP2: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    BDCOFN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BDCSSN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDCNML: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BDCNMF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BDCNMM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BDCAD1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BDCAD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BDCOT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BDCSTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BDCZP1: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDCZP2: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDCYTD: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    BDCSTL: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    BDVALY: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    BDVALL: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    BDYR01: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDMO01: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDDY01: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDYR02: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDMO02: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDDY02: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDYR03: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDMO03: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDDY03: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDYR04: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDMO04: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDDY04: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDYR05: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDMO05: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDDY05: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    BDUSER: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY375',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
