import knex from 'knex'
import path from 'path'

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
  },
  production: {
    client: 'mssql',
    connection: {
      server: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      options: {
        enableArithAbort: false
      }
    },
    useNullAsDefault: true
  }
}

/* const developmentConfig = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
}

const productionConfig = {
  client: 'mssql',
  connection: {
    server: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    options: {
      enableArithAbort: false
    }
  },
  useNullAsDefault: true
} */

function createConnection () {
  const selectedConfig = config[process.env.NODE_ENV || 'development']
  if (!selectedConfig) {
    console.error('Wrong environment: ' + process.env.NODE_ENV)
    process.exit(1)
  }
  const connection = knex(selectedConfig)
  return connection
}

export { createConnection }
