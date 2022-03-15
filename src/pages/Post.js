import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import PostDetail from "../components/PostDetail";
import request from "../services/api/index";
import { selectCategoryById } from "../store/reducer/categorySlice";
import { commentSetted, selectAllComment } from "../store/reducer/commentSlice";
import { selectAllPosts } from "../store/reducer/postSlice";
import { selectTagById } from "../store/reducer/tagSlice";
import { selectUserById } from "../store/reducer/userSlice";

function Post() {
  let { id } = useParams();
  const comments = useSelector((state) => selectAllComment(state));

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyAPI = async () => {
      const comments = await request.getAllComment({ post: id });
      dispatch(commentSetted(comments.data));
      return Promise.resolve();
    };
    fetchMyAPI();
  }, [dispatch, id]);

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

  const postAggregateById = () => {
    return postAggregate.find((e) => e.id === +id);
  };

  const commentsAggregate = () => {
    return comments.filter((e) => e.post === +id);
  };

  return (
    <div>
      <Grid id="top-row" container justifyContent={"center"} marginTop={10}>
        <PostDetail post={postAggregateById()} />
        <CommentForm />
        <CommentList comments={commentsAggregate()} />
      </Grid>
    </div>
  );
}

export default Post;
