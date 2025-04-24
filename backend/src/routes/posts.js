import { Router } from "express";
import {
  addPost,
  deletePost,
  editPost,
  getAllPosts,
  getPostById,
} from "../controllers/posts.js";

const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", addPost);
postRouter.put("/:id", editPost);
postRouter.delete("/:id", deletePost);

export default postRouter;
