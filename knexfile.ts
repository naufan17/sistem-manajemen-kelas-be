import type { Knex } from "knex";
import dotenv from "dotenv";
import { DatabaseConfig } from "./src/types/database";

dotenv.config();

const { 
  DB_URL
} = process.env as unknown as Required<DatabaseConfig>;

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeders"
    }
  },
  staging: {
    client: "postgresql",
    connection: DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeders"
    }
  },
  production: {
    client: "postgresql",
    connection: DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeders",
    }
  }
};

export default knexConfig;