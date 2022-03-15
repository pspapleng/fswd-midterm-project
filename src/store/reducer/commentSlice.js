import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comment",
  initialState: [],
  reducers: {
    commentSetted(state, action) {
      return [...action.payload];
    },
    commentAdded(state, action) {
      state.push(action.payload);
    },
    commentUnShift(state, action) {
      state.unshift(action.payload);
    },
  },
});

export const selectAllComment = (state) => state.comment;

export const selectCommentById = (state, commentId) =>
  state.comment.find((comment) => comment.id === commentId);

export const { commentAdded, commentSetted, commentUnShift } =
  commentSlice.actions;

export default commentSlice.reducer;
