import React, { useState } from 'react'
import makeStyles from './styles'
import data from '../../data/report.json'
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



function Layout({ children }) {
    const classes = makeStyles();
    const [open, setOpen] = useState();

    const handleCollapse = (index) => {
        // setOpen(!open);
        if (setOpen === index) {
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
                // className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <ListSubheader component="div" id="nested-list-subheader">
                    MOS Tableau Reports
                </ListSubheader>
                <List>
                    {data.map((reportData, index) =>
                        <>
                        {/* <Route path="/searched/:search" element={<Searched />} /> */}
                            <ListItemButton
                                onClick={() => handleCollapse(index)}
                                key={reportData.ParentLink}>
                                <ListItemText primary={reportData.ParentLink}>{index === open ? <ExpandLessIcon /> : <ExpandMoreIcon />}</ListItemText>
                            </ListItemButton>
                            {reportData.Reports.map((report) => (
                                <Collapse in={index === open} timeout="auto" key={report.id}>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}  >
                                            <ListItemText noWrap primary={report.ReportName} />
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