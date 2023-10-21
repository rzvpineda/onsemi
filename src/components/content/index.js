import { Container, Typography, Button } from '@mui/material'
// import { Button } from '@material-ui/core';
import React from 'react'
import makeStyles from './styles';

function Content() {
    // const customColors = {
    //     onsemiGrey: "#b6babf",
    //     onsemiOrange: "#ff7920",
    //   };
    const classes = makeStyles();

    return (
        // <Container>
        <div>
            {/* <Typography variant='h3'>
                Report Title
            </Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography> */}
            {/* <div dangerouslySetInnerHTML={{__html : 

            </div> */}
            {/* <iframe 
            className={classes.iframeCont} title="Tableua"
            width="98%"
            height="800"
            frameBorder="1"
            allow-same-origin = "true"
            // src="https://www.google.com/search?igu=1" 
            src='http://10ay.online.tableau.com/#/site/onsemi/views/PRISMCARRIERTRANSACTION/PRISMCARRIERINQUIRY?:iid=3?'
            ></iframe> */}
        </div>
        // </Container >
    )
}

export default Content