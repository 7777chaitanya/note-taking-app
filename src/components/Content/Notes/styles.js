import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
root : {
    display : "flex",
    
},
notesList:{
    flex : 3,
    border : "1px solid black",
    height : "99vh",
    
},
editor:{
    flex : 7
},
notesListBox:{
    overflowY : "auto",
    maxHeight : "90vh"
}
});

export default useStyles;