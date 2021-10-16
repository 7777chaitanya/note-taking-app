import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(4),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  outerBox: {
    maxWidth: "75vw",
    maxHeight: "80vh",
    // overflowY : "auto"
  },
  textArea: {
    // overflowY : "scroll",
    // maxHeight : "60vh"
  },

  input: {
    height: "3rem",
    width: "100%",
    fontSize: "",
  },
  noteTitleInput: {
    height: "3rem",
    fontSize: "1.5rem",
    //  color  :"green",
    width: "100%",
    //  paddingTop : "2rem",
    marginTop: "rem",
    // minHeight : "60vh"
  },
  textAreaBox: {
    // width : "100%"
    // minHeight : "60vh"
  },
  outerPaper: {

    minHeight: "80vh",
    margin: "auto",
    // backgroundColor : 'lightgray',
    paddingTop: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    [theme.breakpoints.down('md')]: {
maxWidth : "50rem"
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: "60vw",
    },
  },
}));

export default useStyles;
