import React, { useEffect, useContext } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  List,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import changeTodoItemStatusToTrue from "../../../../../../../firebaseFunctions/changeTodoItemStatusToTrue";

const EachTodoItem = ({ eachItem, eachProject }) => {
  const [checked, setChecked] = React.useState(() => eachItem?.checked);

  const handleChange = (event) => {
    setChecked(event.target.checked);

    changeTodoItemStatusToTrue(
      eachItem.name,
      eachProject.id,
      !checked,
      eachProject
    );
  };

  return (
    <ListItem>
      <ListItemAvatar>
        {/* <Avatar>
            <FolderIcon />
          </Avatar> */}

        <Checkbox
          defaultChecked={checked}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          onChange={handleChange}
        />
      </ListItemAvatar>
      <ListItemText
        primary={eachItem.name}
        // secondary={secondary ? 'Secondary text' : null}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default EachTodoItem;
