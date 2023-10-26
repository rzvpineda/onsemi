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
        backgroundColor: colors.onsemiDeepGrey,
        fontSize: "16px",
        borderRadius: "8px",
        marginBottom:"10px",
        textDecoration:"none",
        color:"white"
    }
    // linkIcon:{
    //     fontSize: "10px",
    //     color:"white"
    // }
}))
