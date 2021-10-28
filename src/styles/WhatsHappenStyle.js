import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "50vh",
    minHeight: "35vh",
    backgroundColor: "rgb(21, 24, 28)",
    borderRadius: "16px",
    marginBottom: "16px",
  },
  policyContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: "5px 16px",
    fontSize: "12px",
    lineHeight: "16px",
    "& p": {
      margin: "2px",
      paddingRight: "10px",
    },
    "& p a": {
      textDecoration: "none",
      color: "rgb(110, 118, 125)",
      fontWeight: "400",
      marginBottom: "2px",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },

  seeMore: {
    fontWeight: "400",
    fontSize: "15px",
    color: "rgb(29,155,240)",
    lineHeight: "20px",
    cursor: "pointer",
    padding: "16px",
    transitionDuration: "0.2s",
    borderBottomRightRadius: "16px",
    borderBottomLeftRadius: "16px",
    "&:hover": {
      backgroundColor: "rgb(255,255,255,0.03)",
    },
  },
  newsContainer: {
    height: "30vh",
    minHeight: "25vh",
  },
}));

export default useStyles;
