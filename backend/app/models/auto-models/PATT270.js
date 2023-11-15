const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PATT270', {
    ENHDIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENHSCH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENHSTU: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENHREG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENHSUB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENHJDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENHCDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ENHYR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENHLOD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ENHCOD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENHCOM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENHNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENFNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PATT270',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
