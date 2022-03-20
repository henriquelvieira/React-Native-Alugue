<<<<<<< HEAD
import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY
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
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_SMALL,
        color: theme.FONT_COLOR_PRIMARY,
    },
    house: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_LARGE,
        color: theme.FONT_COLOR_PRIMARY,
    },
    displayPrice: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    price: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_MEDIUM,
        paddingHorizontal: 20,
        color: theme.FONT_COLOR_SECONDARY
    },
    offer: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_MEDIUM,
        paddingHorizontal: 5,
        color: 'red'
    },
    description: {
        fontFamily: theme.FONT_FAMILY_MEDIUM,
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: theme.FONT_COLOR_PRIMARY,
        paddingHorizontal: 20,
        lineHeight: 20,
        marginTop: 20,
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        height: 90,
        borderRadius: theme.BORDER_RADIUS,
        marginRight: 20,
    },
    slideImage: {
        width: 90, 
        height: 90, 
        borderRadius: theme.BORDER_RADIUS
    }
    
});

=======
import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY
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
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_SMALL,
        color: theme.FONT_COLOR_PRIMARY,
    },
    house: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_LARGE,
        color: theme.FONT_COLOR_PRIMARY,
    },
    displayPrice: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    price: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_MEDIUM,
        paddingHorizontal: 20,
        color: theme.FONT_COLOR_SECONDARY
    },
    offer: {
        fontFamily: theme.FONT_FAMILY_BOLD,
        fontSize: theme.FONT_SIZE_MEDIUM,
        paddingHorizontal: 5,
        color: 'red'
    },
    description: {
        fontFamily: theme.FONT_FAMILY_MEDIUM,
        fontSize: theme.FONT_SIZE_MEDIUM,
        color: theme.FONT_COLOR_PRIMARY,
        paddingHorizontal: 20,
        lineHeight: 20,
        marginTop: 20,
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
        height: 90,
        borderRadius: theme.BORDER_RADIUS,
        marginRight: 20,
    },
    slideImage: {
        width: 90, 
        height: 90, 
        borderRadius: theme.BORDER_RADIUS
    }
    
});

>>>>>>> main
export default styles;