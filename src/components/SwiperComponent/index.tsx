import React from 'react';
import { View, Image, FlatList , Text} from 'react-native';
import Swiper from 'react-native-swiper';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';
import styles from './styles';


export default function SwiperComponent (props) {

    const renderSwipers = ({ item }) => (
        
        <View style={styles.slide}>
            <Image 
                source={item.cover}
                // source={require('../../assets/house3.jpg')}
                style={styles.imageSlide}
            />
        </View>
      );
    
    return (

        // <SwiperFlatList
        //     style={styles.wrapper}
        //     autoplay
        //     autoplayDelay={2}
        //     autoplayLoop
        //     index={2}
        //     showPagination
        //     data={props.swipers}
        //     renderItem={renderSwipers}
        //     />
        
        <Swiper
            style={styles.wrapper}
            dotStyle={[styles.dot, { backgroundColor: '#000' }] }
            activeDotColor="#FFF"
            activeDotStyle={[styles.dot, { backgroundColor: '#FFF' }] }
            // autoplay
        >

            {/* <FlatList
                data={props.swipers}
                renderItem={renderSwipers}
                keyExtractor={dataNew => dataNew.id}
            />   */}

            <View style={styles.slide}>
                <Image 
                    source={require('../../assets/house1.jpg')}
                    style={styles.imageSlide}
                />
            </View>
            <View style={styles.slide}>
                <Image 
                    source={require('../../assets/house2.jpg')}
                    style={styles.imageSlide}
                />
            </View>
            <View style={styles.slide}>
                <Image 
                    source={require('../../assets/house3.jpg')}
                    style={styles.imageSlide}
                />
            </View> 
            
        </Swiper> 
    );
};