module.exports = (sequelize, Sequelize) => {
  const Ppai713s = sequelize.define("ppai713s", {
    USG: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PARUN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PASEQ: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PASSN: {
      type: Sequelize.STRING(50),
      allowNull: true,
      primaryKey: true
    },
    PAPSEQ: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PAJOB: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PATYP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PAADN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PAFIS: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PACAL: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PACUR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PADESC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PACK: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PAONEA: {
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
    },
    JDTITL: {
      type: Sequelize.STRING(50),
      allowNull: true
    }
  });
 
    return Ppai713s;
  };