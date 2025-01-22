import { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").del();

    await knex("courses").insert([
        { course_id: uuidv4(), name: "Learning PHP", description: "Learn the basics of PHP", category_id: 1 },
        { course_id: uuidv4(), name: "Advanced JavaScript", description: "Master the power of JavaScript", category_id: 2 },
        { course_id: uuidv4(), name: "Python for Beginners", description: "Get started with Python", category_id: 3 },
        { course_id: uuidv4(), name: "Java Fundamentals", description: "Learn the fundamentals of Java", category_id: 4 },
        { course_id: uuidv4(), name: "C# Basics", description: "Learn the basics of C#", category_id: 5 },
        { course_id: uuidv4(), name: "Ruby Basics", description: "Learn the basics of Ruby", category_id: 6 },
        { course_id: uuidv4(), name: "Go for Beginners", description: "Get started with Go", category_id: 7 },
        { course_id: uuidv4(), name: "Rust Basics", description: "Learn the basics of Rust", category_id: 8 },
        { course_id: uuidv4(), name: "TypeScript Basics", description: "Learn the basics of TypeScript", category_id: 9 },
        { course_id: uuidv4(), name: "Swift Basics", description: "Learn the basics of Swift", category_id: 10 },
    ]);
};
