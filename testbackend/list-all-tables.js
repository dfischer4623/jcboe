const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('as400data', 'sa', 'JCBOE456', {
  host: '10.0.0.42',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  }
});

async function listAllTables() {
  try {
    await sequelize.authenticate();
    const [results] = await sequelize.query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES ORDER BY TABLE_NAME");
    results.forEach(table => console.log(table.TABLE_NAME));
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

listAllTables();
