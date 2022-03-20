import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        paddingHorizontal: theme.PADDING_HORIZONTAL,
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        elevation: 2,
        height: 37,
        borderRadius: 10
    },
    input: {
        fontFamily: theme.FONT_FAMILY_MEDIUM,
        paddingHorizontal: 10,
        fontSize: theme.FONT_SIZE_REGULAR,
        width: '90%'
    },
});

export default styles;