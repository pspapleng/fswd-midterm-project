import { Avatar, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Profile = ({ author }) => {
  return (
    <Grid container margin={3}>
      <Grid item md={3}>
        <Avatar
          variant="square"
          sx={{ width: 220, height: 220 }}
          src={author?.avatar_urls[96]}
        ></Avatar>
      </Grid>
      <Grid item md={9}>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography
              gutterBottom
              fontSize={"2rem"}
              fontWeight={600}
              component="div"
            >
              Author : {author?.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Description : {author?.description}
            </Typography>
            <Link
              href={`${author?.link}`}
              variant="subtitle2"
              color="text.secondary"
            >
              {author?.link}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
