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

    const parseHtmlString = (value) =>{
        // var doc = new DOMParser().parseFromString(value, "text/xml");
        // console.log(doc.firstChild)
        // return doc.firstChild.innerHTML;
        // console.log(typeof(value));
        // return "hi"

    //     var dom = document.createElement('div');
	// dom.innerHTML = value;
	// return dom;

    var parser = new DOMParser();
	var doc = parser.parseFromString(value, 'text/html');
    console.log(doc.body)
	return doc.body.innerHTML;
    }

    return (
       <Paper elevation={5} className={classes.root} onClick={handleClick}>
           <Typography variant="h5">{noteItem.title}</Typography>
           <Typography variant="body2">{parseHtmlString(noteItem.content)}</Typography>

           {/* <Typography variant="body2">{noteItem.content}</Typography> */}
           <Typography variant="p">{moment(noteItem?.creationTime?.toDate()).fromNow()}</Typography>
       </Paper>
    )
}

export default EachNoteItem
