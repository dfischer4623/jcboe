const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PFRS000', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FILCLI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FILYR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FILUSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FILDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FILTIM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FILDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FILCLX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FILTYR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PFRS000',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
