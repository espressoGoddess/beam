const knex = require("knex");
const config = require("./knexfile");
const environment = process.env.NODE_ENV;
const knexConfig = config[environment];

module.exports = knex(knexConfig);
