import App from "./App";
import ReactDOM from "react-dom";
import { NotesProvider } from "./contexts/NotesContext";
import "./index.css";
import { TrashNotesProvider } from "./contexts/TrashNotesContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          scrollbarColor: "#3f51b5 #ffffff",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#ffffff",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#3f51b5",
            minHeight: 24,
            border: "3px solid #ffffff",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#ffffff",
          },
        },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <NotesProvider>
      <TrashNotesProvider>
        <ProjectsProvider>
          <App />
        </ProjectsProvider>
      </TrashNotesProvider>
    </NotesProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
