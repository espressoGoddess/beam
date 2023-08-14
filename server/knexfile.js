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

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: "postgresql",
    connection: {
      connectionString: process.env.POSTGRES_URL,
      // ssl: {
      //   rejectUnauthorized: false
      // }
    },
    // pool: {
    //   min: 2,
    //   max: 10,
    // },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
