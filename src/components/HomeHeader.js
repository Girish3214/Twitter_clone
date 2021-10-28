import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import useStyles from "../styles/pageStyles/homePageStyles";

const HomeHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.Home}>Home</div>
      <div>
        <AutoAwesomeIcon />
      </div>
    </div>
  );
};

export default HomeHeader;
