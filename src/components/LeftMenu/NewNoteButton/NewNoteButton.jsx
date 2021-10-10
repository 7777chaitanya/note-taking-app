import React from 'react';
import useStyles from "./styles";
import {Button} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import createNewNote from '../../../firebaseFunctions/createNewNote';

const NewNoteButton = () => {
    const classes = useStyles();
    return (
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddBoxIcon />}
        fullWidth={true}
        onClick={createNewNote}
      >
        New Note
      </Button>
    )
}

export default NewNoteButton
