require('dotenv').config();
const { dbUsername, dbUserPassword, dbName, dbHost, dbDialect, dbPoolMax, dbPoolMin, dbPoolAquire, dbPoolIdle } = process.env;
const dbConfig = {
    "username": dbUsername,
    "password": dbUserPassword,
    "database": dbName,
    "host": dbHost,
    "dialect": dbDialect,
    pool: {
        max: Number(dbPoolMax),
        min: Number(dbPoolMin),
        acquire: Number(dbPoolAquire),
        idle: Number(dbPoolIdle),
    },
    define: {
        freezeTableName: true,
    },
};
module.exports = {
    "development": dbConfig,
    "pre-production": dbConfig,
    "production": dbConfig
};
