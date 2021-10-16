import React from "react";
import useStyles from "./styles";
import { Paper, Typography, Divider, Box } from "@material-ui/core";
import moment from "moment";
import { useHistory } from "react-router-dom";
import truncate from "../../../../utils/truncate";

const EachNoteItem = ({ noteItem }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    console.log(noteItem.id);
    history.push(`/notes/${noteItem.id}`);
  };

  return (
    <Paper elevation={5} className={classes.root} onClick={handleClick}>
      <Box className={classes.eachNoteBox}>
        <Typography variant="h5" color="primary">
          {noteItem.title}
        </Typography>
        <Divider className={classes.divider} />
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{ __html: truncate(noteItem.content) }}
        />

        <Typography variant="p" color="secondary" align="right" display="block">
          {moment(noteItem?.creationTime?.toDate()).fromNow()}
        </Typography>
      </Box>
    </Paper>
  );
};

export default EachNoteItem;
