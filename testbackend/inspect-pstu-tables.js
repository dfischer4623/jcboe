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

async function inspectTables() {
  try {
    await sequelize.authenticate();
    
    console.log('--- PSTU350D ---');
    const [res350] = await sequelize.query("SELECT TOP 1 * FROM PSTU350D");
    console.log(JSON.stringify(res350, null, 2));

    console.log('\n--- PSTU360D ---');
    const [res360] = await sequelize.query("SELECT TOP 1 * FROM PSTU360D");
    console.log(JSON.stringify(res360, null, 2));
    
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

inspectTables();
