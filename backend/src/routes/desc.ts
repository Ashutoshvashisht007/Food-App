import express from "express";
import { foodDesc, getAllDesc, getSearchedDesc, newFood } from "../controllers/desc.js";

const app = express.Router();

app.get("/all",getAllDesc);
app.get("/search",getSearchedDesc);
app.get("/:id",foodDesc);
app.post("/create",newFood);

export default app;