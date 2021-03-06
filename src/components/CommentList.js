import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from "@mui/material";
import * as dayjs from "dayjs";
import React from "react";

const CommentList = ({ comments }) => {
  return (
    <Grid id="row" container justifyContent={"center"} spacing={2} margin={2}>
      <Typography
        sx={{
          fontSize: "2vw",
          fontWeight: "bold",
          mt: 3,
        }}
      >
        {comments.length} comments
      </Typography>
      {comments.map((comment, index) => (
        <Grid item xs={12} sm={12} md={12} key={index}>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  alt={comment.author_name}
                  src={comment.author_avatar_urls[96]}
                ></Avatar>
              }
              title={comment.author_name}
              subheader={dayjs(comment.date).format("DD/MM/YYYY | HH:mm A")}
            />
            <CardContent>
              <div
                dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
              ></div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CommentList;
