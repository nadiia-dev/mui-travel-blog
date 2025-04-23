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
