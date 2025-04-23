import { Router } from "express";
import { getAllUsers, loginUser, signupUser } from "../controllers/users.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);

export default userRouter;
