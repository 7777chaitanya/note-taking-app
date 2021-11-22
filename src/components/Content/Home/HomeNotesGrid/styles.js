import { makeStyles } from "@material-ui/core";

const returnStyles = (darkMode) => {
  const useStyles = makeStyles((theme) => ({
    eachNotePaper: {
      padding: "1rem",
      minHeight: "30vh",
      [theme.breakpoints.down("md")]: {
        maxWidth: "15rem",
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "15vw",
      },
      margin: "auto",
      "&:hover": {
        cursor: "pointer",
        // backgroundColor: "rgb(7, 177, 77, 0.50)",
        backgroundColor: darkMode ? "#95867c" : "rgb(7, 177, 77, 0.4)",
      },
    },
    divider: {
      margin: "0.5rem",
    },
    homeNotesCardsGrid: {
      maxHeight: "81vh",
      // border : "1px solid green",
      overflowY: "scroll",
    },
    eachNoteBox: {
      overflowWrap: "break-word",
    },
  }));
  return useStyles;
};

export default returnStyles;
