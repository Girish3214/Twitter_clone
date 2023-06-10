import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    height: "100vh",
    position: "relative",
    ".css-1drgtl0-MuiButtonBase-root-MuiIconButton-root": {
      "&:hover": {
        backgroundColor: "none",
      },
    },
  },
  footer1: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    "& .MuiMenu-paper": {
      backgroundColor: "#fff",
    },
  },
  profileContainer: {
    width: "90%",
    cursor: "pointer",
    justifyContent: "space-evenly",
    textDecoration: "none",
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    display: "flex",
    padding: "8px",
    borderRadius: "9999px",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    transitionDuration: "0.2s",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    // width: "250px",
    marginRight: "0",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  namesConatiner: {
    margin: "0 12px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  profileName: {
    fontSize: "15px",
    marginBottom: "0",
  },
  idName: {
    color: theme.palette.text.secondary,
    fontWeight: "400",
    fontSize: 12,
    marginTop: "-4px",
  },
  moreButton: {
    display: "flex",
    alignItems: "center",
    marginLeft: "30px",
  },
  newCLasss: {
    "& .css-1if8r2c-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
      {
        backgroundColor: theme.palette.background.paper,
        backgroundImage: "none",
        boxShadow:
          "rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px",
        borderRadius: "16px",
        overflow: "hidden",
        padding: "12px 12px 0px ",
        minWidth: "260px",
        width: "300px",
      },
    "& .css-12wi0s0-MuiButtonBase-root-MuiMenuItem-root": {
      padding: "16px",
    },
  },
}));

export default useStyles;
