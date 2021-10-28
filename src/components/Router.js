import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import useStyles from "../styles/pageStyles/homePageStyles";

const Routers = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <div className={classes.homeContainer1}>
        <Switch>
          <Route to="/" exact component={HomePage} />
        </Switch>
      </div>
    </div>
  );
};

export default Routers;
