// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    useNullAsDefault: true,
    connection: {
      database: 'my_db',
      user:     'lambda',
      password: 'password'
    },
    migrations: {
      directory: './models/migration',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './models/seed'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
