const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logins', {
    ID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    PassWord: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'logins',
    schema: 'dbo',
    timestamps: false,
    underscored: true,
    indexes: [
      {
        name: "PK__Logins__C4196B9D6D5A2E39",
        unique: true,
        fields: [
          { name: "ID" },
          { name: "PassWord" },
        ]
      },
    ]
  });
};
