const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS000', {
    FILCLI: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    FILYR: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    FILUSR: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FILDAT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FILTIM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FILDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FILCLX: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PEIS000',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK_PEIS000",
        unique: true,
        fields: [
          { name: "FILCLI" },
          { name: "FILYR" },
        ]
      },
    ]
  });
};
