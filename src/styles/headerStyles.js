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
  },
  profileContainer: {
    width: "90%",
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
    color: "rgb(110, 118, 125)",
    fontWeight: "400",
    fontSize: 12,
    marginTop: "-4px",
  },
  moreButton: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
