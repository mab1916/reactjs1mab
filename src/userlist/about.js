import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Question 1" {...a11yProps(0)} />
          <Tab label="Question 2" {...a11yProps(1)} />
          <Tab label="Question 3" {...a11yProps(2)} />
          <Tab label="Question 4" {...a11yProps(3)} />
          <Tab label="Question 5" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h3>How Many Training Programs are there?</h3>
        <p>
            It Contains 2 Training Programs.
            <ul>
                <li>Web and Mobile App Development.</li>
                <li>Graphic Design.</li>
            </ul>
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h3>How many students are allow to Enter on these Training Programs?</h3>
        <p>Maximum 4000 Students are allowed to Enter in it.</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3>What is the Fees for Registration?</h3>
        <p>There is no Registration Fees.</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h3>What is Monthly Fees for these Training Programs?</h3>
        <p>There is also no Monthly Fees for Training Programs as well it is totally Free.</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h3>What is the Duration of all Training Programs?</h3>
        <p>
            <ul>
                <li>6 Months for Web and Mobile App Development</li>
                <li>3 Months for Graphic Design</li>
            </ul>
        </p>
      </TabPanel>
    </div>
  );
}
