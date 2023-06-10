import { Divider, Menu, MenuItem } from "@mui/material";
import React from "react";
import { withRouter } from "react-router";
import AccountFooter from "../components/AccountFooter";
import useStyles from "../styles/headerStyles";
import { LogoutItem, MoreItem } from "../utils/AccountUtils";

const CustomMenu = ({ from, open, handleClose, anchorEl, history }) => {
  const classes = useStyles();
  const list = from === "footer" ? LogoutItem : MoreItem;
  const newStyle = {
    minWidth: from === "more" && "220px",
    // width: from !== "footer" && "220px",
  };
  return (
    <div style={newStyle}>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={classes.newCLasss}
      >
        {from === "footer" ? (
          <div>
            <AccountFooter classes={classes} from="menu" />
            <Divider />
          </div>
        ) : (
          ""
        )}
        {list.map((item) => (
          <div key={item.url} onClick={handleClose}>
            <MenuItem onClick={() => history.push(`${item.url}`)}>
              {item.name}
            </MenuItem>
          </div>
        ))}
      </Menu>
    </div>
  );
};

export default withRouter(CustomMenu);
