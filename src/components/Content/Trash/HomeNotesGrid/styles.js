import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    eachNotePaper:{
        padding : "1rem",
        minHeight : "30vh",
        maxWidth : "15vw",
        margin : "auto",
        "&:hover": {
            cursor : "pointer",
            backgroundColor: 'rgb(7, 177, 77, 0.50)'
          },
          display : "flex",
          flexDirection : "column"
    },
    contentBox:{
        flex : 1
    },
    footerBox:{
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : "center"
    },
    emptyTrash:{
        maxWidth  : "40vw",
        padding : "2rem",
        margin : "auto"
    },
    divider:{
        margin : "0.5rem"
    },
    homeNotesCardsGrid:{
        maxHeight : "81vh",
        // border : "1px solid green",
        overflowY : "scroll"
    }
});

export default useStyles;


