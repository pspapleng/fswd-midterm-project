import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Stack,
  CardActions,
  Button,
  Link,
  Chip,
} from "@mui/material";
import * as dayjs from "dayjs";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const PostCard = ({ posts }) => {
  return (
    <div>
      <Grid id="row" container spacing={1}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 1400, mx: 3, mb: 3 }}>
              <CardHeader
                avatar={
                  <Avatar
                    alt={post?.authorDetail?.name}
                    src={post?.authorDetail?.avatar_urls[96]}
                  ></Avatar>
                }
                title={post?.authorDetail.name}
                subheader={dayjs(post?.date).format("DD/MM/YYYY | HH:mm A")}
              />
              <CardContent sx={{ height: 270 }}>
                <Stack direction="row" spacing={1}>
                  {post?.tagsDetail.map((tag, index) => (
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
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {post.title.rendered}
                </Typography>
                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></div>
                <br />
                <Stack direction="row" spacing={1}>
                  {post?.categoriesDetail.map((category, index) => (
                    <Chip
                      key={index}
                      label={category.name}
                      sx={{ backgroundColor: "#d4cccf" }}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                }}
              >
                <RouterLink to={`/Post/${post.id}`}>
                  <Button
                    fullWidth
                    size="large"
                    sx={{
                      fontWeight: "bold",
                      color: "#111",
                    }}
                  >
                    View More
                  </Button>
                </RouterLink>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PostCard;
