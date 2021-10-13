import React from 'react';
import useStyles from "./styles";
import Popover from "@material-ui/core/Popover";
import {Typography} from "@material-ui/core";
import AddProjectPopOverBody from "./AddProjectPopOverBody/AddProjectPopOverBody"

const AddProjectPopover = ({anchorEl,handleClose}) => {
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
          <AddProjectPopOverBody/>
      </Popover>
    )
}

export default AddProjectPopover
