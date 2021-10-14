import {  makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    ButtonStyle : {
        backgroundColor: bgcolor ? "rgb(26, 140, 216)" : "rgb(239, 243, 244)",
        color: bgcolor ? theme.palette.common.white : "rgb(15, 20, 25)",
        padding: bgcolor && "10px",
        borderRadius: "9999px",
        width: bgcolor ? "90%" : "32px",
        fontSize: bgcolor ? "15px" : "14px",
        height: bgcolor ? "52px" : "32px",
        fontWeight: 700,
      };
}))

export default useStyles