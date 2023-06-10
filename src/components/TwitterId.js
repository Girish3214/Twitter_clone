import { Avatar, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../customComponents/CustomButton";
import CustomToolTip from "../customComponents/CustomToolTip";
import useStyles from "../styles/twitterIdStyles";
import VerifiedIcon from "@mui/icons-material/Verified";

const TwitterId = ({ id }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.profile}>
        <div className={classes.avatarContainer}>
          <CustomToolTip id={id}>
            <div>
              <Avatar
                alt="semy Sharp"
                src="/images/logo192.png"
                sx={{ width: 40, height: 40 }}
              />
            </div>
          </CustomToolTip>
          <CustomToolTip id={id}>
            <div className={classes.namesConatiner}>
              <Typography
                variant="h6"
                gutterBottom
                component="p"
                className={classes.profileName}
              >
                {id.name}
                {id.isVerified && (
                  <VerifiedIcon
                    sx={{ fontSize: 18, marginLeft: 0.5, marginBottom: -0.5 }}
                  />
                )}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="p"
                className={classes.idName}
              >
                {id.twitterName}
              </Typography>
            </div>
          </CustomToolTip>
        </div>
        <div className={classes.moreButton}>
          <CustomButton>Follow</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default TwitterId;
