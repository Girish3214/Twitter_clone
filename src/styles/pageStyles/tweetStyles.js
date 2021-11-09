import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  TweetContainer: {
    padding: "11px 16px",
    paddingBottom: "10px",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.divider,
    cursor: "pointer",
  },
  TweetBox: {
    display: "flex",
  },
  topicContainer: {
    fontSize: "12px",
    color: theme.palette.text.secondary,
    lineHeight: "14px",
    display: "flex",
    margin: "0 10px 5px 0",
    "& .css-ptiqhd-MuiSvgIcon-root": {
      width: "0.7em",
      height: "0.7em",
      marginRight: "5px",
    },
  },
  usernameContainer: {
    display: "flex",
    height: "2vh",
    marginBottom: "4px",
    justifyContent: "space-between",
    "& div p": {
      margin: "0",
      lineHeight: "18px",
      fontSize: "14px",
      fontWeight: 700,
      marginRight: 5,
      height: "2vh",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    "& div span": {
      lineHeight: "18px",
      fontSize: "14px",
      fontWeight: 400,
      color: theme.palette.text.secondary,
      alignItems: "center",
      marginRight: 5,
      height: "2vh",
    },
    "& span1": {
      lineHeight: "18px",
      fontSize: "14px",
      fontWeight: 400,
      color: theme.palette.text.secondary,

      marginRight: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  },
  tweetDescription: {
    fontWeight: 400,
    fontSize: "12px",
    color: theme.palette.text.primary,
  },
  hashTagsLink: {
    color: "rgb(29, 155, 240)",
    margin: "0 1px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  tweetComments: {
    display: "flex",
    justifyContent: "space-between",
  },
  icons: {
    color: "rgba(110,118,125)",
    "& div": {
      fontSize: "14px",
      // color: theme.palette.text.secondary,
      padding: "0",
      backgroundColor: "transparent",
    },
    "& .MuiButton-text": {
      fontSize: "14px",
      fontWeight: 400,
      transitionDuration: "0.2s",
    },
    "& .MuiIconButton-root": {
      color: "currentColor",
    },
  },
  colorBlue: {
    "&:hover": {
      color: theme.palette.info.dark,
    },
  },
  colorGreen: {
    "&:hover": {
      color: theme.palette.success.dark,
    },
  },
  colorRed: {
    "&:hover": {
      color: theme.palette.error.dark,
    },
  },

  imageList: {
    height: "251px",
    "&::-webkit-scrollbar": { display: "none" },
  },
  image: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    objectFit: "cover",
    width: "100%",
    height: "100%",
    maxHeight: "80vh",
    "&::-webkit-scrollbar": { display: "none" },
  },
  videoContainer: {
    height: "auto",
    maxHeight: "630px",
    borderRadius: "16px",
  },
}));

export default useStyles;
