import { knexSnakeCaseMappers } from 'objection';
export default {
  development: {
    ...knexSnakeCaseMappers(),
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      extension: 'ts',
      directory: '../db/migrations',
    },
    seeds: {
      extension: 'ts',
      directory: '../db/seeds',
    },
  },
  production: {
    ...knexSnakeCaseMappers(),
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      extension: 'ts',
      directory: '../db/migrations',
    },
    seeds: {
      extension: 'ts',
      directory: '../db/seeds',
    },
  }
};

// Defaults beleow
// import type { Knex } from "knex";

// Update with your config settings.

// const config: { [key: string]: Knex.Config } = {
//   development: {
//     client: "sqlite3",
//     connection: {
//       filename: "./dev.sqlite3"
//     }
//   },

//   staging: {
//     client: "postgresql",
//     connection: {
//       database: "my_db",
//       user: "username",
//       password: "password"
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: "knex_migrations"
//     }
//   },

//   production: {
//     client: "postgresql",
//     connection: {
//       database: "my_db",
//       user: "username",
//       password: "password"
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: "knex_migrations"
//     }
//   }

// };

// module.exports = config;
