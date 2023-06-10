import { Button } from "@mui/material";
import React from "react";
import useStyles from "../styles/customComponentStyles";

const CustomButton = (props) => {
  const { children, bgcolor, tweet } = props;
  const ButtonStyle = {
    backgroundColor: bgcolor ? "rgb(26, 140, 216)" : "rgb(239, 243, 244)",
    color: bgcolor ? "rgb(256,256,256)" : "rgb(15, 20, 25)",
    padding: bgcolor ? "0" : "0 20px",
    borderRadius: "9999px",
    minWidth: bgcolor ? "90%" : "32px",
    fontSize: bgcolor && !tweet ? "18px" : "14px",
    height: bgcolor && !tweet ? "52px" : "32px",
    fontWeight: 700,
    textAlign: "center",
    overflowWrap: "break-word",
    textTransform: "capitalize",
    width: tweet && "45px",
  };
  const classes = useStyles();
  return (
    <>
      {bgcolor ? (
        <Button style={ButtonStyle} className={classes.ButtonStyle}>
          {children}
        </Button>
      ) : (
        <Button style={ButtonStyle} className={classes.ButtonStyle}>
          <div>{children}</div>
        </Button>
      )}
    </>
  );
};

export default CustomButton;
