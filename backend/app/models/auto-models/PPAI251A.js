const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI251A', {
    EVSID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EVCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EVVALU: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EVUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EVBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAI251A',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
