import knex from '../knex';

export default async () => {
  await knex.destroy();
};