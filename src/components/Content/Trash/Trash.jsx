import { Typography, Box, Divider } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import HomeNotesGrid from "./HomeNotesGrid/HomeNotesGrid";

const Home = () => {
    const classes = useStyles();

  return (
    <div>
      <Box className={classes.homeHeader}>
        <Typography variant="h4" color="primary" display="inline">
          TrashNotes
        </Typography>
        <Typography variant="body1" display="inline">
          {new Date().toDateString()}
        </Typography>
      </Box>

      <Divider className={classes.headerDivider}/>

      <HomeNotesGrid/>
    </div>
  );
};

export default Home;
