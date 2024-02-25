module.exports = (sequelize, Sequelize) => {
  const Ppai714s = sequelize.define("ppai714s", {
    USG: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    'PDRUN#': {
      type: Sequelize.TEXT,
      allowNull: true
    },
    PDSEQ: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PDSSN: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    PDJOB: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PDRTYP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PDRAT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    PDQTY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    PDHD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PDAMT: {
      type: Sequelize.FLOAT,
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
 
    return Ppai714s;
  };