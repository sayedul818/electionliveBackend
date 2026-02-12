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

  // Root route for API info
  app.get("/", (_req, res) => {
    res.json({
      name: "Election Live API",
      status: "running",
      version: "1.0.0",
      endpoints: {
        health: "/api/health",
        seats: "/api/seats",
        seatWinners: "/api/seats/winners",
        candidates: "/api/seats/:seatId/candidates"
      },
      documentation: "API routes are available under /api"
    });
  });

  // Mount routes at both root and /api for compatibility
  app.use("/api", routes);
  app.use("/", routes);
  
  return app;
};
