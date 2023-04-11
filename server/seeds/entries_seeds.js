const entryData = require('../data/entryData');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('entries').del()
  await knex('entries').insert(entryData);
};
