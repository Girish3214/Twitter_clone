import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import useStyles from "../styles/pageStyles/tweetStyles";
import { dateConveter } from "../utils/convertioUtils/dataConverter";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import CustomToolTip from "../customComponents/CustomToolTip";
import moment from "moment";
import IconsContainer from "./IconsContainer";
import Images from "./Images";

const ImagesContainer = ({ tweet, id }) => {
  const classes = useStyles();
  const date = dateConveter(tweet.postedOn);
  const tweetDescription = tweet.userTweets.split("#")
    ? tweet.userTweets.split("#")
    : tweet.userTweets;

  // console.log("id = ", id);
  return (
    <>
      <div className={classes.usernameContainer}>
        <div className={classes.usernameContainer}>
          <>
            <CustomToolTip id={id}>
              <p>{tweet.userName}</p>
            </CustomToolTip>
            <CustomToolTip id={id}>
              <span>{tweet.userTweeterHandle} </span>
            </CustomToolTip>
            <span>.</span>
            <Tooltip title={moment(tweet.postedOn).format("lll")}>
              <span>{date}</span>
            </Tooltip>
          </>
        </div>
        <div>
          <Tooltip title="More">
            <MoreHorizIcon
              fontSize="small"
              style={{
                justifyContent: "flex-end",
                cursor: "pointer",
                color: "rgba(110,118,125,0.9)",
              }}
            />
          </Tooltip>
        </div>
      </div>
      <div id="tweet_description">
        <div className={classes.tweetDescription}>
          {tweetDescription.map((tweet, i) => (
            <span key={i}>
              {i >= 1 ? (
                <Link
                  to={`/hashtag/${tweet}/src=hashtag_click`}
                  className={classes.hashTagsLink}
                >{`#${tweet}`}</Link>
              ) : (
                tweet
              )}
            </span>
          ))}
        </div>
        <div id="tweet_Images">
          <Images images={tweet.userTweetImageUrl} tweet={tweet} />
        </div>
        <div id="tweet_comments">
          <IconsContainer tweet={tweet} />
        </div>
      </div>
    </>
  );
};

export default ImagesContainer;
