module.exports = (sequelize, Sequelize) => {
  const Ppur410lxs = sequelize.define("ppur410lxs", {
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
    POLINE: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POLQTY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POLCAN: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POLREC: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POLPAY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POLOUT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    POLDES: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLPAR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLUM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLIPT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLFAD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLFA: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLACT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLSUB: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLDGR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLCST: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLTX1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLCAT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLTX2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLFRE: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLDS$: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLDS: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLEXT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLACR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    POLAPV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: Sequelize.STRING(50),
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

  return Ppur410lxs;
};