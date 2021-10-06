import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  isLoggedIn: false,
  user: {},
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    const { data } = await axios.post("/auth/login", userData);
    return data;
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    const { data } = await axios.post("/auth/register", userData);
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout: (state, action) => {
      localStorage.clear();
      state.isLoggedIn = false;
      axios.defaults.headers.common["authorization"] = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      const { token, name, email } = action.payload.response;
      localStorage.setItem(
        "login",
        JSON.stringify({ token, email, name, isLoggedIn: true })
      );
      state.user.name = name;
      state.user.email = email;
      state.status = "success";
      state.isLoggedIn = true;
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "failed";
      state.isLoggedIn = false;
    },

    [registerUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "success";
      const { token, name, email } = action.payload.response;
      localStorage.setItem(
        "login",
        JSON.stringify({ token, name, email, isLoggedIn: true })
      );
      state.user.name = name;
      state.user.email = email;
      state.isLoggedIn = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.status = "failed";
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const { setAuth, logout } = authSlice.actions;
