import { createSlice } from "@reduxjs/toolkit";

export const tagSlice = createSlice({
  name: "tag",
  initialState: [],
  reducers: {
    tagSetted(state, action) {
      return [...action.payload];
    },
    tagAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllTags = (state) => state.tag;

export const selectTagById = (state, tageId) =>
  state.tag.find((tage) => tage.id === tageId);

export const { tagAdded, tagSetted } = tagSlice.actions;

export default tagSlice.reducer;
