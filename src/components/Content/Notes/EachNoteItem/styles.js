import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
root : {
    width : "100%",
    padding : "1rem",
    "&:hover": {
        cursor : "pointer",
        backgroundColor: 'rgb(7, 177, 77, 0.42)'
      },
      maxWidth : "13rem",
      overFlowX : "scroll"
},
divider:{
  margin : "0.5rem"
}
});

export default useStyles;


