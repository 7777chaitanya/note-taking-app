import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    
    noteTitleInput:{
       height : "3rem!important",
        fontSize : "2.5rem!important",
        color  :"rgb(63,81,181)!important"
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
    },
  

 
});

export default useStyles;

