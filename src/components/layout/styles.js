import { makeStyles } from '@material-ui/core/styles';
import colors from '../../themes/colors'

// import React from 'react'

const drawerWidth = 240

export default makeStyles(() => ({
  mainBg: {
    backgroundColor: "#f9f9f9",
    width: "100vw",
    height:"100vh",
    marginLeft:"15% !Important"
    // display: "flex",
    // justifyContent: "flex-start",
    // textAlign: "center",

  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    minWidth: drawerWidth,
  },
  root: {
    display: "flex",
    flexDirection:"row"
  },
  linkTag:{
    color: "#000000",
    textDecoration: "none",
    fontSize: "14px",
    // transition: "0.3s ease-in-out",
    //   WebkitTransition: " all 0.3s ease-in-out",
    //   MozTransition: " all 0.3s ease-in-out",
    //   OTransition: " all 0.3s ease-in-out",
    '&:hover':{
      // paddingLeft:"10px",
      backgroundColor: `${colors.onsemiSlateBlue} !important`,
      transition: "0.3s ease-in-out",
      WebkitTransition: " all 0.3s ease-in-out",
      MozTransition: " all 0.3s ease-in-out",
      OTransition: " all 0.3s ease-in-out",
      fontWeight:"600",
      color: "white",
      borderLeft: "5px solid #ff7920",
      BoxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    '&.active':{
      // paddingLeft:"10px",
      fontWeight:"600",
      color: "white",
      borderLeft: "5px solid #ff7920",
      backgroundColor: colors.onsemiSlateBlue ,
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
