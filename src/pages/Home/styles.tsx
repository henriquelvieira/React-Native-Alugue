import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
    },
    search: {
        flexDirection: 'row',
        paddingHorizontal: theme.PADDING_HORIZONTAL,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20  
    },
    content: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    contentMargin: {
        marginBottom: 10, 
        marginTop: 20 
    },
    title: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_LARGE,
        color: theme.FONT_COLOR_PRIMARY,
        paddingHorizontal: theme.PADDING_HORIZONTAL,
    },
    scrollView: {
        paddingHorizontal: theme.PADDING_HORIZONTAL
    }
});

export default styles;