import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 15,
        marginLeft: 2,
        borderRadius: 10
    },
    cover: {
        borderRadius: 10,
        width: 90,
        height: 90
    },
    content: {
        width: '75%',
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: '100%'
    },
    title: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_REGULAR,
        color: theme.FONT_COLOR_PRIMARY,
        marginBottom: 10
    },
    description: {
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_FAMILY_MEDIUM,
        marginBottom: 5
    },
    price: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_FAMILY_BOLD
    },
});

export default styles;