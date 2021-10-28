import {
  Avatar,
  Grid,
  Input,
  FormHelperText,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import PublicIcon from "@mui/icons-material/Public";
import useStyles from "../styles/pageStyles/homePageStyles";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifIcon from "@mui/icons-material/Gif";
import PollIcon from "@mui/icons-material/Poll";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

const MyFormHelperText = () => {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return <Button startIcon={<PublicIcon />}>Everyone can reply</Button>;
    }
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
};

const HomeAddTweet = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <Grid container>
        <Grid item xs={2}>
          <Link to="/profile">
            <Avatar
              alt="Remy Sharp"
              src="/images/bac.jpg"
              sx={{ width: 50, height: 50 }}
            />
          </Link>
        </Grid>
        <Grid item xs={10}>
          <FormControl sx={{ width: "100%" }}>
            <Input disableUnderline={true} placeholder="What's happening?" />
            <MyFormHelperText />
          </FormControl>
          <Divider />
          <Grid
            display="flex"
            justifyContent="space-between"
            style={{ marginTop: "10px" }}
          >
            <Grid
              display="flex"
              justifyContent="space-around"
              style={{ padding: "12px" }}
            >
              <div style={{ margin: "0 5px" }}>
                <InsertPhotoIcon color="primary" fontSize="small" />
              </div>
              <div style={{ margin: "0 5px" }}>
                <GifIcon color="primary" fontSize="small" />
              </div>
              <div style={{ margin: "0 5px" }}>
                <PollIcon color="primary" fontSize="small" />
              </div>
              <div style={{ margin: "0 5px" }}>
                <InsertEmoticonIcon color="primary" fontSize="small" />
              </div>
              <div style={{ margin: "0 5px" }}>
                <InsertInvitationIcon color="primary" fontSize="small" />
              </div>
            </Grid>
            <div>
              <Button>Tweet</Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeAddTweet;
