import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { FiSettings, FiMail } from "react-icons/fi";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import useStyles from "../styles/pageStyles/homePageStyles";

const titlePages = ["explore", "lists", "bookmarks"];
const HomeHeader = () => {
  const classes = useStyles();
  const path = window.location.pathname;
  let title = path.substring(1);
  title = path === "/i/bookmarks" ? "bookmarks" : title;

  return (
    <>
      <div
        className={classes.headerContainer}
        style={{ padding: titlePages.includes(title) ? "7px 16px" : "" }}
      >
        <div className={classes.headerFixedContainer}>
          {title !== "explore" ? (
            <div
              className={classes.Home}
              style={{
                textTransform: "capitalize",
              }}
            >
              {title}
              {(title === "bookmarks" || title === "lists") && (
                <span className={classes.bookmarkName}>@Name_Is_Girish</span>
              )}
            </div>
          ) : (
            <div style={{ width: "90%" }}>
              <TextField
                className={classes.InputFiled}
                margin="dense"
                placeholder="Search Twitter"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        style={{ color: "rgba(217, 217, 217, 0.5)" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          )}
          {title !== "bookmarks" && (
            <div
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {path === "/home" ? (
                <AutoAwesomeIcon />
              ) : path === "/lists" ? (
                ""
              ) : (
                <FiSettings />
              )}
              {path === "/messages" && (
                <>
                  <FiMail style={{ marginLeft: 10 }} />
                </>
              )}
              {path === "/lists" && (
                <>
                  <FiMail style={{ marginLeft: 10 }} />
                  <MoreHorizSharpIcon style={{ marginLeft: 10 }} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
