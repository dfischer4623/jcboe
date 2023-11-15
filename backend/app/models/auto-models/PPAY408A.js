const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY408A', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TMLSSN: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    TMLJOB: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    TMLJSQ: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TMLPED: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    TMLLIN: {
      type: DataTypes.TIME,
      allowNull: false
    },
    TMLSRL: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TMLDAT: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    TMLLOC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TMLDAY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TMLABS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLRSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLQTY: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TMLDRT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TMLDAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TMLDES: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TMLXSN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TMLXJB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TMLXJS: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TMLXSR: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TMLCUS: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TMLCDT: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY408A',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
