/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('entries', (table) => {
    table.increments('entry_id')
    table.string('user_id')
    table.string('date')
    table.string('feeling')
    table.string('activity')
    table.string('journal_entry', 10000)
    table.timestamps(true, true)
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('entries');
};
