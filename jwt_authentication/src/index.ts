import express from "express";
import cors from "cors";
import { register, login } from "./controllers/user.controller";
import 'dotenv/config';
// console.log(process.env.JWT_SECRET_KEY);

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login);

export default app;
