import { instance } from "./api";

export const getAllPosts = async () => {
  try {
    const res = await instance.get("/posts");
    const data = res.data;
    return data;
  } catch (e) {
    return console.log("Some Error Occurred", e.message);
  }
};
