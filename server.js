import express from "express";

import { generateTags, testTagGenerate } from "./services/tagService.js";
import 'dotenv/config';
import postRouter from "./routes/posts.js";

// import dotenv from "dotenv"
// dotenv.config();



const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/posts", postRouter)

app.listen(PORT, () => {
  console.log("Server at..", PORT)
  console.log("OPENAI_API:", process.env.OPENAI_API_KEY);
  // testTagGenerate();
})