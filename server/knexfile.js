// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      port: 5432,
      user: "postgres",
      password: "postgres",
      database: "beam_api",
    },
  },
  production: {
    client: "postgresql",
    connection: {
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
