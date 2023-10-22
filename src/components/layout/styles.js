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
  linkTag:{
    color: "#000000",
    textDecoration: "none",
    fontSize: "14px",
    transition: "0.5s ease-in-out",
      WebkitTransition: " all 0.5s ease-in-out",
      MozTransition: " all 0.5s ease-in-out",
      OTransition: " all 0.5s ease-in-out",
    '&:hover':{
      paddingLeft:"10px",
      transition: "0.5s ease-in-out",
      WebkitTransition: " all 0.5s ease-in-out",
      MozTransition: " all 0.5s ease-in-out",
      OTransition: " all 0.5s ease-in-out"
    },
    '&.active':{
      paddingLeft:"10px",
      fontWeight:"600",
      color:"#7A7A7A"
    }
  },
  icons:{
    color:"#000000"
  },
  title:{
    color: "#000000",
    textDecoration: "none",
    fontWeight:"800",
    fontSize:"1.2rem",
    display: "flex",
    justifyContent:"center",
    textAlign:"center"
  },
  textColor:{
    color:"#6c757d"
  }
}));
