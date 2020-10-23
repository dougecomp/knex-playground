import { config } from 'dotenv-safe'
import path from 'path'

config()

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
  },
  production: {
    client: 'mssql',
    connection: {
      server: 'localhost',
      port: 1443,
      user: 'sa',
      password: '',
      database: 'test',
      options: {
        enableArithAbort: false
      }
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
  }
}
