import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "./config";
import mongoose from "mongoose";


const PORT = config.server.port;

const app: Express = express();

app.use(express.json());
app.use(cors());

(async function startup() {
  try {
    await mongoose.connect(config.mongo.url,
        {
            w : "majority",
            retryWrites : true,
            authMechanism: "DEFAULT"
        }
    );
  } catch (error) {
    console.error(error);
  }
})();

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "server is running properly" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
