import React from "react";
import { Text, View, Image, FlatList, SafeAreaView } from "react-native";
// import ImageViewer from 'react-native-image-zoom-viewer';

import SwiperComponent from "../../components/SwiperComponent";
import StartsComponent from "../../components/StartsComponent";

import styles from './styles';

interface IRenderImages {
    cover: string;  
};

const images = [{
    // Simplest usage.
    url: 'https://developerplus.com.br/wp-content/uploads/2021/10/react_native_logo.png',
 
    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance
 
    // You can pass props to <Image />.
    props: {
        // headers: ...
    }
}, {
    url: '',
    props: {
        // Or you can set source directory.
        source: require('../../assets/house1.jpg')
    }
}];


export default function Details({ route, navigation }){
    
    const params = route.params; //Paramentros enviados pela Home

    const renderImages = ({ item }) => (
        <View style={styles.slide}>
            <Image 
                source={item.cover}
                style={styles.slideImage}

            />
        </View>  
      );

    return (
        <SafeAreaView style={styles.container}> 
            
            {params.images.length > 0 && (
                <View style={styles.swiperContent}> 
                    <SwiperComponent 
                        swipers={params.images}
                    />
                </View>
                )
            }

            <View style={styles.headerContent}> 
                <View style={{ width: '65%' }}>
                    <Text style={styles.house}>{params.name}</Text>
                </View>

                <View style={{ width: '35%' }}>
                    <Text style={styles.rating}>Avaliações</Text>   
                    <View style={{ alignItems: 'center', flexDirection: 'row'  }} >
                        <StartsComponent 
                            rating={params.rating}
                        />
                    </View>                 
                </View>
            </View>

            <View style={styles.displayPrice}>
                <Text style={styles.price}>{params?.price}</Text>
                <Text style={styles.offer}>{params?.offer}</Text>
            </View>

            <View>
                <Text style={styles.description}>{params?.description}</Text>
            </View>

            {/* <Modal 
                visible={false} 
                transparent={true}
            >
                <ImageViewer imageUrls={images} />
            </Modal> */}

            {/*PHOTO'S GALLERY */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{paddingHorizontal: 15, marginTop: 35 }}
                data={params.images}
                renderItem={renderImages}
                keyExtractor={dataNew => dataNew.id}
            />    

        </SafeAreaView>
    );
};

