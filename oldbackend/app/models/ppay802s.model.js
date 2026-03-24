module.exports = (sequelize, Sequelize) => {
  const Ppay802s = sequelize.define("ppay802s", {
    HANUM: {
      type: Sequelize.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    HAJOB: {
      type: Sequelize.STRING(32),
      allowNull: false,
    },
    HAABS: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    HARUN: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    HAPDTC: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    HAPDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    HACDTC: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    HACDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    HAPUSR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    HABAL: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HACBBL: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HACERN: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HACUSE: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HACPD: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HACDCK: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HACADJ: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HACLST: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HACCMP: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HAFBBL: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HAFERN: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HAFUSE: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HAFPD: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HAFDCK: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HAFADJ: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HAFLST: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HAFCMP: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    HAUSG: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    HABUSY: {
      type: Sequelize.INTEGER,
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
 
    return Ppay802s;
  };