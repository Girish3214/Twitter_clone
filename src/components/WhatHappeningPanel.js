import React from "react";
import { Typography } from "@mui/material";
import { NewsList } from "../utils/NewsList";
import useStyles from "../styles/WhatsHappenStyle";
import NewsContainer from "./NewsContainer";

const WhatHappeningPanel = () => {
  const classes = useStyles();
  const list = NewsList.slice(0, 3);
  return (
    <div className={classes.root}>
      <div>
        <div>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "20px",
              padding: "10px",
              marginBottom: 0,
            }}
          >
            What's happening
          </h2>
        </div>
        <div className={classes.newsContainer}>
          {list.map((news, i) => (
            <NewsContainer key={i} news={news} />
          ))}
        </div>
        <div>
          <Typography
            variant="h6"
            gutterBottom
            component="p"
            className={classes.seeMore}
          >
            See more
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default WhatHappeningPanel;
