import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    "&$selected": {
      background: "#f5faf7!important",
      color: "#008d35!important",
      "& .MuiTypography-body1": {
        fontWeight: "600 !important"
      }
    }
  },
  selected: {},
  drawer: {
    width: "15%",
    minWidth: 160,
    position: "fixed",
    "& .MuiPaper-root": {
      marginTop: "inherit",
      "& .MuiList-root": {
        color: "#7b7b7b",
        borderTop: "1px solid #d3d3d3"
      },
      "& .MuiTypography-body1": {
        fontFamily: "SF Pro Display",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "17px",
        "&$selected": {
          color: "#008d35!important"
        }
      },
      "& .MuiListItem-button": {
        padding: "20px !important",
        // padding: "inherit !important",
        display: "block",
        textAlign: "center",
        "& .MuiListItemIcon-root": {
          color: "inherit",
          minWidth: "30px"
        }
      }
    }
  },
  drawerPaper: {
    width: "inherit",
    paddingTop: "inherit"
  },
  icon: {
    filter: "contrast(0)"
  },
  selectedIcon: {
    filter:
      "invert(50%) sepia(98%) saturate(6368%) hue-rotate(142deg) brightness(95%) contrast(101%)"
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory();
  const extras = useSelector((state) => state.menuReducer.extras);
  if (extras) {
    const { categories } = extras;
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return (
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          {categories &&
            Object.keys(categories).map((item, index) => (
              <ListItem
                button
                key={item}
                component={Link}
                to={item.toLowerCase()}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
                classes={{ root: classes.root, selected: classes.selected }}
              >
                <ListItemIcon
                  className={
                    selectedIndex === index
                      ? classes.selectedIcon
                      : classes.icon
                  }
                >
                  <img
                    style={{ width: "75px" }}
                    src={categories[item].icon}
                    alt={item}
                  />
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}
        </List>
      </Drawer>
    );
  }
  history.replace("/");
  return null;
};

export default Sidebar;
