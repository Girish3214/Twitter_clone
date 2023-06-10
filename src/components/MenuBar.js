import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "../styles/MenuBarStyles";
import { menuItems } from "../utils/MenuBarItems";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import MenuItem from "./MenuItem";
import CustomMenu from "../customComponents/CustomMenu";

const MenuBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.MenuContainer}>
      <div className={classes.navContainer}>
        {menuItems.map((item) => (
          <Link
            to={`${item.url}`}
            key={item.name}
            className={classes.linkItems}
          >
            <MenuItem text={item.name} icon={item.Icon} />
          </Link>
        ))}

        <Button className={classes.linkItems} onClick={handleClick}>
          <MenuItem
            text="More"
            icon={<MoreHorizIcon style={{ fontSize: "1.8rem" }} />}
          />
        </Button>
        <CustomMenu
          handleClose={handleClose}
          open={open}
          anchorEl={anchorEl}
          from="more"
        />
      </div>
    </div>
  );
};

export default MenuBar;
