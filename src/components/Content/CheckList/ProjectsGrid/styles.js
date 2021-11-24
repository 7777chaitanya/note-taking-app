import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    cardItemsGrid:{
        maxHeight : "81vh",
        overflowY : "scroll",
        marginTop : "1rem"
    },
    noProjects:{
        maxWidth : "55%",
        marginLeft : "auto",
        marginRight : "auto",
        padding : "1rem"
    }
})

export default useStyles;