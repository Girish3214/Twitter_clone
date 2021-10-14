import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, IconButton, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import useStyles from "../styles/headerStyles";
import { withRouter } from "react-router";
import CustomButton from "../customComponents/CustomButton";
import MenuBar from "./MenuBar";

const HeaderBar = ({ history }) => {
  const classes = useStyles();
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
          <div className={classes.profileContainer}>
            <div className={classes.profile}>
              <div>
                <Avatar
                  alt="semy Sharp"
                  src="/images/logo192.png"
                  sx={{ width: 48, height: 48 }}
                />
              </div>
              <div className={classes.namesConatiner}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="p"
                  className={classes.profileName}
                >
                  Name_Is_Girish
                </Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="p"
                  className={classes.idName}
                >
                  @Name_Is_Girish
                </Typography>
              </div>
            </div>
            <div className={classes.moreButton}>
              <MoreHorizIcon style={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(HeaderBar);
