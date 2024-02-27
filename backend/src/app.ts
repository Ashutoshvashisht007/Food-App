import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./utils/features.js";

import userRoute from "./routes/user.js";

config({
    path: "./.env"
});

const mongoURI = process.env.MONGO_URI || "";

const app = express();
app.use(cors());
app.use(express.json());

connectDB(mongoURI);

app.get("/",(req,res) => {
    res.send("API is Working");
});

app.use("/api/v1/user",userRoute);

app.listen(3000, () => {
    console.log("Server is Working at local host 3000");
})