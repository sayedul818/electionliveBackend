import dotenv from "dotenv";

dotenv.config();

export const env = {
  mongoUri: process.env.MONGODB_URI ?? "",
  port: Number(process.env.PORT ?? 5000),
  allowedOrigins: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : [
        "http://localhost:5173",
        "http://localhost:4173",
        "https://electionlive.bd",
        "https://www.electionlive.bd"
      ],
};

if (!env.mongoUri) {
  throw new Error("MONGODB_URI is not set");
}
