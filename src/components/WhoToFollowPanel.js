import { Typography } from "@mui/material";
import React from "react";
import useStyles from "../styles/WhatsHappenStyle";
import { FamousList } from "../utils/PeoplesList";
import TwitterId from "./TwitterId";

const WhoToFollowPanel = () => {
  const classes = useStyles();

  const newList = FamousList.slice(0, 3);
  return (
    <div className={classes.root}>
      <div>
        <div>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "20px",
              padding: "10px 10px 0 10px",
              marginBottom: "5px",
            }}
          >
            Who to follow
          </h2>
        </div>
        <div>
          {newList.map((id, i) => (
            <TwitterId key={i} id={id} />
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
          </Typography>{" "}
        </div>
      </div>
    </div>
  );
};

export default WhoToFollowPanel;
