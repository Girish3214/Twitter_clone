import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useStyles from "../styles/pageStyles/tweetStyles";
import { withRouter } from "react-router-dom";
import Model from "./Model/Model";
import { CardMedia } from "@mui/material";
import { videoFormatList } from "../utils/videoFormatList";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Images = ({ images, tweet }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  images.length === 1 && (images[0].rows = 5);
  images.length === 1 && (images[0].cols = 4);
  if (images.length >= 2) {
    images.map((item) => (item.rows = 2));
    images.map((item) => (item.cols = 2));
  }
  images.length === 3 && (images[0].rows = 4);
  if (images.length === 4) {
    images.map((item) => (item.rows = 1));
  }
  //   images.length === 4 && (images[0].rows = 1);
  //   images.length === 4 && (images[1].rows = 1);
  //   images.length === 4 && (images[2].rows = 1);
  //   images.length === 4 && (images[3].rows = 1);

  const handleClickOpen = (i) => {
    setOpen(true);
    setSelectedValue(images);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue([]);
  };

  // console.log(hover);

  // console.log(videoFormatList.map((i) => images[0].img.includes(i)));

  return (
    <div style={{ borderRadius: "16px", borderColor: "rgb(47, 51, 54)" }}>
      {images.length === 1 && images[0].video ? (
        <CardMedia
          component="video"
          controls
          image={images[0].video}
          alt="Paella dish"
          style={{ maxHeight: "210" }}
          className={classes.videoContainer}
        >
          <video autoPlay="autoplay" muted>
            <source src={images[0].video} type="video/mp4" />
          </video>
        </CardMedia>
      ) : (
        <ImageList
          sx={{ width: 500, height: 210 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
          style={{
            borderRadius: "16px",
            height: "auto",
            columnGap: "1.5px",
            width: "auto",
          }}
          className={classes.imageList}
        >
          {images.map((item, i) => (
            <ImageListItem
              cols={item.cols || 1}
              rows={item.rows || 1}
              className={classes.image}
              key={i}
              style={{ height: "auto" }}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                effect="blur"
                className={classes.image}
                onClick={handleClickOpen}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      {/* <CardMedia
        component="video"
        autoPlay
        controls
        image={"/videos/5.mp4"}
        alt="Paella dish"
      /> */}

      {selectedValue?.length !== 0 && (
        <Model
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          tweet={tweet}
          setSelectedValue={setSelectedValue}
        />
      )}
    </div>
  );
};

export default withRouter(Images);
