import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    headerBox:{
        padding : "1rem",
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center"

    },
    divider:{
        marginBottom : "1rem"
    },
    button: {
        margin: theme.spacing(1),
      },
}));

export default useStyles;