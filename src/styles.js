import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    outerBox:{
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        [theme.breakpoints.down('md')]: {
            // backgroundColor: theme.palette.secondary.main,
            minWidth : "70rem",
            minHeight : "100vh"
          },
          [theme.breakpoints.up('md')]: {
           
        },
        overflowX : "hidden",
        overflowY : "hidden"
    }
}));

export default useStyles;


