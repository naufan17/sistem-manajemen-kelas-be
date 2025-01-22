import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('courses', (table) => {
    table.uuid('course_id').primary();
    table.string('name', 100).notNullable();
    table.string('description', 255).notNullable();
    table.bigIncrements('category_id').references('category_id').inTable('categories').notNullable();
    table.timestamps(true, true);
    table.timestamp('deleted_at');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('courses');
}

