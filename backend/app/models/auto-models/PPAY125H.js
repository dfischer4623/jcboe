const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY125H', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    CM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PHKEY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PHDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    J1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    J2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    J3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    J4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    J5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    J6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    J7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    J8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    J9: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    J10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D9: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PHPER: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PHACCT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PHTAXF: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PHTAXS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PHTXCO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PHTXCI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PHTAXO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PHFICA: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PHSPCT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PHSAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PHDHRS: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PHWHRS: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PHMHRS: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PHBHRS: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PHSHRS: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PHOURS: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PHOTM: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY125H',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
