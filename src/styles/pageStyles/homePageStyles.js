import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    margin: "0 20px 0 0",
  },
  homeContainer1: {
    // border: "1px solid rgba(211,211,211, 0.3)",
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    borderRightColor: "rgba(211,211,211, 0.25)",

    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderLeftColor: "rgba(211,211,211, 0.25)",
    height: "100vh",
  },
  headerContainer: {
    padding: "16px",
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: "rgba(211,211,211, 0.25)",
    "& .MuiInput-input": {
      overflow: "hidden",
      height: "2rem",
      fontSize: "20px",
      color: "rgb(211,211,211)",
      fontWeight: 400,
    },
    "& .MuiButton-root": {
      background: "none",
      textTransform: "capitalize",
      paddingLeft: 0,
      "&:hover": {
        backgroundColor: "none",
      },
    },
  },
  Home: {
    fontWeight: 700,
    lineHeight: "24px",
    fontSize: "20px",
    color: "rgb(217, 217, 217)",
  },
}));

export default useStyles;
