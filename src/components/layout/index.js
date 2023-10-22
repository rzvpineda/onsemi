import React, { useState } from 'react'
import makeStyles from './styles'
import data from '../../data/report.json'
import { NavLink, Link } from "react-router-dom";
import {
    Drawer,
    // Typography,
    List,
    ListItemText,
    ListItemButton,
    Collapse,
    ListSubheader

} from '@mui/material'

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function Layout({children}) {
    const classes = makeStyles();
    const [open, setOpen] = useState();

    const handleCollapse = (index) => {
        // setOpen(!open);
        if (setOpen === index) {
            setOpen("")
        }
        if(open === index) {
            setOpen("")
        }
        else {
            setOpen(index)
        }
        // console.log(index)
    };

    return (

        // sidebar
        <div className={classes.root}>
            <Drawer
                className={classes.textColor}
                variant="permanent"
                anchor="left"
                // classes={{ paper: classes.drawerPaper }}
                PaperProps={{
                    sx: { width: "300px" },
                  }}
            >
                <ListSubheader component="div" id="nested-list-subheader" >
                   <Link to={'/'} className={classes.title}>MOS Tableau Reports </Link> 
                </ListSubheader>
                <List>
                    {data.map((reportData, index) =>
                        <>
                            <ListItemButton
                                onClick={() => handleCollapse(index)}
                                key={index}>
                                <ListItemText className={classes.icons} key={index} primary={reportData.ParentLink}>
                                    {index === open ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                                </ListItemText>
                            </ListItemButton>
                            {reportData.Reports.map((report) => (
                                <Collapse in={index === open} timeout="auto" key={report.id}>
                                    <List component="div" disablePadding className={`${classes.linkTag} `}>
                                        <ListItemButton sx={{ pl: 4 }}  >
                                            {/* <ListItemText primary={report.ReportName} /> */}
                                            <NavLink className={`${classes.linkTag} `} to={'/content/'+ report.id}>{report.ReportName}</NavLink>
                                            {/* ${classes.isAcTive} => (isAcTive ? "active" : "inactive")  */}
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            ))}
                        </>
                    )}
                </List>

            </Drawer>
            <div className={classes.mainBg}>
                {/* the children here are the modules wrap in <Layout> in app js */}
                {children}
            </div>
        </div>
    )
}

export default Layout