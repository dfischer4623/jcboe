const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tutorials', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tutorials',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__tutorial__3213E83F41D4F139",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
