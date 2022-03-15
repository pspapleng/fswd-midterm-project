import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import Profile from "../components/Profile";
import { selectCategoryById } from "../store/reducer/categorySlice";
import { selectAllPosts } from "../store/reducer/postSlice";
import { selectTagById } from "../store/reducer/tagSlice";
import { selectUserById } from "../store/reducer/userSlice";

function Author() {
  const { id } = useParams();

  const author = useSelector((state) => selectUserById(state, +id));

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
      console.log(authorDetail);
      return {
        ...post,
        authorDetail: authorDetail,
        categoriesDetail: categoriesDetail,
        tagsDetail: tagsDetail,
      };
    });
  });
  const posts = postAggregate.filter((e) => e.author === +id);

  return (
    <div>
      <Grid id="top-row" container justifyContent={"center"} marginTop={8}>
        <Profile author={author} />
        <h2> All Posts</h2>
        <PostCard posts={posts} />
      </Grid>
    </div>
  );
}

export default Author;
