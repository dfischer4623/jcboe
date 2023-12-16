const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('peis205s', {
    ETCODE: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    ETDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ETSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ETEEOC: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ETUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ETBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
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
    tableName: 'peis205s',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK_peis205s",
        unique: true,
        fields: [
          { name: "ETCODE" },
        ]
      },
    ]
  });
};
