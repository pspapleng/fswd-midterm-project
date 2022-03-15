import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Post from "./pages/Post";
import Category from "./pages/Category";
import Author from "./pages/Author";
import { useDispatch } from "react-redux";
import request from "./services/api/index";
import { userSetted } from "./store/reducer/userSlice";
import { categorySetted } from "./store/reducer/categorySlice";
import { tagSetted } from "./store/reducer/tagSlice";
import { postSetted } from "./store/reducer/postSlice";
import { commentSetted } from "./store/reducer/commentSlice";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Home", element: <Home /> },
    { path: "/Post/:id", element: <Post /> },
    { path: "/Category", element: <Category /> },
    { path: "/Author/:id", element: <Author /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyAPI = async () => {
      const users = await request.getAllUser();
      dispatch(userSetted(users.data));

      const categories = await request.getAllCategory();
      dispatch(categorySetted(categories.data));

      const tags = await request.getAllTag();
      dispatch(tagSetted(tags.data));

      const posts = await request.getAllPost();
      dispatch(postSetted(posts.data));

      return Promise.resolve();
    };
    fetchMyAPI();
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
      <App />
    </Router>
  );
};

export default AppWrapper;
