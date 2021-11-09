import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    position: "fixed",
    top: 10,
    left: 10,
    color: theme.palette.primary.light,
  },
  paperStyles: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // boxShadow: "none",
    // backgroundImage: "none",
    // "& .MuiDialog-scrollPaper .css-1qxadfk-MuiPaper-root-MuiDialog-paper": {
    //   backgroundColor: "transparent",
    //   boxShadow: "none",
    //   backgroundImage: "none",
    // },
  },
  image: {
    width: "1000px",
    // height: "600px",
    borderRadius: "10px",
    // display: "block",
    // maxWidth: "90%",
    // maxHeight: "90%",
    maxHeight: "90vh",
    margin: "50px auto",
    boxShadow: "3px 5px 7px rgba(0,0,0,0.5)",
  },
  leftArrow: {
    position: "absolute",
    top: "50%",
    left: "32px",

    fontSize: "1rem",
    color: "white",
    zIndex: 10,
    userSelect: "none",
    backdropFilter: "blur(4px)",

    backgroundColor: "rgba(64, 58, 32, 0.75)",
  },
  rightArrow: {
    position: "absolute",
    top: "50%",
    right: "32px",

    fontSize: "1rem",
    color: "white",
    zIndex: 10,
    userSelect: "none",
  },
}));
export default useStyles;
