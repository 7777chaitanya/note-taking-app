import { makeStyles } from "@material-ui/core";

const returnStyles = (darkMode) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      padding: "1rem",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "rgb(7, 177, 77,0.50)",
        // backgroundColor : "rgb(220,220,220)",
        backgroundColor: darkMode ? "#95867c" : "rgb(7, 177, 77,0.4)",

      },
      maxWidth: "13rem",
      overFlowX: "scroll",
    },
    divider: {
      margin: "0.5rem",
    },
    eachNoteBox: {
      overflowWrap: "break-word",
    },
  });
  return useStyles;
};

export default returnStyles;
