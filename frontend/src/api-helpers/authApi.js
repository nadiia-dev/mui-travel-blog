import { instance } from "./api";

export const authRequest = async (signup, data) => {
  try {
    const res = await instance.post(`/users/${signup ? "signup" : "login"}`, {
      name: data.name ? data.name : "",
      email: data.email,
      password: data.password,
    });
    const resData = res.data;
    return resData;
  } catch (e) {
    return console.log("Unable to Authenticate", e.message);
  }
};

export const getUserDetails = async () => {
  const id = localStorage.getItem("userId");
  try {
    const res = await instance.get(`/users/${id}`);
    const data = res.data;
    return data;
  } catch (e) {
    return console.log("Some Error Occurred", e.message);
  }
};
