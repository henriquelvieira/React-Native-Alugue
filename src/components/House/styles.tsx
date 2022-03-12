import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 260,
        height: 70,
        backgroundColor: '#fff',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
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
        fontSize: 9,
        fontFamily: 'Montserrat_500Medium',
    },
    price: {
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',

    },
});

export default styles;