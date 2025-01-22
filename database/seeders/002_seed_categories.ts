import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("categories").del();

    await knex("categories").insert([
        { category_id: 1, name: "PHP" },
        { category_id: 2, name: "JavaScript" },
        { category_id: 3, name: "Python" },
        { category_id: 4, name: "Java" },
        { category_id: 5, name: "C#" },
        { category_id: 6, name: "Ruby" },
        { category_id: 7, name: "Go" },
        { category_id: 8, name: "Rust" },
        { category_id: 9, name: "TypeScript" },
        { category_id: 10, name: "Swift" },
    ]);
};
