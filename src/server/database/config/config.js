require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true
    },
    timezone: '+08:00',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true
    },
    timezone: '+08:00',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true
    },
    timezone: '+08:00',
  },
};
