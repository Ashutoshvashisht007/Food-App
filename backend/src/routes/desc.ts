import express from "express";
import { foodDesc, newFood } from "../controllers/desc.js";

const app = express.Router();

app.get("/:id",foodDesc);
app.post("/create",newFood);

export default app;