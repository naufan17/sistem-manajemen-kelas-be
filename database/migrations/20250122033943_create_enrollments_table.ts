import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('enrollments', (table) => {
    table.uuid('enrollment_id').primary();
    table.uuid('course_id').references('course_id').inTable('courses').notNullable();
    table.uuid('user_id').references('user_id').inTable('users').notNullable();
    table.integer('progress').defaultTo(0);
    table.timestamps(true, true);
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('enrollments');
}
