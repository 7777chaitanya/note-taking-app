import React from 'react';
import useStyles from "./styles";
import {Button} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';

const NewNoteButton = () => {
    const classes = useStyles();
    return (
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddBoxIcon />}
        fullWidth={true}
      >
        New Note
      </Button>
    )
}

export default NewNoteButton
