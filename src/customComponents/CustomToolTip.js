import { Tooltip, styled, tooltipClasses } from "@mui/material";
import React from "react";
import PopUp from "../components/PopUp";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    overflow: "hidden",
    minWidth: "300px",
    boxShadow:
      "rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px",
    borderRadius: "16px",
    backgroundColor: "#000000",
    backgroundImage: "none",
  },
}));

const CustomToolTip = ({ children, id }) => {
  return <LightTooltip title={<PopUp id={id} />}>{children}</LightTooltip>;
};

export default CustomToolTip;
