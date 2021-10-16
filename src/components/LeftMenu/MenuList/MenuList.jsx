import useStyles from "./styles";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import HomeIcon from "@material-ui/icons/Home";
import NoteIcon from "@material-ui/icons/Note";
import DeleteIcon from "@material-ui/icons/Delete";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Link } from "react-router-dom";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import NotesIcon from "@material-ui/icons/Notes";

const MenuList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/notes">
          <ListItemIcon>
            <NoteIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItem>
        <ListItem button component={Link} to="/trash">
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>

        {/* <ListItem button component={Link} to="/tags">
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary="Tags" />
        </ListItem> */}

        <ListItem button component={Link} to="/checklist">
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="Checklist" />
        </ListItem>

        <ListItem button component={Link} to="/scratchpad">
          <ListItemIcon>
            <NotesIcon />
          </ListItemIcon>
          <ListItemText primary="Scratchpad" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default MenuList;
