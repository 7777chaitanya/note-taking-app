import React, { useContext } from "react";
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
import Checkbox from '@material-ui/core/Checkbox';


import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { ProjectsContext } from "../../../../../../contexts/ProjectsContext";

const TodoItemsCheckList = ({ eachProject }) => {
  const classes = useStyles();
  //  )
  console.log(eachProject);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <List dense={true}>
      {eachProject.todoItems.map((eachItem) => (
        <ListItem key={eachItem.name}>
          <ListItemAvatar>
            {/* <Avatar>
            <FolderIcon />
          </Avatar> */}

            <Checkbox
              defaultChecked={checked}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
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
      ))}
    </List>
  );
};

export default TodoItemsCheckList;
