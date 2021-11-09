import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    margin: "0 20px 0 0",
  },
  homeContainer1: {
    // border: "1px solid rgba(211,211,211, 0.3)",
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    borderRightColor: theme.palette.divider,

    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderLeftColor: theme.palette.divider,
    height: "100vh",
  },
  headerContainer: {
    padding: "16px 16px",
    display: "flex",
    justifyContent: "space-between",
    // position: "fixed",
    // width: "100%",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.divider,
    "& .MuiInput-input": {
      overflow: "hidden",
      height: "2rem",
      fontSize: "16px",
      color: theme.palette.text.primary,
      fontWeight: 400,
      backgroundColor: "transparent",
      border: "none",
      "&::active": {
        border: "none",
      },
    },
    "& .MuiButton-root": {
      background: "none",
      textTransform: "capitalize",

      // paddingLeft: 0,
      marginLeft: 10,
      "&:hover": {
        backgroundColor: "none",
      },
    },
  },
  headerFixedContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  Home: {
    fontWeight: 700,
    lineHeight: "24px",
    fontSize: "20px",
    color: theme.palette.text.primary,
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  // Tweets Container Styles ------------------------

  TweetsContainer: {
    overflowY: "scroll",
    height: "93vh",
    "&::-webkit-scrollbar": { display: "none" },
  },
  bookmarkName: {
    color: theme.palette.text.primary,
    fontSize: "12px",
    marginTop: "-4px",
    fontWeight: 400,
  },
  InputFiled: {
    width: "100%",
    color: "red",
    marginTop: 0,
    marginBottom: 0,
    cursor: "pointer",

    "& .css-1rn6w7t-MuiInputBase-root-MuiOutlinedInput-root": {
      borderRadius: "99999px",
      textAlign: "left",
      height: "42px",
      fontWeight: "200",
      fontSize: "15px",
      lineHeight: "20px",
      padding: "12px",
      border: "none",
      backgroundColor: "rgba(217, 217, 217, 0.09)",

      "&:active": {
        border: "0.5px solid rgb(29,155,240)",
      },
    },
    "& .css-9425fu-MuiOutlinedInput-notchedOutline": {
      borderWidth: "0",
    },
  },
  tweetButton: {
    backgroundColor: "rgb(26, 140, 216)",
    fontSize: "14px",
    width: "80px",
    borderRadius: "9999px",
    color: "rgb(256,256,256)",
    "&.Mui-disabled": {
      backgroundColor: "rgba(26, 140, 216,0.5)",
      color: "rgba(256,256,256,0.5)",
    },
  },
}));

export default useStyles;
