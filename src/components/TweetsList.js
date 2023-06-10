import React from "react";
import { TweetsList as tweets } from "../utils/TweetsListUtil";
import Tweet from "./Tweet";
const TweetsList = () => {
  return (
    <div>
      {tweets.map((tweet, i) => (
        <Tweet key={i} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetsList;
