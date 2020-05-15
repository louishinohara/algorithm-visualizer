import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Drawer,
  IconButton,
  Divider,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MergeTypeIcon from "@material-ui/icons/MergeType";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import TimerIcon from "@material-ui/icons/Timer";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import ColorizeIcon from "@material-ui/icons/Colorize";
import ExtensionIcon from "@material-ui/icons/Extension";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import GitHubIcon from "@material-ui/icons/GitHub";

const drawerWidth = 240;

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSorting, setOpenSorting] = React.useState(true);
  const [openPathfinding, setOpenPathfinding] = React.useState(false);
  const [openGraphTraversal, setOpenGraphTraversal] = React.useState(false);
  const [chooseMergeSort, setMergeSortButton] = React.useState(true);

  const handleClickSorting = () => {
    setOpenSorting(!openSorting);
  };

  const handleClickPathfinding = () => {
    setOpenPathfinding(!openPathfinding);
  };

  const handleClickGraphTraversal = () => {
    setOpenGraphTraversal(!openGraphTraversal);
  };

  const selectMergeSort = () => {
    console.log("a");
    setMergeSortButton(!chooseMergeSort);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const btnClick = () => {
    window.open("https://github.com/louishinohara/algorithm-visualizer");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            Algorithm Visualization
          </Typography>
          <div className={classes.grow} />

          <IconButton color="inherit" onClick={btnClick}>
            <GitHubIcon style={{ fontSize: 35 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />

      {/* ============================= START DRAWER ========================= */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <div className={classes.drawerContainer}>
          {/* ============================= FIRST TAB ========================= */}
          <ListItem button onClick={handleClickSorting}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.drawerText}>Sorting</Typography>
              }
            />
          </ListItem>

          <Divider />

          <Collapse in={openSorting} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <InsertLinkIcon />
                </ListItemIcon>
                <ListItemText primary="Insertion Sort" />
              </ListItem>

              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ColorizeIcon />
                </ListItemIcon>
                <ListItemText primary="Selection Sort" />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                onClick={selectMergeSort}
              >
                <ListItemIcon>
                  <MergeTypeIcon />
                </ListItemIcon>
                <ListItemText primary="Merge Sort" />
              </ListItem>

              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <TimerIcon />
                </ListItemIcon>
                <ListItemText primary="Quick Sort" />
              </ListItem>

              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText primary="Heap Sort" />
              </ListItem>

              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BubbleChartIcon />
                </ListItemIcon>
                <ListItemText primary="Bubble Sort" />
              </ListItem>
            </List>
          </Collapse>

          {/* ============================= SECOND TAB ========================= */}

          <ListItem onClick={handleClickPathfinding}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.drawerText}>
                  Pathfinding
                </Typography>
              }
            />
            {/* {openPathfinding ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <Divider />

          <Collapse in={openPathfinding} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ExtensionIcon />
                </ListItemIcon>
                <ListItemText primary="Dijkstra's Algorithm" />
              </ListItem>

              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <AllInclusiveIcon />
                </ListItemIcon>
                <ListItemText primary="A * Algorithm" />
              </ListItem>
            </List>
          </Collapse>

          {/* ============================= THIRD TAB ========================= */}
          <ListItem onClick={handleClickGraphTraversal}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.drawerText}>
                  Graph Traversal
                </Typography>
              }
            />
            {/* {openGraphTraversal ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>

          <Divider />

          <Collapse in={openGraphTraversal} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ExtensionIcon />
                </ListItemIcon>
                <ListItemText primary="Depth First Search" />
              </ListItem>

              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <ExtensionIcon />
                </ListItemIcon>
                <ListItemText primary="Bredth First Search" />
              </ListItem>
            </List>
          </Collapse>
        </div>
      </Drawer>

      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
For Sorting
        <div>
          {openSorting ? (
            <div>
              <SortingVisualizer></SortingVisualizer>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
For Pathfinding
        <div>
          {openPathfinding ? (
            <div>
              <Typography> Dijsktra </Typography>

              <PathFindingVisualizer></PathFindingVisualizer>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </main> */}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#333333",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

    marginLeft: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerText: {
    fontSize: 18,
    fontWeight: "bold",
    // paddingTop: "50px",
    textAlign: "center",
  },
  drawerTitle: {
    fontSize: "1",
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerHeaderTitle: {
    display: "flex",
    flexDirection: "row",
  },

  grow: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    display: "flex",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));
