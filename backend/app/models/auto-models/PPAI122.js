const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI122', {
    DGID: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DGDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DGSDES: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DGUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DGBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAI122',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
