require('dotenv').config();
const { dbUsername, dbUserPassword, dbName, dbHost, dbDialect, dbPoolMax, dbPoolMin, dbPoolAquire, dbPoolIdle } = process.env;

module.exports = {
  "development": {
    "username": dbUsername,
    "password": dbUserPassword,
    "database": dbName,
    "host": dbHost,
    "dialect": dbDialect
  },
  "test": {
    "username": dbUsername,
    "password": dbUserPassword,
    "database": dbName,
    "host": dbHost,
    "dialect": dbDialect
  },
  "production": {
    "username": dbUsername,
    "password": dbUserPassword,
    "database": dbName,
    "host": dbHost,
    "dialect": dbDialect
  }
}
