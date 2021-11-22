import React, { useContext, useEffect } from "react";
import useStyles from "./styles";
import { List } from "@material-ui/core";
import EachTodoItem from "./EachTodoItem/EachTodoItem";
import { ProjectsContext } from "../../../../../../contexts/ProjectsContext";

const TodoItemsCheckList = ({ eachProject }) => {
  const classes = useStyles();

  return (
    <List dense={true}>
      {eachProject.todoItems.map((eachItem) => (
        <EachTodoItem eachItem={eachItem} eachProject={eachProject} />
      ))}
    </List>
  );
};

export default TodoItemsCheckList;
