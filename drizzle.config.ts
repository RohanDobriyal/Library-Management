import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" }); 

const databaseUrl = process.env.DATABASE_URL; 

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in .env.local");
}

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl, 
  },
});
