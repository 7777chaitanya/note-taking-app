import { makeStyles } from "@material-ui/core";

const returnStyles = (darkMode) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    socialMediaLinks: {
      textDecoration: "none",
      color: "black",
    },
    active: {
      backgroundColor: darkMode ? "#95867c" : "rgb(7, 177, 77, 0.4)",
    },
    hover: {
      "&:hover": {
        backgroundColor: darkMode ? "#95867c" : "rgb(7, 177, 77, 0.4)",
      },
    },
  }));
  return useStyles;
};

export default returnStyles;
