import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    socialMediaLinks:{
      textDecoration : "none", 
      color  :"black"
    }
  }));

export  default useStyles;