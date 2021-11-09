import React from "react";
import useStyles from "../styles/pageStyles/homePageStyles";
import HomeAddTweet from "./HomeAddTweet";
import TweetsList from "./TweetsList";

const TweetsContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.TweetsContainer}>
      <HomeAddTweet />
      <TweetsList />
    </div>
  );
};

export default TweetsContainer;
