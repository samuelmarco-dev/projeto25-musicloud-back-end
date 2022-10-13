import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";

import routes from "./routers/index.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

if (!process.env.NODE_ENV) throw new Error("Environment variable NODE_ENV is not set");
const devVariable: string = process.env.NODE_ENV;

if (devVariable === "development") {
    app.use(morgan("dev"));
    app.use(helmet());
}

app.use(routes);

export default app;
