import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  MenuContainer: {
    marginTop: "2px",
    marginBottom: "4px",
    width: "90%",
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "10px",
    paddingTop: "4px",
    width: "90%",
  },
  linkItems: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    textTransform: "capitalize",
    width: "fit-content",
    padding: "0px 5px 0px 0px",

    "&:hover": {
      borderRadius: "9999px",
      backgroundColor: theme.palette.action.hover,
    },
    transitionDuration: "0.2s",
  },
  Items: {
    padding: "12px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },
  menuNames: {
    margin: "0 16px 0 16px",
  },
}));

export default useStyles;
