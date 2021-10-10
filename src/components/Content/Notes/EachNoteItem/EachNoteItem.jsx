import React from 'react';
import useStyles from "./styles";
import {Paper, Typography} from "@material-ui/core";
import moment from "moment";


const EachNoteItem = ({noteItem}) => {
    const classes = useStyles();

    return (
       <Paper elevation={5} className={classes.root}>
           <Typography variant="h5">{noteItem.title}</Typography>
           
           <Typography variant="body2">{noteItem.content}</Typography>
           <Typography variant="p">{moment(noteItem?.creationTime?.toDate()).fromNow()}</Typography>
       </Paper>
    )
}

export default EachNoteItem
