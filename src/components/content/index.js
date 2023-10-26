import { Typography, Container } from '@mui/material'
// import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import makeStyles from './styles';
import { useParams } from 'react-router-dom'
import data from '../../data/report.json'
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Content() {
    let params = useParams();
    const classes = makeStyles();
    // const [reportResult, setReportResult] = useState([])

    useEffect(() => {
        // getReport(params.type);
        // console.log(params.type)
    }, [params.type])


    var filtered = data.reduce((result, item) => result.concat(item.Reports), []).filter(report => report.id === params.type);
    // console.log(filtered[0]);

    return (
        <Container maxWidth="xl">
            <Typography variant='h3' sx={{ marginBottom: '10px' }}>
                {filtered[0].ReportName}
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: '10px' }}>
                {filtered[0].ReportDetails}
            </Typography>
            <Link className={classes.linkBtn} target="_blank" to={filtered[0].ReportLink} >View Full Page</Link>
            <p></p>
            <div dangerouslySetInnerHTML={{
                __html: `
                    <iframe
                    className=${classes.iframeCont} title="Tableau"
                    width="100%"
                    height="800"
                    frameBorder="1"
                    allowfullscreen
                    src="${filtered[0].ReportLink}"
                    ></iframe>`
            }}>
            </div>

            {/* <iframe
                className={classes.iframeCont} title="Tableua"
                width="100%"
                height="800"
                frameBorder="1"
                allowfullscreen
                // allow-same-origin="true"
                // src="https://www.google.com/search?igu=1" 
                src={filtered[0].ReportLink}
            ></iframe> */}

            {/* <Embed src={filtered[0].ReportLink} width="100%" height="800px" /> */}
        </Container>
    )
}

export default Content