import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  profile: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "0",
    padding: "15px 10px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.03)",
    },
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "space-between",
    "& div": {
      cursor: "pointer",
    },
  },
  namesConatiner: {
    margin: "0 12px",
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
}));

export default useStyles;
