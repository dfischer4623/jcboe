const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY302', {
    'EP#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EPEIC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPMART: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPMAR2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPMAR3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPMAR4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPMAR5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPEXF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EPEX2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EPEX3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EPEX4: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EPEX5: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EPNOT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EPNO2: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EPNO3: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EPNO4: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EPNO5: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EPNOF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPJURU: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPJURS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPJURC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPJURL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPJURO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EPFL01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPFL02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPFL03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPFL04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPFL05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPFL06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPFL07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPFL08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPFL09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPFL10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPDDAC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EPBASE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPADDT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPBAS2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPBAS3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPBAS4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPBAS5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPBAS6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EPBUSY: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY302',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
