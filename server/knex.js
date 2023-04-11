const knex = require('knex');
const config = require('./knexfile');
const environment = 'development';
const knexConfig = config[environment];

module.exports = knex(knexConfig);
