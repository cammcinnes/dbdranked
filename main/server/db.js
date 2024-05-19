const loadEnvFile = require('./utils/envUtil');
const envVariables = loadEnvFile('./.env');
const {Pool} = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: envVariables.PASS,
    port: 5432,
    database: 'dbdranks'
});

module.exports = pool;