import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}



export default function SortingHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

          <Typography
            variant="h2"
            style={{
              fontWeight: "lighter",
              color: "black",
              marginTop: 20,
              letterSpacing: "7px",
              padding: "10px",
            }}
          >
            Sorting Algorithms
          </Typography>

          {/* <AppBar position="static" color="transparent"> */}
            {/* <TabPanel value={value} index={0}>
              Insertion Sort
            </TabPanel>
            <TabPanel value={value} index={1}>
              Selection Sort
            </TabPanel>
            <TabPanel value={value} index={2}>
              Merge Sort
            </TabPanel>
            <TabPanel value={value} index={3}>
              Quick Sort
            </TabPanel>
            <TabPanel value={value} index={4}>
              Heap Sort
            </TabPanel>
            <TabPanel value={value} index={5}>
              Bubble Sort
            </TabPanel> */}
            <Tabs
              centered
              value={value}
              onChange={handleChange}
              indicatorColor="black"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Insertion Sort" {...a11yProps(0)} />
              <Tab label="Selection Sort" {...a11yProps(1)} />
              <Tab label="Merge Sort" {...a11yProps(2)} />
              <Tab label="Quick Sort" {...a11yProps(3)} />
              <Tab label="Heap Sort" {...a11yProps(4)} />
              <Tab label="Bubble Sort" {...a11yProps(5)} />
            </Tabs>
          {/* </AppBar> */}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));