import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { env } from "./config/env.js";

export const createApp = () => {
  const app = express();
  
  // CORS configuration for production
  const allowedOrigins = env.allowedOrigins;
  app.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
  app.use(express.json({ limit: "1mb" }));

  app.use("/api", routes);
  return app;
};
