module.exports = (sequelize, Sequelize) => {
  const Ppai719as = sequelize.define("ppai719as", {
    USG: {
      type: Sequelize.STRING(1),
      allowNull: true  // ✅ Now it can be NULL,

    },
    BUSY: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 'X'
    },
    TMLRUN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    RMLRSQ: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    TMLSSN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    TMLJOB: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLJSQ: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    TMLPED: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLLIN: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    TMLSRL: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    TMLDAT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLLOC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLDAY: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    TMLABS: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLRSN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLQTY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    TMLDRT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    TMLDAC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLDES: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLXSN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    TMLXJB: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLXJS: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    TMLXSR: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    TMLCUS: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TMLCDT: {
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

  return Ppai719as;
};