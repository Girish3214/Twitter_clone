import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HouseIcon from "@mui/icons-material/House";

export const menuItems = [
  {
    name: "Home",
    Icon: <HouseIcon style={{ fontSize: "1.8rem" }} />,
    url: "/home",
  },
  {
    name: "Explore",
    Icon: <TagIcon style={{ fontSize: "1.8rem" }} />,
    url: "/explore",
  },
  {
    name: "Notifications",
    Icon: <NotificationsNoneIcon style={{ fontSize: "1.8rem" }} />,
    url: "/notifications",
  },
  {
    name: "Messages",
    Icon: <MailOutlineIcon style={{ fontSize: "1.8rem" }} />,
    url: "/messages",
  },
  {
    name: "Bookmarks",
    Icon: <TurnedInNotIcon style={{ fontSize: "1.8rem" }} />,
    url: "/i/bookmarks",
  },
  {
    name: "Lists",
    Icon: <ListAltIcon style={{ fontSize: "1.8rem" }} />,
    url: "/lists",
  },
  {
    name: "Profile",
    Icon: <PersonOutlineIcon style={{ fontSize: "1.8rem" }} />,
    url: "/profile",
  },
];
