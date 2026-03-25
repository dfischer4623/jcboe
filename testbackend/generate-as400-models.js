const SequelizeAuto = require('sequelize-auto');
const path = require('path');
const options = {
  dialect: 'mssql',
  host: '10.0.0.42',
  port: '1433',
  database: 'as400data',
  username: 'sa',
  password: 'JCBOE456',
  directory: path.resolve(__dirname, './app/models/'),
  tables: ['PSTU301D', 'PSTU320D', 'PSTU350D', 'PSTU360D', 'PATT420', 'PGRD450'],
  additional: {
    timestamps: false,
    underscored: false // AS400 tables often use uppercase/weird names
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
  if (err) {
    console.error('❌ Error generating models:', err);
    process.exit(1);
  }
  console.log('✅ AS400 models generated successfully!');
  console.log('📋 Generated tables:', Object.keys(auto.tables));
});
