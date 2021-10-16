import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    outerBox:{
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        [theme.breakpoints.down('sm')]: {
            // backgroundColor: theme.palette.secondary.main,
          },
          [theme.breakpoints.up('sm')]: {
            overflowX : "hidden",
            overflowY : "hidden"
        },
    }
}));

export default useStyles;


