import React from 'react';
import { View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';
import styles from './styles';


export default function SwiperComponent (props) {

    return (
        <Swiper
            style={styles.wrapper}
            dotStyle={[styles.dot, { backgroundColor: '#000' }] }
            activeDotColor="#FFF"
            activeDotStyle={[styles.dot, { backgroundColor: '#FFF' }] }
            autoplay
            autoplayTimeout={5}
        >
            {props.swipers.map((item) => (
                <View style={styles.slide}>
                    <Image 
                        source={item.cover}
                        style={styles.imageSlide}
                    />
                </View>
            ))}
        </Swiper> 
    );
};