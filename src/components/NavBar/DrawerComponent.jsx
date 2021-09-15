import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginLeft: "auto",
    },

    menuIconToggle: {
      fontSize: "3rem",
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  const history = useHistory();
  const click = (click) => {
    history.push(click);
  };

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
      >
        <List>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={() => click("/")}> Home</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={() => click("/men")}> Men</ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={() => click("/women")}>
                {" "}
                Women
              </ListItemText>
            </ListItemIcon>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText onClick={() => click("/cart")}>
                Go To Cart
              </ListItemText>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon color="primary" className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
