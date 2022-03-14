import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 230,
        marginRight: 15,
        marginBottom: 40,
        marginLeft: 3,
        opacity: .8,
        backgroundColor: '#000',
        padding: 12
    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 15,
        color: '#FFF',
    },
    description: {
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
    },
    shadow: {
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 3,
        textShadowColor: '#000',
    }

});

export default styles;