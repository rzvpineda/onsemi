import React from 'react'
import { Paper, Container, Box } from '@mui/material'
import makeStyles from './styles'
import { Link } from 'react-router-dom';

function Footer() {
    const classes = makeStyles();
    return (

        <Paper
            sx={{
                // marginTop: 'calc(10% + 60px)',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                marginTop: 'auto'
            }}
        >

            <div className={classes.footerContainer}>
                <Link className={classes.footerLink} to="mailto:PH-OSPI Tarlac-IT CIM <PH-OSPI_Tarlac-IT_CIM@onsemi.com>">Tarlac IT MOS </Link>
            </div>
        </Paper>

    )
}

export default Footer