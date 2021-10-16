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
  },
  textAreaBox: {
    //  marginTop : "8rem"
  },
  outerPaper: {
    maxWidth: "60vw",
    minHeight: "80vh",
    margin: "auto",
    // backgroundColor : 'lightgray',
    paddingTop: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));

export default useStyles;
