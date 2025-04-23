import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/users.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));
