import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';


export default function SwiperComponent () {
    return (
        <Swiper
            style={styles.wrapper}
            dotStyle={[styles.dot, { backgroundColor: '#000' }] }
            activeDotColor='#FFF'
            activeDotStyle={styles.dot}
            autoplay
        >
            <View style={styles.slide}>
                <Image 
                    source={require('../../assets/house1.jpg')}
                    style={styles.imageSlide}
                />
            </View>
            
        </Swiper> 
    );
};