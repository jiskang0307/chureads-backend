import express from "express";

import { generateTags, testTagGenerate } from "./services/tagService.js";
import 'dotenv/config';
import postRouter, { init } from "./routes/posts.js";
import { connectDB } from "./database/db.js";
import cors from "cors"
// import dotenv from "dotenv"
// dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/posts", postRouter)

app.listen(PORT, async() => {
  console.log("Server at..", PORT)
  // testTagGenerate();

  const db = await connectDB();
  init(db);
})