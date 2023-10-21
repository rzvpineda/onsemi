import { makeStyles } from '@material-ui/core/styles';
import colors from '../../themes/colors';

export default makeStyles(() => ({
    navbarHeader: {
        color: "blue"
    },
    navbarBtn: {
        "background-color": colors.onsemiDeepGrey
    },
    navTitle: {
        "background-color": colors.onsemiDeepGrey
    },
    navParag: {
        "color": colors.onsemiGrey
    },
    iframeWidth: {
        "width": "1000",
        "height": "1000"
    }
}))
