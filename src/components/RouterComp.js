import { Grid } from "@mui/material";
import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import HeaderBar from "./HeaderBar";
import Routers from "./Router";
import SideBar from "./SideBar";

const RouterComp = () => {
  return (
    <Router>
      <Grid container>
        <Grid item xs={3}>
          <HeaderBar />
        </Grid>
        <Grid item xs={6}>
          <Switch>
            <Routers />
          </Switch>
        </Grid>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
      </Grid>
    </Router>
  );
};

export default RouterComp;
