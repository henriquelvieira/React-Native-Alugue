import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import SwiperComponent from "../../components/SwiperComponent";
import StartsComponent from "../../components/StartsComponent";

import styles from './styles';

interface IRenderImages {
    cover: string;  
};

//TODO: Replaces SwiperComponent for yarn add react-native-swiper-flatlist

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
        <View style={styles.container}> 
            
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

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{paddingHorizontal: 15, marginTop: 35 }}
                data={params.images}
                renderItem={renderImages}
                keyExtractor={dataNew => dataNew.id}
            />                     

        </View>
    );
};

