import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./utils/features.js";

config({
    path: "./.env"
});

const mongoURI = process.env.MONGO_URI || "";

const app = express();
app.use(cors());

connectDB(mongoURI);

app.get("/",(req,res) => {
    res.send("API is Working");
});

app.listen(3000, () => {
    console.log("Server is Working at local host 3000");
})