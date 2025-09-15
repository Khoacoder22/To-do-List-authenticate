import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./configs/db";
import index from "./routes/index.router";

//use epxress
const app = express();

//load from dotenv
dotenv.config();

// load from .env file
const port = process.env.PORT;

app.use(express.json());

app.use("/api", index);

connectDb();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

