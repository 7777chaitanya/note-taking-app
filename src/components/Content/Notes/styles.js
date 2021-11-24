import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  notesList: {
    flex: 3,
    borderRight: "1px solid lightgray",

    height: "99vh",
  },
  editor: {
    flex: 7,
  },
  notesListBox: {
    overflowY: "auto",
    maxHeight: "80vh",
  },
  boot: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    // margin: theme.spacing(1),
    // marginLeft : "1.6rem",
    marginLeft : "auto!important",
    marginRight : "auto!important",
    marginTop : "0.5rem!important",
    marginBottom : "0.5rem!important",

  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  noNotes:{
    paddingTop : "1rem"
  }
}));

export default useStyles;
