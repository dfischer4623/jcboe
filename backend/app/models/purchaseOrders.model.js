module.exports = (sequelize, Sequelize) => {
  const PurchaseOrders = sequelize.define("purchaseOrders", {
    USG: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PODOC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PO: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    POVEND: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    POATTN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POREQ: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POREF: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POTYPE: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PODAT: {
      type: Sequelize.STRING(5),
      allowNull: true
    },
    PODREQ: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POSHIP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POMSG: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POSTRM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POPTRM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PONOTE: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    PORREC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POHOLD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POAPCL: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POACCT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POEACT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POBLNK: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POSUB: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POTAX1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POTCAT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POTAX2: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    PODISC: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POTFRE: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POFRT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POTOT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POTTAX: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POTDIS: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POTPAY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POTFP: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POPRNT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POREV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PODRAF: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POCONF: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POREC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POIUSR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POAUSR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POUNAP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PORSN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PORVDT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PODATE: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    POREDATE: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    PORVDATE: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    VNNO: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    VNNAME: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNNAM2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNADDR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNADD2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNATTN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNCITY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNST: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNZIP: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    VNIP2: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    VNPROV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNPC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNRMAT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNRMA1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNRMA2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNRMCT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNRMST: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNRMZ1: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    VNRMZ2: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    VNRMPR: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    VNRMPC: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    VNAREA: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    VNPHON: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    VNEXTN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNREL: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    VNCATY: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    VNHOLO: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    VNHOLP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNMIN: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    VNCASH: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    VNTRAD: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    VNSHIP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNPMT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNENC: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    VNACCR: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    VNCUR: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    VNPRI: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    VNACCT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNPRY: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    VNNOPO: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    VN1099: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VN10RF: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    VNCR10: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    VNPY10: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ADAT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    RETN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    BA: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SESN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    CM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHCODE: {
      type: Sequelize.STRING(50),
      allowNull: true,
      primaryKey: true
    },
    SHNAME: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHATTN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHADR1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHADR2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHCITY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHST: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHZIP1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHZIP2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHPROV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHPC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHAREA: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHPHON: {
      type: Sequelize.STRING(50),
      allowNull: true
    }
  });
 
    return PurchaseOrders;
  };
