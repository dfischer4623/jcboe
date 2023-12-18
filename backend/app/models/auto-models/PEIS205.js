const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS205', {
    ETCODE: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'PEIS205',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
