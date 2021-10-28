import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  profile: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "0",
    padding: "10px 10px",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.03)",
    },
  },
  newsFeed: {
    fontSize: "13px",
    color: "rgb(110, 118, 125)",
  },
  hashTags: {
    // fontSize: "10px",
    color: "white",
    fontWeight: 700,
  },
  linkItem: {
    textDecoration: "none",
    color: "rgb(29, 155, 240)",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
