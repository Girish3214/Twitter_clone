import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { converter } from "../utils/convertioUtils/counterConverter";

import useStyles from "../styles/pageStyles/tweetStyles";

const IconsContainer = ({ tweet }) => {
  const classes = useStyles();

  return (
    <>
      <div style={{ width: "80%" }}>
        <div className={classes.tweetComments}>
          <div className={classes.icons}>
            <Tooltip title="Reply">
              <div className={classes.colorBlue}>
                <IconButton aria-label="delete">
                  <FaRegComment size="14px" />
                </IconButton>
                {converter(tweet.no_of_comments)}
              </div>
            </Tooltip>
          </div>
          <div className={classes.icons}>
            <Tooltip title="Retweet">
              <div className={classes.colorGreen}>
                <IconButton aria-label="delete">
                  <AiOutlineRetweet size="14px" />
                </IconButton>
                {converter(tweet.no_of_retweets)}
              </div>
            </Tooltip>
          </div>
          <div className={classes.icons}>
            <Tooltip title="Like">
              <div className={classes.colorRed}>
                <IconButton aria-label="delete">
                  <FaRegHeart size="14px" />
                </IconButton>
                {converter(tweet.no_of_likes)}
              </div>
            </Tooltip>
          </div>
          <div className={classes.icons}>
            <Tooltip title="Share">
              <IconButton aria-label="delete" className={classes.colorBlue}>
                <BsUpload size="14px" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconsContainer;
