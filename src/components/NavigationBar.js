import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import TimerIcon from '@material-ui/icons/Timer';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ExtensionIcon from '@material-ui/icons/Extension';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Collapse from '@material-ui/core/Collapse';
import SortingVisualizer from "../Visualizer/SortingVisualizer/SortingVisualizer";

const drawerWidth = 230;

// https://material-ui.com/components/icons/#material-icons


export default function ClippedDrawer() {
  const classes = useStyles();
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
    setMergeSortButton(!chooseMergeSort);
  };

  return (

  <div className={classes.root}>
      <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap
              style={{ 
                  fontSize: 28 
                }}>
            Algorithm Visualizer
          </Typography>
        </Toolbar>
    </AppBar>

{/* ============================= START DRAWER ========================= */}
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
    <Toolbar />
    <div className={classes.drawerContainer}>

{/* ============================= FIRST TAB ========================= */}
          <ListItem button onClick={handleClickSorting}>
                <ListItemText
                  disableTypography
                  primary={
                  <Typography 
                    style={{ 
                      fontSize: 26,
                      fontWeight: 'bold', 
                      paddingTop: '10px',
                      textAlign: 'center'
                      }}> 
                    Sorting Algorithms
                  </Typography>}
                />
                {/* {openSorting ? <ExpandLess /> : <ExpandMore />} */}
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

              <ListItem button className={classes.nested} onClick={selectMergeSort}>
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
                  <Typography 
                    style={{ 
                      fontSize: 26,
                      fontWeight: 'bold', 
                      paddingTop: '50px', 
                      textAlign: 'center'}}>
                        Pathfinding Algorithms 
                  </Typography>}
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
                    <Typography 
                      style={{ 
                        fontSize: 22, 
                        fontWeight: 'bold', 
                        paddingTop: '50px', 
                        textAlign: 'center'}}>
                          Graph Traversal Algorithms 
                    </Typography>}
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

          <main className={classes.content}>
      {/* <SortingVisualizer></SortingVisualizer> */}

      <Toolbar />
            {/* <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
              facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
              arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
              donec massa sapien faucibus et molestie ac.
            </Typography> */}
{/* 
              <div classes={classes.sortingbars}> 

                {openSorting ? <SortingVisualizer></SortingVisualizer> : <div> Hidden </div> }

              </div> */}

              <div > 

                {chooseMergeSort ? 
                <div>
                <Typography> Merge Sort </Typography>
                <SortingVisualizer></SortingVisualizer>
                </div>
                  : 
                  <div>  </div> 
                  }

              </div>

              <div > 

                {openPathfinding ? 
                <div>
                <Typography> Merge Sort </Typography>
                <SortingVisualizer></SortingVisualizer>
                </div>
                  : 
                  <div>  </div> 
                  }

              </div>

          </main>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#2a3439'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerTitle : {
    fontSize: '1'
  },
  drawerPaper: {
    width: drawerWidth,
    background: "white"
  },
  drawerContainer: {
    overflow: 'auto',    
  },
  content: {
    // flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  sortingbars: {
    position: 'relative',
    paddingTop: 100,

  },
}));