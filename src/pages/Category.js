import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import {
  selectAllCategories,
  selectCategoryById,
} from "../store/reducer/categorySlice";
import { selectAllPosts } from "../store/reducer/postSlice";
import { selectTagById } from "../store/reducer/tagSlice";
import { selectUserById } from "../store/reducer/userSlice";

function Category() {
  const categories = useSelector(selectAllCategories);

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

  const categorize = (catId) => {
    const res = postAggregate.filter((p) => {
      return p.categories.some((e) => e === catId);
    });
    return res;
  };

  return (
    <div>
      <Grid id="top-row" container justifyContent={"center"}>
        <Box
          sx={{
            mt: 12,
            mb: 4,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            Categories
          </Typography>
          <Stack direction="row" spacing={2}>
            {categories.map((category, index) => (
              <Chip
                key={index}
                label={category.name}
                component="a"
                href={`#${category.name}`}
                clickable
                sx={{ backgroundColor: "#d4cccf", fontSize: "1rem" }}
              />
            ))}
          </Stack>
        </Box>
      </Grid>
      {categories.map((category, index) => (
        <Grid id="row" container key={index}>
          <Stack direction="row" spacing={2} marginBottom={2}>
            <Typography
              id={`${category.name}`}
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                ml: 4,
              }}
            >
              {category.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "#b4acad",
              }}
            >
              {categorize(category.id).length} posts
            </Typography>
          </Stack>
          <Grid id="row" container marginBottom={2}>
            <PostCard posts={categorize(category.id)} />
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default Category;
