import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./src/routes/users.js";
import postRouter from "./src/routes/posts.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));
