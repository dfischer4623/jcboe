module.exports = (sequelize, Sequelize) => {
  const Ppur410hs = sequelize.define("ppur410hs", {
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
    }
  });
 
    return Ppur410hs;
  };
