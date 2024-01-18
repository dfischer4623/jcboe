const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppay802s', {
    'HA#': {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    HAJOB: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    HAABS: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    'HARUN#': {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    HAPDTC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HAPDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HACDTC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HACDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HAPUSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HABAL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HACBBL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HACERN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HACUSE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HACPD: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HACDCK: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HACADJ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HACLST: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HACCMP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HAFBBL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HAFERN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HAFUSE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HAFPD: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HAFDCK: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HAFADJ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HAFLST: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HAFCMP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HAUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    HABUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ppay802s',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__ppay802s__117ADD441FB3D587",
        unique: true,
        fields: [
          { name: "HA#" },
          { name: "HAJOB" },
          { name: "HAABS" },
        ]
      },
    ]
  });
};
