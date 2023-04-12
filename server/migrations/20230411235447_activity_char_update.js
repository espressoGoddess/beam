/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('entries', (table) => {
    table.string('activity', 10000).alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('entries', (table) => {
    table.dropColumn('activity');
  });
  await knex.schema.alterTable('entries', (table) => {
    table.string('activity');
  })
};;
