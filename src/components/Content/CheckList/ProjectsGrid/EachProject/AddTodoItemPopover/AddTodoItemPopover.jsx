import React from 'react';
import useStyles from "./styles";
import Popover from "@material-ui/core/Popover";
import {Typography} from "@material-ui/core";
import AddTodoItemPopoverBody from "./AddTodoItemPopoverBody/AddTodoItemPopoverBody"

const AddTodoItemPopover = ({anchorEl,handleClose, eachProject}) => {
    const classes = useStyles();
    const open = anchorEl;
    const id = open ? "simple-popover" : undefined;
    return (
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
          <AddTodoItemPopoverBody handleClose={handleClose} eachProject={eachProject}/>
      </Popover>
    )
}

export default AddTodoItemPopover
