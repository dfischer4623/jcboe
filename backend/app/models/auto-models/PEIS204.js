const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS204', {
    VCCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VCDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VCSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VCUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VCBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS204',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
