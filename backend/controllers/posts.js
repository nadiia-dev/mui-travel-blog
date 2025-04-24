import mongoose from "mongoose";
import Post from "../models/Post.js";
import User from "../models/User.js";

export const getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await Post.find().populate("user");
    return res.status(200).json({ allPosts });
  } catch (e) {
    return res.status(404).json({ message: "No posts found" });
  }
};

export const getPostById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    return res.status(200).json({ post });
  } catch (e) {
    return res.status(404).json({ message: `No post fonud for id ${id}` });
  }
};

export const addPost = async (req, res) => {
  const { title, description, location, date, image, user } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !date &&
    !user &&
    !image &&
    image.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }

  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  let post;

  try {
    post = new Post({
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
      user,
    });
    const session = await mongoose.startSession();
    session.startTransaction();
    existingUser.posts.push(post);
    await existingUser.save({ session });
    await post.save({ session });
    session.commitTransaction();
  } catch (e) {
    return console.log(e);
  }

  if (!post) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }
  return res.status(201).json({ post });
};

export const editPost = async (req, res) => {
  const id = req.params.id;
  const { title, description, location, image } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !location &&
    location.trim() === "" &&
    !image &&
    image.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Data" });
  }

  let updatedPost;
  try {
    updatedPost = await Post.findByIdAndUpdate(id, {
      title,
      description,
      image,
      location,
    });
  } catch (e) {
    return console.log(e);
  }

  if (!updatedPost) {
    return res.status(500).json({ message: "Unable to update" });
  }
  return res.status(200).json({ message: "Updated Successfully" });
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  let deletedPost;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    deletedPost = await Post.findById(id).populate("user");
    deletedPost.user.posts.pull(deletedPost);
    await deletedPost.user.save({ session });
    deletedPost = await Post.findByIdAndDelete(id);
    session.commitTransaction();
  } catch (e) {
    return console.log(e);
  }

  if (!deletedPost) {
    return res.status(500).json({ message: "Unable to delete" });
  }

  return res.status(200).json({ message: "Deleted Successfully" });
};
