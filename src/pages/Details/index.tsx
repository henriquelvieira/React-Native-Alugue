import React from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Feather, Ionicons } from '@expo/vector-icons';
import Stars from "react-native-stars";

import SwiperComponent from "../../components/SwiperComponent";

import styles from './styles';


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
            <View style={styles.swiperContent}> 
                <SwiperComponent />
            </View>

            <View style={styles.headerContent}> 
                <View style={{ width: '65%' }}>
                    <Text style={styles.house}>{params.name}</Text>
                </View>

                <View style={{ width: '35%' }}>
                    <Text style={styles.rating}>Avaliações</Text>   
                    <View style={{ alignItems: 'center', flexDirection: 'row'  }} >
                        <Stars 
                            default={params.rating ? params.rating : 4}
                            count={5}
                            half={true}
                            starSize={20}
                            fullStar={ <Ionicons name="md-star" size={24} style={styles.star} /> }
                            emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.star} /> }
                            halfStar={ <Ionicons name="md-star-half" size={24} style={styles.star} /> }
                        />
                    </View>                 
                </View>

            </View>

            <View style={styles.displayPrice}>
                <Text style={styles.price}>{params.price}</Text>
                {params.offer && (<Text style={styles.offer}>{params.offer}</Text>)}
            </View>

            <View>
                <Text style={styles.description}>{params.description}</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{paddingHorizontal: 15, marginTop: 35 }}
            >
                <FlatList
                    horizontal
                    data={params.images}
                    renderItem={renderImages}
                    keyExtractor={dataNew => dataNew.id}
                />                     
            </ScrollView>

        </View>
    );
};

