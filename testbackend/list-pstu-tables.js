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

async function listPstuTables() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    const [results, metadata] = await sequelize.query(
      "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME LIKE 'PSTU%'"
    );
    
    console.log('PSTU Tables found:');
    results.forEach(table => console.log(table.TABLE_NAME));
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

listPstuTables();
