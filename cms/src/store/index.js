import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducer/categorySlice";
import postSlice from "./reducer/postSlice";
import tagSlice from "./reducer/tagSlice";
import userSlice from "./reducer/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    tag: tagSlice,
    post: postSlice,
  },
});
