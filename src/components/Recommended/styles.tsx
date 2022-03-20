import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 230,
        marginRight: 15,
        marginBottom: 40,
        marginLeft: 3,
        opacity: .8,
        padding: 12,
        backgroundColor: '#000'
    },
    house: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: '#FFF',
    },
    description: {
        fontSize: theme.FONT_SIZE_REGULAR,
        fontFamily: theme.FONT_FAMILY_BOLD,
        color: '#FFF',
    },
    shadow: {
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 3,
        textShadowColor: '#000',
    }

});

export default styles;