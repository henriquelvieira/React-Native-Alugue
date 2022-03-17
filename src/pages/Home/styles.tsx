import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        alignItems: "center",
        justifyContent: "center",
    },
    header:{
        flexDirection: 'row',
        paddingHorizontal: theme.PADDING_HORIZONTAL,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20  
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        paddingHorizontal: theme.PADDING_HORIZONTAL,
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_LARGE,
        color: theme.FONT_COLOR_PRIMARY
    },
    scrollView: {
        paddingHorizontal: theme.PADDING_HORIZONTAL
    }
});

export default styles;