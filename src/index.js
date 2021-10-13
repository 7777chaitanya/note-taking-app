import App from "./App";
import ReactDOM from "react-dom";
import { NotesProvider } from "./contexts/NotesContext";
import "./index.css";
import { TrashNotesProvider } from "./contexts/TrashNotesContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";

ReactDOM.render(
  <NotesProvider>
    <TrashNotesProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </TrashNotesProvider>
  </NotesProvider>,
  document.getElementById("root")
);
