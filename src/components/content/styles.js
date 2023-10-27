import { makeStyles } from '@material-ui/core/styles';
import colors from '../../themes/colors';

export default makeStyles(() => ({
     
    // iframeWidth: {
    //     width: "1000",
    //     height: "1000"
    // },
    // root:{
        // width: "100vw",
        // height:"100vh"
        // display:"flex",
        // flexDirection:"row"
        // marginRight:"50px !Important"
    // }
    linkBtn:{
        padding: "10px 16px",
        backgroundColor: colors.onsemiSlateGrey,
        fontSize: "16px",
        borderRadius: "8px",
        marginBottom:"10px",
        textDecoration:"none",
        color:"white",
        width: "400px",
        textAlign: "center",
        // transition: "0.5s ease-in-out",
        '&:hover':{
            // transition: "0.5s ease-in-out",
            // WebkitTransition: " all 0.5s ease-in-out",
            // MozTransition: " all 0.5s ease-in-out",
            // OTransition: " all 0.5s ease-in-out",
            backgroundColor: colors.onsemiSlateBlue,
          },
    }
    // linkIcon:{
    //     fontSize: "10px",
    //     color:"white"
    // }
}))
