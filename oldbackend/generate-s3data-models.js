const SequelizeAuto = require('sequelize-auto');
const path = require('path');
const options = {
  dialect: 'mssql',
  host: '10.0.0.42',
  port: '1433',
  database: 's3data', // Changed to s3data database
  username: 'sa',
  password: 'JCBOE456',
  directory: path.resolve(__dirname, './s3data-models/'), // Output to s3data-models folder
  additional: {
    timestamps: false,
    underscored: true
  },
  dialectOptions: {
    options: {
      encrypt: true,
      trustServerCertificate: true
    }
  }
};

const auto = new SequelizeAuto(null, null, null, options);
auto.run(function (err) {
  if (err) throw err;
  console.log('✅ S3Data models generated successfully!');
  console.log('📋 Generated tables:', Object.keys(auto.tables));
  console.log('📁 Models saved to: ./s3data-models/');
  console.log('');
  console.log('Next steps:');
  console.log('1. Review the generated models in ./s3data-models/');
  console.log('2. Copy the models you need to ./app/models/');
  console.log('3. Add them to ./app/models/index.js using s3sequelize');
});