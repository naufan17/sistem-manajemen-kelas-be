import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('categories', (table) => {
    table.bigIncrements('category_id').primary();
    table.string('name', 100).notNullable();
    table.timestamps(true, true);
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('categories');
}