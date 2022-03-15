import SendIcon from "@mui/icons-material/Send";
import { Button, FormControl, Grid, Input } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import request from "../services/api";
import { commentUnShift } from "../store/reducer/commentSlice";

const CommentForm = () => {
  const { id } = useParams();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const dispatch = useDispatch();
  const onSubmit = () => {
    return request.createComment({ post: id, content: value }).then((res) => {
      setValue("");
      return dispatch(commentUnShift(res.data));
    });
  };

  return (
    <Grid id="row" container justifyContent={"center"} spacing={2} margin={2}>
      <Grid item md={10}>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Input
            id="standard-adornment-amount"
            value={value}
            placeholder={"your comment"}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item md={2}>
        <Button variant="contained" endIcon={<SendIcon />} onClick={onSubmit}>
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

export default CommentForm;
