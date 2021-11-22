import returnStyles from "./styles";
import React, { useState, useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import HomeIcon from "@material-ui/icons/Home";
import NoteIcon from "@material-ui/icons/Note";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import NotesIcon from "@material-ui/icons/Notes";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import clsx from "clsx";

const MenuList = () => {
  const { darkMode } = useContext(DarkModeContext);
  const classes = returnStyles(darkMode)();
  const [currentTab, setCurrentTab] = useState("home");

  const handleActiveTab = (value) => {
    setCurrentTab(value);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          component={Link}
          to="/"
          onClick={() => handleActiveTab("home")}
          className={clsx(currentTab === "home" && classes.active, classes.hover)}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/notes"
          onClick={() => handleActiveTab("notes")}
          className={clsx(currentTab === "notes" && classes.active, classes.hover)}
        >
          <ListItemIcon>
            <NoteIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/trash"
          onClick={() => handleActiveTab("trash")}
          className={clsx(currentTab === "trash" && classes.active, classes.hover)}
        >
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

        <ListItem
          button
          component={Link}
          to="/checklist"
          onClick={() => handleActiveTab("checklist")}
          className={clsx(currentTab === "checklist" && classes.active, classes.hover)}
        >
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="Checklist" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/scratchpad"
          onClick={() => handleActiveTab("scratchpad")}
          className={clsx(currentTab === "scratchpad" && classes.active, classes.hover)}
        >
          <ListItemIcon>
            <NotesIcon />
          </ListItemIcon>
          <ListItemText primary="Scratchpad" />
        </ListItem>
        <Divider />
        <a
          href="https://github.com/Chaitanya7666"
          target="_blank"
          className={classes.socialMediaLinks}
        >
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
        </a>

        <a
          href="https://www.linkedin.com/in/chaitanya-j-1799791b4/"
          target="_blank"
          className={classes.socialMediaLinks}
        >
          <ListItem button>
            <ListItemIcon>
              <LinkedInIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Linkedin" />
          </ListItem>
        </a>

        <a
          href="https://twitter.com/chaitanya7666"
          target="_blank"
          className={classes.socialMediaLinks}
        >
          <ListItem button>
            <ListItemIcon>
              <TwitterIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
        </a>
      </List>
    </div>
  );
};

export default MenuList;
