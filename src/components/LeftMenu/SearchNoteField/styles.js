import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  navbarLogo: {
    height: "5rem",
    width: "5rem",
  },
  outerBox:{
    display : "flex",
    flexDirection : 'column',
    alignItems : "center",
    justifyContent : 'center'
  }
}));

export default useStyles;
