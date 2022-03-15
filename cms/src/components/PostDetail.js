import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import request from "../services/api/index";
import CommentList from "./CommentList";

const PostDetail = () => {
  const postId = "395";
  const [post, setPost] = useState();
  const [author, setAuthor] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    const fetchMyAPI = async () => {
      const postData = await request.getPostById(postId);
      setPost(postData.data);
      const userData = await request.getUserById(postData.data.author);
      setAuthor(userData.data);
      const commentData = await request.getAllComment();
      console.log(commentData.data[0].post);
      const tempComment = commentData.data.filter((item) => {
        if (item.post === +postId) return true;
        return false;
      });
      setComments(tempComment);
      return Promise.resolve();
    };
    fetchMyAPI();
  }, []);

  return (
    <div>
      {/* <Grid id="top-row" container></Grid> */}
      <Grid
        id="bottom-row"
        container
        justifyContent={"center"}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        sx={{ fontSize: "1.5rem", px: 6 }}
      ></Grid>
      <CommentList comments={comments} />
    </div>
  );
};

export default PostDetail;
