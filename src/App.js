import { useContext } from "react";
import { NotesContext } from "./contexts/NotesContext";
import { LeftMenu, Content } from "./components";
import { Box } from "@material-ui/core";
import useStyles from "./styles";

const App = () => {
    const classes = useStyles();
  const { notes } = useContext(NotesContext);
  console.log("notes => ", notes);
  return (
    <Box className={classes.outerBox}>
    
      <LeftMenu />
      <Content />
    </Box>
  );
};

export default App;
