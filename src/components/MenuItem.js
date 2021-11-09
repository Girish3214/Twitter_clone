import { Badge, Typography } from "@mui/material";
import React from "react";
import useStyles from "../styles/MenuBarStyles";

const MenuItem = ({ text, icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.Items}>
      <div>
        {text === "Home" ? (
          <Badge color="info" variant="dot">
            {icon}
          </Badge>
        ) : (
          <>{icon}</>
        )}
      </div>
      <div className={classes.menuNames}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          style={{ fontWeight: "500", marginBottom: 0 }}
        >
          {text}
        </Typography>
      </div>
    </div>
  );
};

export default MenuItem;
