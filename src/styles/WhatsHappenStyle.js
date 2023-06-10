import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "50vh",
    minHeight: "35vh",
    backgroundColor: theme.palette.action.hover,
    borderRadius: "16px",
    marginBottom: "16px",
    // border: `0.5px solid ${theme.palette.text.secondary}`,
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
      color: theme.palette.text.secondary,
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
      backgroundColor: theme.palette.action.hover,
    },
  },
  newsContainer: {
    height: "30vh",
    minHeight: "25vh",
  },
}));

export default useStyles;
