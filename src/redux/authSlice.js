import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  isLoggedIn: false,
  user: {},
  profile: {},
  userStatus: "idle",
  users: [],
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

export const getProfile = createAsyncThunk("auth/getProfile", async (id) => {
  const { data } = await axios.get("/api/profile/" + id);
  return data;
});

export const getUsers = createAsyncThunk("auth/getUsers", async () => {
  const { data } = await axios.get("/auth/users/");
  return data;
});

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
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      const { token, name, email, _id } = action.payload.response;
      localStorage.setItem(
        "login",
        JSON.stringify({ token, email, _id, name, isLoggedIn: true })
      );
      state.user.name = name;
      state.user.email = email;
      state.user._id = _id;
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

    [getProfile.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProfile.fulfilled]: (state, action) => {
      state.status = "success";
      state.profile = action.payload.profile;
    },
    [getProfile.rejected]: (state, action) => {
      state.status = "failed";
    },

    [getUsers.pending]: (state, action) => {
      state.userStatus = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.userStatus = "success";
      state.users = action.payload.response.users;
    },
    [getUsers.rejected]: (state, action) => {
      state.userStatus = "failed";
    },
  },
});

export default authSlice.reducer;
export const { setAuth, logout } = authSlice.actions;
