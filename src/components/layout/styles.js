import { makeStyles } from '@material-ui/core/styles';
// import colors from '../../themes/colors'

// import React from 'react'

const drawerWidth = 240

export default makeStyles(() => ({
  mainBg: {
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    minWidth: drawerWidth,
  },
  root: {
    display: "flex",
  },
}));
