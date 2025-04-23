import User from "../models/User.js";
import { compareSync, hashSync } from "bcryptjs";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (e) {
    return res.status(400).json("No users found");
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).populate("posts");
    return res
      .status(200)
      .json({ _id: user._id, name: user.name, email: user.email });
  } catch (e) {
    return res.status(400).json("No user found");
  }
};

export const signupUser = async (req, res) => {
  const newUser = req.body;
  if (
    !newUser.name &&
    newUser.name.trim() === "" &&
    !newUser.email &&
    newUser.email.trim() === "" &&
    !newUser.password &&
    newUser.password.length < 6
  ) {
    return res.status(422).json({ message: "Inavalid Data" });
  }
  const hashedPssword = hashSync(newUser.password, 10);

  try {
    await User.create({
      name: newUser.name,
      email: newUser.email,
      password: hashedPssword,
    });
    return res.status(201).json({ message: "User successfully created" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const loginUser = async (req, res) => {
  const newUser = req.body;
  if (
    !newUser.name &&
    newUser.name.trim() === "" &&
    !newUser.email &&
    newUser.email.trim() === "" &&
    !newUser.password &&
    newUser.password.length < 6
  ) {
    return res.status(422).json({ message: "Inavalid Data" });
  }
  let existingUser;
  try {
    existingUser = await User.findOne({
      name: newUser.name,
      email: newUser.email,
    });
  } catch (e) {
    return res.status(404).json({ message: "User not found" });
  }
  if (!existingUser) {
    return res.status(404).json({ message: "No user found" });
  }
  const password = compareSync(newUser.password, existingUser.password);
  if (!password) {
    return res.status(400).json({ message: "Incorrect Password" });
  }

  return res
    .status(200)
    .json({ id: existingUser._id, message: "Login Successfull" });
};
