import "dotenv/config";

import { Author, Book, BookTag, Publisher } from "./lib";

export default {
  type: "postgresql" as const,
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT, 10),
  dbName: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  entities: [Author, Book, BookTag, Publisher],
  migrations: {
    path: "./database/migrations",
  },
};
