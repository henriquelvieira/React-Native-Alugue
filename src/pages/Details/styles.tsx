import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    swiperContent: {
        flexDirection: 'row',
        height: 340,
        width: "100%",
    },
    headerContent: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        width: "100%",
        marginTop: 20,
    },
    rating: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 9,
        color: "#4f4a4a",
    },
    star: {
        color: "#E7A74e",
        backgroundColor: 'transparent',
        // textShadowColor: "#000",
        // textShadowOffset: {width: .5, height: 1},
        // textShadowRadius: 1,
    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: "#4f4a4a",
    },
    displayPrice: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    price: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
        paddingHorizontal: 20,
        color: '#000'
    },
    offer: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        paddingHorizontal: 5,
        color: 'red'
    },
    description: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        color: '#4f4a4a',
        paddingHorizontal: 20,
        lineHeight: 20,
        marginTop: 20,
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        height: 90,
        borderRadius: 8,
        marginRight: 20,
    },
    slideImage: {
        width: 90, 
        height: 90, 
        borderRadius: 8
    }
    
});

export default styles;