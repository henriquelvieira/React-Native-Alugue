import { StyleSheet } from 'react-native';

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