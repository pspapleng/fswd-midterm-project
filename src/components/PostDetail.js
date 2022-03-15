import {
  Avatar,
  Button,
  CardHeader,
  Chip,
  Grid,
  Link,
  Stack,
} from "@mui/material";
import * as dayjs from "dayjs";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <Grid container mx={6}>
      <Grid id="top-row" container>
        <Grid item md={7}>
          <CardHeader
            avatar={
              <Avatar
                alt={post?.authorDetail?.name}
                src={post?.authorDetail?.avatar_urls[96]}
              ></Avatar>
            }
            title={post?.authorDetail?.name}
            subheader={dayjs(post?.date).format("DD/MM/YYYY | HH:mm A")}
          />
        </Grid>
        <Grid item md={5}>
          <RouterLink to={`/Author/${post?.authorDetail?.id}`}>
            <Button
              fullWidth
              size="large"
              sx={{
                fontWeight: "bold",
                color: "#111",
              }}
            >
              View Author Profile
            </Button>
          </RouterLink>
        </Grid>
      </Grid>
      <div>
        <Stack direction="row" spacing={1}>
          <h1> {post?.title?.rendered}</h1>
          {post?.categoriesDetail.map((category, index) => (
            <Chip
              key={index}
              label={category.name}
              sx={{ backgroundColor: "#d4cccf" }}
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={1} mb={1}>
          {post?.tagsDetail?.map((tag, index) => (
            <Link
              key={index}
              sx={{ fontSize: "0.9rem" }}
              color="#7c7c74"
              underline="hover"
            >
              #{tag.name}
            </Link>
          ))}
        </Stack>
      </div>
      <Grid
        id="body-row"
        container
        columns={12}
        dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
        sx={{ fontSize: "1.2rem" }}
      ></Grid>
    </Grid>
  );
};

export default PostDetail;
