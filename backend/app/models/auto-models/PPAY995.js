const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY995', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOCYR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOCPL1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HOFDT1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HOTDT1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HOODT1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HOOTM1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HOUSR1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HOSPC1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HOR011: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR021: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    HOR031: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    HOR041: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR051: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HOR061: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR071: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HOR081: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR091: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR101: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR111: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR121: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR131: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR141: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR151: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR161: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOCPL2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HOFDT2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HOTDT2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HOODT2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HOOTM2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    HOUSR2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HOSPC2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR012: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR022: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    HOR032: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    HOR042: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR052: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HOR062: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR072: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HOR082: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR092: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR102: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR112: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR122: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR132: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR142: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR152: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR162: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOCPL3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    HOFDT3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOTDT3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOODT3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOOTM3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOUSR3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    HOSPC3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR013: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR023: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR033: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR043: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR053: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR063: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR073: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR083: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR093: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR103: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR113: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR123: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR133: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR143: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR153: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HOR163: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY995',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
