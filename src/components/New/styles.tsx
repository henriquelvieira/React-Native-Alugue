import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        height: 250,
        width: 200,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 15,
        marginLeft: 2,
        marginBottom: 5
    },
    cover: {
        width: 170,
        height: 110,
        borderRadius: 10,
    },   
    content:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_REGULAR,
        color: theme.FONT_COLOR_PRIMARY,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: "red",
        marginHorizontal: 4
    },
    badge: {
        color: 'red',
        fontSize: theme.FONT_SIZE_SMALL,
        fontFamily: theme.FONT_FAMILY_BOLD,
    },
    description: {
        fontFamily: theme.FONT_FAMILY_REGULAR,
        fontSize: theme.FONT_SIZE_SMALL,
        color: theme.FONT_COLOR_PRIMARY,
    },
    footer:{
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        width: '100%'
    },
    price: {
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontFamily: theme.FONT_FAMILY_BOLD,
    }
});

export default styles;