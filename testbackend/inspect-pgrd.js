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

async function inspectTable() {
  try {
    await sequelize.authenticate();
    const [results] = await sequelize.query("SELECT TOP 5 * FROM PGRD450");
    console.log(JSON.stringify(results, null, 2));
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

inspectTable();
