import "dotenv/config";
import { Options } from "@mikro-orm/core";

import { Author } from "./lib/author.entity";
import { Book } from "./lib/book.entity";

export default {
  type: "postgresql" as const,
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT, 10),
  dbName: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  entities: [Author, Book],
  migrations: {
    path: "./database/migrations",
  },
} as Options;
