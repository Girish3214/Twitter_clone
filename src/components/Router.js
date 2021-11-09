import React from "react";
import { Route } from "react-router-dom";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import useStyles from "../styles/pageStyles/homePageStyles";

const Routers = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <div className={classes.homeContainer1}>
        <Route path="/home" exact component={HomePage} />
        <Route path="/explore" exact component={ExplorePage} />
      </div>
    </div>
  );
};

export default Routers;
