import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../store/reducer/userSlice";

function AuthorList() {
  const authors = useSelector(selectAllUsers);

  return (
    <Grid
      id="top-row"
      container
      justifyContent={"center"}
      marginTop={10}
      spacing={2}
    >
      <Grid item xs={1} sm={1} md={1} marginBottom={4}>
        <h1>Author</h1>
      </Grid>
      <Grid id="top-row" container justifyContent={"center"} spacing={2}>
        {authors?.map((author, index) => (
          <Card key={index} sx={{ maxWidth: 345, marginX: 2 }}>
            <Link to={`/Author/${author?.id}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={author?.avatar_urls[96]}
                  alt={author?.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                  >
                    {author?.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}

export default AuthorList;
