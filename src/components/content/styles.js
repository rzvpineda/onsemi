import { makeStyles } from '@material-ui/core/styles';
import colors from '../../themes/colors';

export default makeStyles(() => ({
     
    linkBtn:{
        padding: "10px 16px",
        backgroundColor: colors.onsemiSlateBlue,
        fontSize: "16px",
        borderRadius: "8px",
        marginBottom:"10px",
        textDecoration:"none",
        color:"white",
        width: "400px",
        textAlign: "center",
        transition: "0.3s ease-in-out",
        WebkitTransition: " all 0.3s ease-in-out",
        MozTransition: " all 0.3s ease-in-out",
        OTransition: " all 0.3s ease-in-out",
        '&:hover':{
            // transition: "0.5s ease-in-out",
            // WebkitTransition: " all 0.5s ease-in-out",
            // MozTransition: " all 0.5s ease-in-out",
            // OTransition: " all 0.5s ease-in-out",
            backgroundColor: colors.onsemiOrange,
          },
    }
    // linkIcon:{
    //     fontSize: "10px",
    //     color:"white"
    // }
}))
