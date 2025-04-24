import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  loginUser,
  signupUser,
} from "../controllers/users.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);

export default userRouter;
