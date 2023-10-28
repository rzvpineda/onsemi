import { makeStyles } from '@material-ui/core/styles';
import colors from '../../themes/colors';

export default makeStyles(() => ({
    footerContainer:{
        // display:"flex",
        bottom: "0",
        backgroundColor: colors.onsemiSlateBlue,
        flexDirection:"row",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        padding: "12px 12px"
        
    },
    footerLink:{
        fontSize: "16px",
        color:"white",
        padding:"12px 16px",
        textDecoration: "none",
        marginRight:"200px"
        // textAlign:"center",
    }
   
}))
