import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";

import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import Header from "componentes/header";
import Api from "services/AuthService";
import "./MenuTop.scss";
import { Divider } from "antd";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/Listitem";
import ListItemText from "@material-ui/core/ListItemText";

const user = JSON.parse(localStorage.getItem("user"));

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    backgroundColor: "#00a0dc",
    width: "100%",
    position: "absolute",
    border: "1px solid #ffffff",
  },
  tab: {
    marginLeft: "1.5em",
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 800,
    fontSize: ".9em",
    opacity: "1",
    borderRight: "1px solid",
    "&:hover": {
      color: "white",
      opacity: "1",
    },
  },
  iniReg: {
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "1px solid #ffffff",
    marginLeft: "1330px",
    color: "#ffffff",
    borderRadius: "10px",
    fontSize: ".6em",
    marginTop: "1em",
    height: "30px",
    "&:hover": {
      color: "white",
    },
  },
  menu: {
    backgroundColor: "#00a0dc",
    color: "white",
    borderRadius: "0px",
    backgroundColor: "#00a0dc",
    width: "11.25em",
    marginLeft: "-1.3em",
    marginTop: "0.3em",
    paddingTop: "-3em",
  },
  menuItem: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 800,
    fontSize: ".9em",
    opacity: 1,
    height: "3em",

    "&:hover": {
      opacity: 1,
      height: "3em",
      backgroundColor: "#00a0dc",
    },
  },
  drawerIconContainer: {
    marginRight: "25px",
    marginLeft: "300px",
    marginTop: "-5em",
    backgroundColor: "#00a0dc",
    position: "absolute",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "40px",
    width: "40px",
    color: "white",
  },
  drawer: {
    backgroundColor: "#00a0dc",
    top: "10em",
  },
  drawerItem: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 800,
    fontSize: ".9em",
    opacity: "0.7",
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: "1",
    },
  },
}));

export default function MenuTop() {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      name: "INSTITUCIONAL",
      link: "/institucional",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "¿Qué es el MPD?",
      link: "/institucional/mpd",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "¿Qué hacemos?",
      link: "/institucional/queHacemos",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "¿Dónde estamos?",
      link: "/institucional/dondeEstamos",
      activeIndex: 1,
      selectedIndex: 3,
    },
    {
      name: "Organización",
      link: "/institucional/organizacion",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "INICIO", link: "/", activeIndex: 0 },
    {
      name: "INSTITUCIONAL",
      link: "/institucional",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "ACCIONES", link: "/acciones", activeIndex: 2 },
    { name: "MIEMBROS", link: "/miembros", activeIndex: 3 },
    { name: "BIBLIOTECA", link: "/biblioteca", activeIndex: 4 },
    { name: "SALUD MENTAL", link: "/saludMental", activeIndex: 5 },
    { name: "CONTACTO", link: "/contact", activeIndex: 6 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `{$route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        indicatorColor="none"
        
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/"
        color="#D34D4C"
        className={classes.iniReg}
        onClick={() => setValue()}
      >
        Ingresar / Login
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        autoFocus={false}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            //selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <div className="menuTopContainer">
          <Header />

          {matches ? drawer : tabs}
        </div>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
