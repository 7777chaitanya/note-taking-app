import React from 'react';
import useStyles from "./styles";
import {Paper, Typography} from "@material-ui/core";
import moment from "moment";
import {useHistory} from "react-router-dom";


const EachNoteItem = ({noteItem}) => {
    const classes = useStyles();
    const history = useHistory();
    const handleClick = () => {
        console.log(noteItem.id);
        history.push(`/notes/${noteItem.id}`)
    }

    return (
       <Paper elevation={5} className={classes.root} onClick={handleClick}>
           <Typography variant="h5">{noteItem.title}</Typography>
           
           <Typography variant="body2">{noteItem.content}</Typography>
           <Typography variant="p">{moment(noteItem?.creationTime?.toDate()).fromNow()}</Typography>
       </Paper>
    )
}

export default EachNoteItem
