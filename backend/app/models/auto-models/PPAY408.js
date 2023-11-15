const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY408', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    THSSN: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    THJOB: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    THJOBS: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    THPEDT: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    THSUBS: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    THACT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    THRATE: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    THCUSR: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    THCDAT: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY408',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
