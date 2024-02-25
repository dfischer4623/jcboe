const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY802ORIG', {
    HANUM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HAJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HAABS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HARUN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HAPDTC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HAPDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HACDTC: {
      type: DataTypes.INTEGER,
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
    tableName: 'PPAY802ORIG',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
