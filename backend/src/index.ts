import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "./config";
import mongoose from "mongoose";
import {registerRoutes} from "./routes";


const PORT = config.server.port;

const app: Express = express();

app.use(express.json());
app.use(cors());

(async function startup() {
  try {
    await mongoose.connect(config.mongo.url, {
      w: "majority",
      retryWrites: true,
      authMechanism: "DEFAULT",
    });

    console.log("connected to mongodb");

    registerRoutes(app);

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error(error);
  }
})();




