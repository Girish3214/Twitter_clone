import { Avatar, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../customComponents/CustomButton";
import VerifiedIcon from "@mui/icons-material/Verified";
import useStyles from "../styles/customComponentStyles";
import { converter } from "../utils/PeoplesList";

const PopUp = ({ id }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.hoverRoot}>
        <div className={classes.imageContainer}>
          <div>
            <Avatar
              alt="semy Sharp"
              src={id.imageUrl}
              sx={{ width: 40, height: 40 }}
            />
          </div>
          <div>
            <CustomButton>Follow</CustomButton>
          </div>
        </div>
        <div>
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
        </div>
        <div>
          <div className={classes.descriptionContainer}>
            <Typography
              variant="h6"
              gutterBottom
              component="p"
              className={classes.description}
            >
              {id.description}
            </Typography>
          </div>
        </div>
        <div>
          <div className={classes.followCountContainer}>
            <div>
              <span className={classes.count}>{converter(id.following)}</span>
              <span className={classes.text}>Following</span>
            </div>
            <div>
              <span className={classes.count}>{converter(id.followers)}</span>
              <span className={classes.text}>Followers</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            {id.friendsFollowing ? (
              <span className={classes.friendsFollowing}>
                Followed by {id.friendsFollowing[0]}
              </span>
            ) : (
              <span className={classes.friendsFollowing}>
                Not followed by anyone you're following
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
