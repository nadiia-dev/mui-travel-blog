import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export const getAllPosts = async () => {
  try {
    const res = await instance.get("/posts");
    console.log(res.data);
    const data = res.data;
    return data;
  } catch (e) {
    return console.log("Some Error Occurred", e.message);
  }
};
