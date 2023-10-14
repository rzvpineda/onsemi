import { Container, Typography, Button } from '@mui/material'
import React from 'react'
import colors from '../../themes/colors'


function Navbar2() {
    // const customColors = {
    //     onsemiGrey: "#b6babf",
    //     onsemiOrange: "#ff7920",
    //   };
    

    return (
        <Container>
            <Typography
                variant='h2'
                component='h2'
                color={colors.onsemiGrey}>
                Navbar
            </Typography>


            <Button variant="contained" backgroundColor="primary">Contained</Button>
        </Container>
    )
}

export default Navbar2