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
        textShadow: "#000",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
    house: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: "#4f4a4a",
    },
    price: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        paddingHorizontal: 20,
        color: '#000'
    },
    description: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        color: '#b3aeae',
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