const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS141', {
    EICODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EINAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EITYPE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EIFICE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EICNTD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EICNTP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EIADD1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EIADD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EICITY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EICNTY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EIST: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EIPRV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EIZIP1: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EIZIP2: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EIGPC: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EICTRY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EITELA: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EITEL: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EITELX: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EIFTLA: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EIFTEL: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EIUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EIBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS141',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
