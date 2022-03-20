import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 260,
        height: 70,
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
        width: 60,
        height: 60
    },
    content: {
        width: '75%',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        height: '100%'

    },
    description: {
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_FAMILY_MEDIUM,
    },
    price: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_FAMILY_BOLD
    },
});

export default styles;