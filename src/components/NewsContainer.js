import { Avatar, Grid, Tooltip } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import useStyles from "../styles/newsItemStyles";
import NewsItem from "./NewsItem";

const NewsContainer = ({ news }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.profile}>
        <Grid container>
          <Grid item xs={9}>
            <NewsItem news={news} />
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              display: "flex",
              justifyContent: news.tweetImage === "" ? "flex-end" : "center",
              color: "rgb(110, 118, 125)",
            }}
          >
            {news.tweetImage === "" ? (
              <Tooltip title="More">
                <MoreHorizIcon
                  fontSize="small"
                  style={{ justifyContent: "flex-end" }}
                />
              </Tooltip>
            ) : (
              <Avatar
                src={news.tweetImage}
                variant="rounded"
                sx={{ width: 50, height: 50 }}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default NewsContainer;
