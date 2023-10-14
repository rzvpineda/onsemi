import { Container, Typography, Button } from '@mui/material'
// import { Button } from '@material-ui/core';
import React from 'react'
import makeStyles from './styles';

function Navbar() {
    const customColors = {
        onsemiGrey: "#b6babf",
        onsemiOrange: "#ff7920",
      };
    const classes = makeStyles();

    return (
        <Container>
            <Typography
                variant='h2'
                component='h2'
            // className={classes.navbarHeader}
            >
                Navbar
            </Typography>
            <Typography
                variant='h3'
                component='h3'
                color="success"
            className={`${classes.navTitle} ${classes.navParag}`}
            >
                Navbar2
            </Typography>

            {/* <Button variant="contained" color='primary' className={classes.navbarBtn}>Contained</Button> */}
            {/* <Button className={classes.navbarBtn}>Sample btn</Button> */}
            <Button variant="contained" color="success">Sample btn</Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
            <Button variant="contained" color="primary">
                primary
            </Button>
        </Container >
    )
}

export default Navbar