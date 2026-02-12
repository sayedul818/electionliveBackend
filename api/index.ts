import type { Request, Response } from "express";
import { createApp } from "../src/app.js";
import { connectDb } from "../src/config/db.js";

const app = createApp();
let isConnected = false;

const handler = async (req: Request, res: Response) => {
  if (!isConnected) {
    await connectDb();
    isConnected = true;
  }

  return app(req, res);
};

export default handler;
