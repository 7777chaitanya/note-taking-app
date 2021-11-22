import React, { useContext, useEffect } from "react";
import useStyles from "./styles";
import { List, ListItem, Button } from "@material-ui/core";
import EachTodoItem from "./EachTodoItem/EachTodoItem";
import { ProjectsContext } from "../../../../../../contexts/ProjectsContext";
import deleteProjectDocument from "../../../../../../firebaseFunctions/deleteProject";

const TodoItemsCheckList = ({ eachProject }) => {
  const classes = useStyles();
  console.log("eachproject => ", eachProject);

  return (
    (<List dense={true}>
      {eachProject.todoItems.map((eachItem) => (
        <EachTodoItem eachItem={eachItem} eachProject={eachProject} />
      ))}
      <ListItem>
        <Button onClick={() => deleteProjectDocument(eachProject.id)} color="secondary" variant="outlined" fullWidth>
          Delete
        </Button>
      </ListItem>
    </List>)
    
  );
};

export default TodoItemsCheckList;
