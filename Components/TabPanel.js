import React, {useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles , useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AppContext from "@context";


//material-ui


//self-created
import Chart from './Chart.js'
import Configuration from './Configuration.js';
import Query from './Query.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
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
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    width: '100%',
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const theme = useTheme();
  const { context, setContext } = useContext(AppContext);
  const [value, setValue] = React.useState('Results');

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
          <Tab value="Results" label="Results" wrapped {...a11yProps("Results")} />
          <Tab value="Query" label="Query" {...a11yProps("Query")} />
          <Tab value="Chart" label="Chart" {...a11yProps("Chart")} />
        </Tabs>
      </AppBar>

      {/* ###########################################################
TAB 1 Content: Results
########################################################### */}

      <TabPanel value={value} index="Results" dir={theme.direction}>
        <Configuration />
      </TabPanel>

      {/* ###########################################################
TAB 2 Content: Query
########################################################### */}

      <TabPanel value={value} index="Query"dir={theme.direction} >
        <Query />
      </TabPanel>

      {/* ###########################################################
TAB 3 Content: Chart
########################################################### */}

      <TabPanel value={value} index="Chart"dir={theme.direction} >
        <Chart />
      </TabPanel>
    </div>
  );
}
