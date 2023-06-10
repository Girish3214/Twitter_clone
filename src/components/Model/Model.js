import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import useStyles from "./ModelStyle.js";

const Model = ({ onClose, selectedValue, open }) => {
  const classes = useStyles();

  const [current, setCurrent] = useState(0);
  const length = selectedValue.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // console.log(current);
  // if (Array.isArray(selectedValue) || selectedValue.length <= 0) {
  //   return null;
  // }
  // console.log(selectedValue);
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleCLick = (e) => {
    // console.log(e.target);

    if (
      (e.target.id === "image" &&
        e.target.id === "left" &&
        e.target.id === "right" &&
        e.target.id === "left1" &&
        e.target.id === "right1") ||
      e.target.id === ""
    )
      onClose();
  };

  return (
    <div className="carousel-container" style={{ position: "relative" }}>
      <div
        onClose={handleClose}
        onClick={handleCLick}
        open={open}
        className={classes.paperStyles}
        style={{ cursor: "auto" }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          className={classes.closeIcon}
        >
          <Tooltip title="Close">
            <CloseIcon />
          </Tooltip>
        </IconButton>

        {current !== 0 && (
          <IconButton
            id="left1"
            className={classes.leftArrow}
            onClick={prevSlide}
          >
            <BsArrowLeft id="left" />
          </IconButton>
        )}
        {current !== selectedValue.length - 1 && (
          <IconButton
            id="right1"
            className={classes.rightArrow}
            onClick={nextSlide}
          >
            <BsArrowRight id="right" />
          </IconButton>
        )}
        {/* <div className="new" style={{ display: "flex" }}> */}
        {selectedValue.map((images, i) => (
          <div key={i} className={i === current ? "slide active" : "slide"}>
            {i === current && (
              <img
                src={images.img}
                alt="new"
                className={classes.image}
                id="image"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            )}
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Model;
