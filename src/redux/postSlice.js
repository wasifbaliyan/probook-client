import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  posts: [],
  postDetails: {},
  commentStatus: "idle",
  comments: [],
};

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  const { data } = await axios.get("/api/posts");
  return data;
});

export const getPostDetails = createAsyncThunk(
  "post/getPostDetails",
  async (id) => {
    const { data } = await axios.get("/api/posts/" + id);
    return data;
  }
);

export const getComments = createAsyncThunk("post/getComments", async (id) => {
  const { data } = await axios.get("/api/comments/" + id);
  return data;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updateLike: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post._id === action.payload.id
      );
      state.posts[index].isLiked = !state.posts[index].isLiked;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload.response.posts;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },

    [getPostDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPostDetails.fulfilled]: (state, action) => {
      state.status = "success";
      state.postDetails = action.payload.response.post;
    },
    [getPostDetails.rejected]: (state, action) => {
      state.status = "failed";
    },

    [getComments.pending]: (state, action) => {
      state.commentStatus = "loading";
    },
    [getComments.fulfilled]: (state, action) => {
      state.commentStatus = "success";
      state.comments = action.payload.response.comments;
    },
    [getComments.rejected]: (state, action) => {
      state.commentStatus = "failed";
    },
  },
});

export default postSlice.reducer;
export const { updateLike } = postSlice.actions;
