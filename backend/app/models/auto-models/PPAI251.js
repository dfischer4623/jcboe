const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI251', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    CM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ESSID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ESDEXC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'ESFIL#': {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESSSAN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ESLNAM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESFNAM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESMNAM: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESPNAM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESNPRE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESNSUF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESADD1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESADD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESCITY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ESCNTY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPRV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESZIP1: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESZIP2: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESCTRY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESADSC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESSEX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ESETH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ESETHX: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESSTAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ESPASN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ESPAD1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPAD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPCTY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPCNT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPPRV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPZP1: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESPZP2: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESPGPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPCTR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESHTL0: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESHTL2: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESHTLS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESOTL0: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOTL2: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESEXTN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESOTLS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESLOC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESLOC2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESLOCP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ESHDT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESHSC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESDEPT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESROOM: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ESCAT1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESCAT2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESCAT3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EXCAT4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESCAT5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPREV: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESSDST: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ESSST: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ESSTOT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ESSOT1: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ESSOT2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ESSOT3: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ESLNSP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ESSPSE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMNSP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    'ESSPS#': {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESVET: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESVETC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESCLS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ESDRUG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    'ESSR#': {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESMSC1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMSC2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMSC3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMSC4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMSC5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMSC6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMSC7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMSC8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESMSC9: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESOR01: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR02: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR03: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR04: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR05: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR06: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR07: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR08: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR09: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR10: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR11: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR12: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ESOR13: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR14: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR15: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR16: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR17: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR18: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR19: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR20: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR21: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR22: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR23: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR24: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR25: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR26: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR27: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR28: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR29: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR30: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR31: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR32: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR33: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR34: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR35: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR36: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR37: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR38: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR39: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR40: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR41: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR42: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR43: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR44: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR45: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR46: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR47: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR48: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR49: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR50: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR51: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR52: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR53: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR54: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR55: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR56: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR57: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR58: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR59: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR60: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR61: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR62: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR63: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR64: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR65: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR66: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR67: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR68: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR69: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR70: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR71: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR72: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR73: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR74: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR75: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR76: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR77: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR78: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR79: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESOR80: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESTS01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS15: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS16: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS17: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS18: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS19: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS20: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS21: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS22: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS23: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS24: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS25: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS26: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS27: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS28: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS29: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS30: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS31: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS32: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS33: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS34: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS35: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS36: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS37: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS38: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS39: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS40: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS41: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS42: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS43: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS44: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS45: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS46: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS47: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS48: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS49: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS50: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS51: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS52: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS53: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS54: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS55: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS56: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS57: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS58: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS59: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS60: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS61: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS62: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS63: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS64: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS65: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS66: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS67: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS68: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS69: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS70: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS71: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS72: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS73: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS74: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS75: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS76: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS77: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS78: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS79: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTS80: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAI251',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
