module.exports = (sequelize, Sequelize) => {
  const Lacp441s = sequelize.define("lacp441s", {
    USG: {
      type: Sequelize.STRING(50),
      allowNull: true,
      primaryKey: true
    },
    BUSY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHVEN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHINV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHPOD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHPON: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHPOV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHREQ: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHVCH: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHIDT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHDDT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHIAC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHVAC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHDES: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHEBY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHECL: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHABY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHACL: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHPDT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHBCH: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APH109: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHOAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHPAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHDAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHCDY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHCOP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHCTN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHBNK: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHBAC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHFRM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHCHK: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHCDT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHCAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    APHNAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    member: {
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
 
    return Lacp441s;
  };