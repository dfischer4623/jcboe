const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY110', {
    CACODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CADESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CABDAT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CABCEN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAEDAT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAECEN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM5: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM6: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM7: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM8: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM9: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM10: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM11: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWM12: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAWTOT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CADATE: {
      type: DataTypes.STRING(1500),
      allowNull: false
    },
    CADAY: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    CATYPE: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY110',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
