import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthorised: false },
  reducers: {
    login(state) {
      state.isAuthorised = true;
    },
    logout(state) {
      state.isAuthorised = false;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({ reducer: authSlice.reducer });
