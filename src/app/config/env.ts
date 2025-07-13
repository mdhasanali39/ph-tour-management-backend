import dotenv from "dotenv";

dotenv.config();

interface IEnvConfig {
    DB_URI: string;
    PORT: string;
    NODE_ENV: "development" | "production";
}

const loadEnvVariables = (): IEnvConfig => {
  const requiredEnvVarialbes = ["DB_URI", "PORT", "NODE_ENV"];

  requiredEnvVarialbes.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing environment variable ${envVar}`);
    }
  });

  return {
    DB_URI: process.env.DB_URI as string,
    PORT: process.env.PORT as string,
    NODE_ENV: process.env.NODE_ENV as "development" | "production",
  };
};

export const envVariables = loadEnvVariables();