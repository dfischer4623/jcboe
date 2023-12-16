const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS205_ORIG', {
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
    }
  }, {
    sequelize,
    tableName: 'PEIS205_ORIG',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "ETCODE",
        unique: true,
        fields: [
          { name: "ETCODE" },
        ]
      },
    ]
  });
};
