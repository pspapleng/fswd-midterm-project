import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import request from "../services/api/index";
import {
  categoryAdded,
  categorySetted,
  selectCategoryById,
} from "../store/reducer/categorySlice";
import { postSetted, selectAllPosts } from "../store/reducer/postSlice";
import { selectTagById, tagAdded, tagSetted } from "../store/reducer/tagSlice";
import { selectUserById, userSetted } from "../store/reducer/userSlice";

function Home() {
  const postAggregate = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.map((post) => {
      const { author, categories, tags } = post;
      const authorDetail = selectUserById(state, author);
      const categoriesDetail = categories.map((categoryId) => {
        return selectCategoryById(state, categoryId);
      });
      const tagsDetail = tags.map((tagId) => {
        return selectTagById(state, tagId);
      });
      return {
        ...post,
        authorDetail: authorDetail,
        categoriesDetail: categoriesDetail,
        tagsDetail: tagsDetail,
      };
    });
  });
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
    <div>
      <Grid id="top-row" container>
        <Grid item xs={12}>
          <img
            style={{
              position: "relative",
            }}
            src={
              "https://i.pinimg.com/originals/01/64/45/016445d9af5ce49b321d555046f4dca8.gif"
            }
            alt="main"
            width="100%"
            height="80%"
          />
          <Box
            sx={{
              position: "absolute",
              top: "60vw",
              left: "40vw",
              width: "25vw",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "3vw",
                fontWeight: "bold",
              }}
            >
              All Posts
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: "1.5vw" }}>
              {postAggregate.length} posts
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <PostCard posts={postAggregate} />
    </div>
  );
}

export default Home;
