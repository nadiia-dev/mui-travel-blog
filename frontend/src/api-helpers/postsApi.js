import { instance } from "./api";

const userId = localStorage.getItem("userId");

export const getAllPosts = async () => {
  try {
    const res = await instance.get("/posts");
    const data = res.data;

    return data;
  } catch (e) {
    return console.log("Some Error Occurred", e.message);
  }
};

export const addPost = async (postData) => {
  try {
    const res = await instance.post("/posts", { ...postData, user: userId });
    return res.data;
  } catch (e) {
    return console.log("Some Error Occurred", e.message);
  }
};
