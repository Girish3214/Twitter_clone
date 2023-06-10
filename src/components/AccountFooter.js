import React from "react";
import { Avatar, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckIcon from "@mui/icons-material/Check";
import useStyles from "../styles/headerStyles";

const AccountFooter = ({ from }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.profile}>
        <div className={classes.avatarContainer}>
          <div>
            <Avatar
              alt="semy Sharp"
              src="/images/logo192.png"
              sx={{ width: 40, height: 40 }}
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
          {from !== "menu" ? (
            <MoreHorizIcon style={{ fontSize: "1.5rem" }} />
          ) : (
            <CheckIcon
              style={{ fontSize: "1.5rem", color: "rgb(29, 155, 240)" }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AccountFooter;
