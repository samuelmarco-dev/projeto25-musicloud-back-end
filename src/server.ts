import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

if (!process.env.PORT) throw new Error("Environment variable PORT is not set");
const port: string | number = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
