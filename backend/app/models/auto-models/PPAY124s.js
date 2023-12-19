const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY124s', {
    JDKEY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JDTITL: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY124s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
