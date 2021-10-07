import App from "./App";
import ReactDOM from "react-dom";
import { NotesProvider } from "./contexts/NotesContext";

ReactDOM.render(
  <NotesProvider>
    <App />
  </NotesProvider>,

  document.getElementById("root")
);
