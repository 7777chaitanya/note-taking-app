import App from "./App";
import ReactDOM from "react-dom";
import { NotesProvider } from "./contexts/NotesContext";
import "./index.css";
import { TrashNotesProvider } from "./contexts/TrashNotesContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { ScratchPadProvider } from "./contexts/ScratchPadContext";

ReactDOM.render(
  <ScratchPadProvider>
    <NotesProvider>
      <TrashNotesProvider>
        <ProjectsProvider>
          <App />
        </ProjectsProvider>
      </TrashNotesProvider>
    </NotesProvider>
  </ScratchPadProvider>,
  document.getElementById("root")
);
