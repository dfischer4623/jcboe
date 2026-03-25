const { Sequelize, DataTypes } = require('sequelize');
const initModels = require('./app/models/init-models');

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

const models = initModels(sequelize);

async function inspectStudent() {
  try {
    await sequelize.authenticate();
    const student = await models.PSTU301D.findOne();
    if (student) {
      console.log('--- Student (PSTU301D) ---');
      console.log(JSON.stringify(student.toJSON(), null, 2));
      
      const id = student.STUID;
      const registration = await models.PSTU360D.findAll({ where: { RGNSTU: id } });
      console.log('--- Registration (PSTU360D) ---');
      console.log(JSON.stringify(registration.map(r => r.toJSON()), null, 2));

      const family = await models.PSTU350D.findOne({ 
          where: { 
              FAMARA: student.STUPHA,
              FAMPHN: student.STUPHN
          } 
      });
      console.log('--- Family (PSTU350D) ---');
      if (family) {
        console.log(JSON.stringify(family.toJSON(), null, 2));
      } else {
        console.log('No family found for phone:', student.STUPHA, student.STUPHN);
      }

      const school = await models.PSTU320D.findOne({ where: { SCHID: student.STUSCH } });
      console.log('--- School (PSTU320D) ---');
      if (school) {
        console.log(JSON.stringify(school.toJSON(), null, 2));
      } else {
        console.log('No school found for ID:', student.STUSCH);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    await sequelize.close();
  }
}

inspectStudent();
