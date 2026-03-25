const db = require('./app/models');
const PSTU301D = db.PSTU301D;

async function debugFindAll() {
  try {
    console.log('Testing PSTU301D.findAll()...');
    const data = await PSTU301D.findAll({ where: {}, limit: 10 });
    console.log('Success! Found', data.length, 'students.');
    if (data.length > 0) {
        console.log('First student:', data[0].STUFNM, data[0].STUSNM);
    }
  } catch (err) {
    console.error('❌ Error in findAll:', err);
    if (err.parent) {
        console.error('Parent error:', err.parent);
    }
  } finally {
    await db.sequelize.close();
  }
}

debugFindAll();
