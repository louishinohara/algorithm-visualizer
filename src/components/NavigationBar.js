import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import TimerIcon from '@material-ui/icons/Timer';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ExtensionIcon from '@material-ui/icons/Extension';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

const drawerWidth = 230;

// https://material-ui.com/components/icons/#material-icons


export default function ClippedDrawer() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
      <CssBaseline />
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap
          style={{ fontSize: 28 }}>
            Algorithm Visualizer
          </Typography>
        </Toolbar>
    </AppBar>
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
    <Toolbar />
    <div className={classes.drawerContainer}>

          <ListItem >
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
          </ListItem>

        <Divider />

          <ListItem button>
            <ListItemIcon>
                <InsertLinkIcon />
            </ListItemIcon>
                <ListItemText primary="Insertion Sort" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
                <ColorizeIcon />
            </ListItemIcon>
                <ListItemText primary="Selection Sort" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
                <MergeTypeIcon />
            </ListItemIcon>
                <ListItemText primary="Merge Sort" />
          </ListItem>
            
          <ListItem button>
            <ListItemIcon>
                <TimerIcon />
            </ListItemIcon>
                <ListItemText primary="Quick Sort" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
                <AccountTreeIcon />
            </ListItemIcon>
                <ListItemText primary="Heap Sort" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
                <BubbleChartIcon />
            </ListItemIcon>
                <ListItemText primary="Bubble Sort" />
          </ListItem>

          <ListItem>
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
          </ListItem>

          <Divider />

          <ListItem button>
            <ListItemIcon>
                <ExtensionIcon />
            </ListItemIcon>
                <ListItemText primary="Dijkstra's Algorithm" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
                <AllInclusiveIcon />
            </ListItemIcon>
                <ListItemText primary="A * Algorithm" />
          </ListItem>

          <ListItem>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography 
                      style={{ 
                        fontSize: 24, 
                        fontWeight: 'bold', 
                        paddingTop: '50px', 
                        textAlign: 'center'}}>
                          Graph Traversal Algorithms 
                    </Typography>}
                  />
          </ListItem>

          <Divider />

          <ListItem button>
            <ListItemIcon>
                <ExtensionIcon />
            </ListItemIcon>
                <ListItemText primary="Depth First Search" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
                <ExtensionIcon />
            </ListItemIcon>
                <ListItemText primary="Bredth First Search" />
          </ListItem>

    </div>
      </Drawer>

          <main className={classes.content}>

      <Toolbar />
            <Typography paragraph>
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
            </Typography>
          </main>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "black"
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
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));