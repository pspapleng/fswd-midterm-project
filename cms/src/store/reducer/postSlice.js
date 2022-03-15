import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    postSetted(state, action) {
      return [...action.payload];
    },
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.post;

export const selectPostByUserId = (state, userId) =>
  state.post.filter((e) => e.author === userId);

export const { postAdded, postSetted } = postSlice.actions;

export default postSlice.reducer;
