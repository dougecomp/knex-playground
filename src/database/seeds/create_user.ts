import * as Knex from 'knex'

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, name: 'João', email: 'joao@email.com.br' },
    { id: 2, name: 'Maria', email: 'maria@email.com.br' },
    { id: 3, name: 'Douglas', email: 'douglas@email.com.br' }
  ])
};
