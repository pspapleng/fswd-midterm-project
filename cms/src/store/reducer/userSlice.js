import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    userSetted(state, action) {
      return [...action.payload];
    },
    userAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllUsers = (state) => state.user;

export const selectUserById = (state, userId) =>
  state.user.find((user) => user.id === userId);

export const { userAdded, userSetted } = userSlice.actions;

export default userSlice.reducer;
