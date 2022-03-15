import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    categorySetted(state, action) {
      return [...action.payload];
    },
    categoryAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllCategories = (state) => state.category;

export const selectCategoryById = (state, categoryId) =>
  state.category.find((category) => category.id === categoryId);

export const { categoryAdded, categorySetted } = categorySlice.actions;

export default categorySlice.reducer;
