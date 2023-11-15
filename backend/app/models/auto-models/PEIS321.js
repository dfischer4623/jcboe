const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS321', {
    'EE#': {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    EELINE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EELNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEFNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEMNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEPNAM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EENPRE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EENSUF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EEFMTN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EELNMC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEFNMC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEMNMC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEPNMC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EEADD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEADD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EECITY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEZIP1: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    EEZIP2: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EECTRY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEPRV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EECPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EEGPC: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    EEHTL0: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    EEHTL2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EEOTL0: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    EEOTL2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EEEXTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EERLTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EEPRTY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EEUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EEBUSY: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS321',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
