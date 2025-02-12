import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "";
const PORT: number = process.env.PORT ? +process.env.PORT : 8000;
const ROUNDS: number = process.env.ROUNDS ? +process.env.ROUNDS : 10;


export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT,
        rounds : ROUNDS
    },
}
