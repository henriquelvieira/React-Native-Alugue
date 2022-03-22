import React from 'react';
import { View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
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
                <View style={styles.slide} key={`view_${item.id}`}>
                    <Image 
                        source={item.cover}
                        style={styles.imageSlide}
                        key={`Image_${item.id}`}
                    />
                </View>
            ))}
        </Swiper> 
    );
};