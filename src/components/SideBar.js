import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import useStyles from "../styles/sideBarStyles";
import SearchIcon from "@mui/icons-material/Search";
import WhatHappeningPanel from "./WhatHappeningPanel";
import WhoToFollowPanel from "./WhoToFollowPanel";
import Policy from "./Policy";

const SideBar = () => {
  const classes = useStyles();
  return (
    <footer>
      <div className={classes.sideBarContainer}>
        <div>
          <TextField
            className={classes.InputFiled}
            margin="dense"
            placeholder="Search Twitter"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "rgba(217, 217, 217, 0.5)" }} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <WhatHappeningPanel />
        </div>
        <div>
          <WhoToFollowPanel />
        </div>
        <div>
          <Policy />
        </div>
      </div>
    </footer>
  );
};

export default SideBar;
