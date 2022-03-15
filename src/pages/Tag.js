import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { selectCategoryById } from "../store/reducer/categorySlice";
import { selectAllPosts } from "../store/reducer/postSlice";
import { selectAllTags, selectTagById } from "../store/reducer/tagSlice";
import { selectUserById } from "../store/reducer/userSlice";

function Tag() {
  const tags = useSelector(selectAllTags);

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

  const categorize = (tagId) => {
    const res = postAggregate.filter((p) => {
      return p.tags.some((e) => e === tagId);
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
            Tags
          </Typography>
          <Stack direction="row" spacing={1}>
            {tags.map((tag, index) => (
              <Link
                key={index}
                sx={{ fontSize: "0.9rem" }}
                color="#7c7c74"
                href={`#${tag.name}`}
                underline="hover"
              >
                #{tag.name}
              </Link>
            ))}
          </Stack>
        </Box>
      </Grid>
      {tags.map((tag, index) => (
        <Grid id="row" container key={index}>
          <Stack direction="row" spacing={2} marginBottom={2}>
            <Typography
              id={`${tag.name}`}
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                ml: 4,
              }}
            >
              #{tag.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "#b4acad",
              }}
            >
              {categorize(tag.id).length} posts
            </Typography>
          </Stack>
          <Grid id="row" container marginBottom={2}>
            <PostCard posts={categorize(tag.id)} />
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default Tag;
