const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PNJF301', {
    EXNUM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EXPENS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EX1012: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EXFRPC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EXTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EXJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EXSALO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EXPAYP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EXCNTB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EXSEXP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EXDEXP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EXOEXP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    USG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PNJF301',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK_PNJF301",
        unique: true,
        fields: [
          { name: "EXNUM" },
        ]
      },
    ]
  });
};
