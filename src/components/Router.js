import React from "react";
import { Route, Redirect } from "react-router-dom";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import useStyles from "../styles/pageStyles/homePageStyles";

const Routers = () => {
  const classes = useStyles();

  const path = window.location.pathname;

  return (
    <div className={classes.homeContainer}>
      <div className={classes.homeContainer1}>
        <Route path="/home" exact component={HomePage} />
        <Route path="/" exact component={HomePage}>
          {path === "/" && <Redirect to="/home" />}
        </Route>
        <Route path="/explore" exact component={ExplorePage} />
      </div>
    </div>
  );
};

export default Routers;
