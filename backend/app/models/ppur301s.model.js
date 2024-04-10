module.exports = (sequelize, Sequelize) => {
  const Ppur301s = sequelize.define("ppur301s", {
    USG: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.TINYINT,
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
    createdAt: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: Sequelize.DATEONLY,
      allowNull: true
    }
  });
 
    return Ppur301s;
  };