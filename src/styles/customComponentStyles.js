import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ButtonStyle: {
    "&:hover": {
      backgroundColor: "",
      opacity: "0.9",
    },
  },
  hoverRoot: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  namesConatiner: {
    margin: "0 0 10 0",
    // textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  profileName: {
    fontSize: "15px",
    marginBottom: "2px",
    "&:hover": {
      textDecoration: "underline",
      curser: "pointer",
    },
  },
  idName: {
    color: "rgb(110, 118, 125)",
    fontWeight: "400",
    fontSize: 12,
    marginTop: "-4px",
  },
  descriptionContainer: {
    marginBottom: 10,
  },
  description: {
    fontWeight: "400",
    fontSize: 14,
  },
  followCountContainer: {
    display: "flex",
    marginBottom: 10,
  },
  count: {
    fontSize: "15px",
    fontWeight: 500,
    color: "#fff",
  },
  text: {
    color: "rgb(110, 118, 125)",
    marginLeft: 5,
    marginRight: 18,
  },
  friendsFollowing: {
    color: "rgb(110, 118, 125)",

    paddingTop: 10,
    fontSize: 12,
  },
}));

export default useStyles;
