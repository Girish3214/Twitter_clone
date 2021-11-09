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
      backgroundColor: theme.palette.action.hover,
    },
  },
  newsFeed: {
    fontSize: "13px",
    color: theme.palette.text.secondary,
  },
  hashTags: {
    // fontSize: "10px",
    color: theme.palette.text.primary,
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
