import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  followingStatus: "idle",
  followings: [],
  followerStatus: "idle",
  followers: [],
};

export const getFollowings = createAsyncThunk(
  "follow/getFollowings",
  async (id) => {
    const { data } = await axios.get("/api/followings/" + id);
    return data;
  }
);

export const getFollowers = createAsyncThunk(
  "follow/getFollowers",
  async (id) => {
    const { data } = await axios.get("/api/followers/" + id);
    return data;
  }
);

export const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {},
  extraReducers: {
    [getFollowings.pending]: (state, action) => {
      state.followingStatus = "loading";
    },
    [getFollowings.fulfilled]: (state, action) => {
      state.followingStatus = "success";
      state.followings = action.payload.response.followings;
    },
    [getFollowings.rejected]: (state, action) => {
      state.followingStatus = "failed";
    },

    [getFollowers.pending]: (state, action) => {
      state.followerStatus = "loading";
    },
    [getFollowers.fulfilled]: (state, action) => {
      state.followerStatus = "success";
      state.followers = action.payload.response.followers;
    },
    [getFollowers.rejected]: (state, action) => {
      state.followerStatus = "failed";
    },
  },
});

export default followSlice.reducer;
// export const {  } = followSlice.actions;
