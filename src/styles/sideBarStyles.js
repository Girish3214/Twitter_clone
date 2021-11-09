import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sideBarContainer: {
    height: "100vh",
  },
  InputFiled: {
    width: "100%",
    color: "red",
    margin: "5px auto",
    "& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
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
}));

export default useStyles;
