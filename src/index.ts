import { config } from 'dotenv-safe'

import { createConnection } from './database/connection'

config()

const connection = createConnection()

async function main () {
  const users = await connection.select('*').from('users')
  console.log(users)
  await connection.destroy()
}

main()
