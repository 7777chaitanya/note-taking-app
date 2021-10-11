import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    noteTitleInput:{
       height : "3rem",
        fontSize : "2.5rem",
        // color  :"green"
    },
    noteTitleInputBox:{
        // height : "3rem",
        padding : "0.5rem",
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center"
    },
    noteDeleteIcon:{
        "&:hover": {
            color: "red"
          }
    }
});

export default useStyles;

