import { Container, Typography } from '@mui/material'
import { Button } from '@material-ui/core';
import React from 'react'
import useStyles from './styles';

function Navbar() {
    // const customColors = {
    //     onsemiGrey: "#b6babf",
    //     onsemiOrange: "#ff7920",
    //   };
    const classes = useStyles();

    return (
        <Container>
            <Typography
                variant='h2'
                component='h2'
                className={classes.navbarHeader}>
                Navbar
            </Typography>

            <Button variant="contained" className={classes.navbarBtn}>Contained</Button>
            <Button className={classes.navbarBtn}>Sample btn</Button>
        </Container>
    )
}

export default Navbar