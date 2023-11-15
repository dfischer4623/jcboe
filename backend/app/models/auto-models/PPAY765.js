const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY765', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDWIDE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDTTL1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDTTL2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDTTL3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDFDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RDTDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RDEGRP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDESSN: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    RDPDTL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDPTDT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    RDPVND: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    RDPDED: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDPCPI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDLCNT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDSORT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDSR01: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDSR02: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDSR03: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDSR04: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDSR05: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDSR06: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDTL01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDTL02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDTL03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDTL04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDTL05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDTL06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDPG01: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDPG02: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDPG03: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDPG04: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDPG05: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDPG06: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL11: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL12: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL13: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL21: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL22: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL23: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL31: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL32: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL33: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL41: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL42: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL43: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL51: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL52: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL53: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDCL61: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL62: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL63: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL71: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL72: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL73: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL81: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL82: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL83: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL91: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL92: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDCL93: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY765',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
