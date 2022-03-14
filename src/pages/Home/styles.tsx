import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    header:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20  
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    },
    scrollView: {
        paddingHorizontal: 15,
    }
});

export default styles;