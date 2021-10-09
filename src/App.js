import { useContext } from "react";
import { NotesContext } from "./contexts/NotesContext";
import { LeftMenu, Content } from "./components";
import { Box } from "@material-ui/core";

const App = () => {
  const { notes } = useContext(NotesContext);
  console.log("notes => ", notes);
  return (
    <Box>
      <LeftMenu />
      <Content />
    </Box>
  );
};

export default App;
