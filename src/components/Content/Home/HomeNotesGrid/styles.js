import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  eachNotePaper: {
    padding: "1rem",
    minHeight: "30vh",
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: "15vw",
    },
    margin: "auto",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgb(7, 177, 77, 0.50)",
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
    overflowWrap : "break-word"
  },
});

export default useStyles;
