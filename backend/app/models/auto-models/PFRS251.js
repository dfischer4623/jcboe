const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PFRS251', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSSID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WSDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'WSFIL#': {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSCLYR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSSSN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSESTB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WSLOC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSFEIN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSNAM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSADD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSADD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSCTY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSFPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSZIP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSZIP2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSSEC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSSTC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSST2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSEIN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSEI2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSENC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WSSEN2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSTPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSTP2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSOTH: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSOT2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSLEIN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSLEI2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSLTPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSLTP2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSLENC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSLEN2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSRET: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTPSP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSLNAM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSLNA2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSNAM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSSNA2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSOR01: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    WSOR02: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR03: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR04: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR05: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR06: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR07: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR08: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR09: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR10: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    WSOR11: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR12: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR13: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR14: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR15: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR16: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR17: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR18: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR19: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR20: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR21: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR22: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR23: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR24: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR25: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR26: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR27: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR28: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR29: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR30: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR31: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR32: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR33: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR34: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR35: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR36: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR37: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR38: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR39: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSOR40: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    WSTS01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS15: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS16: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS17: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS18: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS19: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS20: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS21: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS22: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS23: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS24: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS25: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS26: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS27: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS28: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS29: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS30: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS31: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS32: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS33: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS34: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS35: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS36: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS37: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS38: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS39: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSTS40: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PFRS251',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
