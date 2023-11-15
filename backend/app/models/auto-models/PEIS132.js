const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS132', {
    ENDID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ENDDES: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ENDSRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS132',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
