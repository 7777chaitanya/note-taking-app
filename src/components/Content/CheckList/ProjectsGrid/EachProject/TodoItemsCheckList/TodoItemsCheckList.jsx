import React from "react";
import useStyles from "./styles";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  List,
  ListItemText,
  IconButton,
} from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoItemsCheckList = () => {
  const classes = useStyles();
  return (
    <List dense={true}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Single-line item"
          // secondary={secondary ? 'Secondary text' : null}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default TodoItemsCheckList;
