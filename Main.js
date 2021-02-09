import React, { useContext, useState } from "react";
import useStyles from "@styles";
import AppContext from "@context";

//Material-ui
import { Drawer, Typography } from "@material-ui/core";


//self-made
import TabPanel from './Components/TabPanel';
import Header from './Components/Header';

export default function MyPlugin() {
  const classes = useStyles();
  const { context, setContext } = useContext(AppContext);

  function setState(state) {
    setContext({...context, states: {...context.states, [context.plugin]: state}})
  }



  const state = context.states[context.plugin]

  return (
    <div className={classes.root}>
      {context.currentProject ? (
        <div>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}></div>
           
            <div>
              <Header />
              <TabPanel />
            </div>
          </Drawer>{" "}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
