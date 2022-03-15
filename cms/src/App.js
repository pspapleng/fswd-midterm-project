import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Post from "./pages/Post";
import Category from "./pages/Category";
import Author from "./pages/Author";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Home", element: <Home /> },
    { path: "/Post", element: <Post /> },
    { path: "/Category", element: <Category /> },
    { path: "/Author", element: <Author /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <NavBar />
      <App />
    </Router>
  );
};

export default AppWrapper;
