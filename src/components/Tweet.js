import { Avatar, Grid } from "@mui/material";
import WhereToVoteSharpIcon from "@mui/icons-material/WhereToVoteSharp";
import React from "react";
import useStyles from "../styles/pageStyles/tweetStyles";
import CustomToolTip from "../customComponents/CustomToolTip";
import { FamousList } from "../utils/PeoplesList";
import ImagesContainer from "./ImagesContainer";

const Tweet = ({ tweet }) => {
  const classes = useStyles();
  const tweeterId = FamousList.filter(
    (people, i) => people.name === tweet.userName
  );

  return (
    <div className={classes.TweetContainer}>
      <div className={classes.topicContainer}>
        <Grid container>
          <Grid item xs={1} style={{ textAlign: "right" }}>
            <WhereToVoteSharpIcon fontSize="small" />
          </Grid>
          <Grid item xs={11} style={{ paddingLeft: "7px" }}>
            {tweet.topic}
          </Grid>
        </Grid>
      </div>
      <div className={classes.TweetBox}>
        <Grid container>
          <Grid item xs={1}>
            <CustomToolTip id={tweeterId[0]}>
              <div>
                <Avatar
                  alt={tweet.userName}
                  src={tweet.userImageUrl}
                  sx={{ width: 40, height: 40 }}
                />
              </div>
            </CustomToolTip>
          </Grid>
          <Grid item xs={11} style={{ paddingLeft: "7px" }}>
            <ImagesContainer tweet={tweet} id={tweeterId[0]}/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Tweet;
