import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

import useStyles from "../styles/headerStyles";
import { withRouter } from "react-router";
import CustomButton from "../customComponents/CustomButton";
import MenuBar from "./MenuBar";
import AccountFooter from "./AccountFooter";
import CustomMenu from "../customComponents/CustomMenu";

const HeaderBar = ({ history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
      <div className={classes.headerContainer}>
        <div>
          <IconButton
            onClick={() => history.push("/home")}
            style={{ backgroundColor: "transparent" }}
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </div>
        <div>
          <MenuBar />
        </div>
        <div>
          <div style={{ minWidth: "90%", width: "90%" }}>
            <CustomButton
              bgcolor
              onClick={() => history.push("/compose/tweet")}
            >
              Tweet
            </CustomButton>
          </div>
        </div>
        <div className={classes.footer1}>
          <div
            className={classes.profileContainer}
            // aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AccountFooter classes={classes} />
          </div>
          <CustomMenu
            handleClose={handleClose}
            open={open}
            anchorEl={anchorEl}
            from="footer"
          />
        </div>
      </div>
    </header>
  );
};

export default withRouter(HeaderBar);
