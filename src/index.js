import App from "./App";
import ReactDOM from "react-dom";
import { NotesProvider } from "./contexts/NotesContext";
import "./index.css";
import { TrashNotesProvider } from "./contexts/TrashNotesContext";

ReactDOM.render(
  <NotesProvider>
    <TrashNotesProvider>
      <App />
    </TrashNotesProvider>
  </NotesProvider>,
  document.getElementById("root")
);
