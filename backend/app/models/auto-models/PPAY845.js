const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY845', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REMPL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RLINE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RLOCN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RPOSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RFTE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RRATE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RUNIT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RFROM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RTO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RCOMT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RRTYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RTABL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGRAD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RSTEP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RACCM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RMIS1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RMIS2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RMIS3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RMIS4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY845',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
