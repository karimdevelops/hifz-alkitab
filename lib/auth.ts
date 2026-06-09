import { betterAuth } from "better-auth";
import { Pool } from "pg";
function poolConfig() {
  if (process.env.PROD == "true") {
    return new Pool({
      connectionString: process.env.DB_STRING,
    });
  } else {
    return new Pool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
    });
  }
}
export const auth = betterAuth({
  database: poolConfig(),
  emailAndPassword: {
    enabled: true,
  },
});
