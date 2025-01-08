import { Express, Request, Response } from "express";
import authRoutes from "./Authroute";

export function registerRoutes(app: Express) {
  app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "server is running properly" });
  });

  app.use("/auth", authRoutes);
}
