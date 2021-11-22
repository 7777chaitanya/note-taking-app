import React from "react";
import useStyles from "./styles";
import { Button, Slide, Snackbar } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import createNewNote from "../../../firebaseFunctions/createNewNote";

const NewNoteButton = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  const handleClick = (Transition) => {
    setTransition(() => Transition);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateNewNote = () => {
    createNewNote();
    handleClick(TransitionLeft);

  }
  return (
    <>
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      startIcon={<AddBoxIcon />}
      fullWidth={true}
      onClick={handleCreateNewNote}
    >
      New Note
    </Button>

    <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Note Created!"
        key={transition ? transition.name : ""}
        autoHideDuration={1000}
      />
      </>
  );
};

export default NewNoteButton;
