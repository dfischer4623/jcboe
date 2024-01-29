const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppai719x', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TMLRUN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RMLRSQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TMLSSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TMLJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLJSQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TMLPED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLLIN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TMLSRL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TMLDAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLLOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLDAY: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      allowNull: true
    },
    TMLDRT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TMLDAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLXSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TMLXJB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLXJS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TMLXSR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TMLCUS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TMLCDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ppai719x',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
