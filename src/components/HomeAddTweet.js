import {
  Avatar,
  Grid,
  Input,
  FormHelperText,
  Button,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import PublicIcon from "@mui/icons-material/Public";
import useStyles from "../styles/pageStyles/homePageStyles";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifIcon from "@mui/icons-material/Gif";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CircularProgress from "@mui/material/CircularProgress";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

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
  const [inputValue, setInputValue] = useState("");
  const [progress, setProgress] = useState(1);
  const [emojiOpenClose, setEmojiOpenClose] = useState(false);

  const handleTweetChange = (e) => {
    const { value } = e.target;
    if (value.length <= 280) {
      setInputValue(value);
      setProgress(Math.floor((inputValue.length / 280) * 100));
      // console.log(progress + Math.floor((inputValue.length / 280) * 100));
    }
    // console.log(inputValue);
  };
  return (
    <>
      <div className={classes.headerContainer} style={{ paddingBottom: 0 }}>
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
              <Input
                disableUnderline={true}
                placeholder="What's happening?"
                multiline
                maxLength="4"
                maxRows="6"
                value={inputValue}
                onChange={handleTweetChange}
              />
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
                  <label htmlFor="icon-button-file">
                    <Input
                      style={{ display: "none" }}
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                    />
                    <InsertPhotoIcon
                      color="primary"
                      fontSize="small"
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </div>
                <div style={{ margin: "0 5px", cursor: "pointer" }}>
                  <label htmlFor="icon-button-file">
                    <Input
                      style={{ display: "none", cursor: "pointer" }}
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                    />
                    <GifIcon
                      color="primary"
                      fontSize="small"
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </div>

                {/* <div style={{ margin: "0 5px", cursor: "pointer" }}>
                <PollIcon color="primary" fontSize="small" />
              </div> */}

                <div style={{ margin: "0 5px", cursor: "pointer" }}>
                  <InsertEmoticonIcon
                    color="primary"
                    fontSize="small"
                    onClick={() => setEmojiOpenClose(!emojiOpenClose)}
                  />
                </div>

                {/* <div style={{ margin: "0 5px", cursor: "pointer" }}>
                <InsertInvitationIcon color="primary" fontSize="small" />
              </div> */}
              </Grid>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  color={inputValue.length === 280 ? "error" : "primary"}
                  style={{ width: 25, height: 25 }}
                />{" "}
                <span
                  style={{
                    height: "30px",
                    width: 1,
                    backgroundColor: "rgba(125,125,125,0.5)",
                    marginLeft: 10,
                  }}
                ></span>
                <Button
                  className={classes.tweetButton}
                  disabled={inputValue.length > 0 ? false : true}
                  style={{
                    backgroundColor:
                      inputValue.length > 0
                        ? "rgb(26, 140, 216)"
                        : "rgba(26, 140, 216, 0.5)",
                    fontSize: "14px",
                    width: "80px",
                    borderRadius: "9999px",
                  }}
                >
                  Tweet
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {emojiOpenClose && (
        <Picker
          title=""
          theme="auto"
          set="twitter"
          sheetSize={16}
          skinEmoji="true"
          defaultEmoji=""
          style={{
            zIndex: "8",
            position: "absolute",
            top: "10rem",
            left: "34%",
            width: "18rem",
            backgroundColor: "#000",
            boxShadow:
              "rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px",
          }}
        />
      )}
    </>
  );
};

export default HomeAddTweet;
