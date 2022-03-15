import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { selectCategoryById } from "../store/reducer/categorySlice";
import { selectAllPosts } from "../store/reducer/postSlice";
import { selectTagById } from "../store/reducer/tagSlice";
import { selectUserById } from "../store/reducer/userSlice";

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
