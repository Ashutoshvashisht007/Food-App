import express from "express";
import { getUser, newUser } from "../controllers/user.js";

const app = express.Router();

app.post("/new",newUser);
app.get("/login",getUser);

export default app;