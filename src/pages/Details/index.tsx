import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Feather, Ionicons } from '@expo/vector-icons';
import Stars from "react-native-stars";

import SwiperComponent from "../../components/SwiperComponent";

import styles from './styles';


export default function Details({ route, navigation }){
    
    const { name } = route.params;

    return (
        <View style={styles.container}> 
            <View style={styles.swiperContent}> 
                <SwiperComponent />
            </View>

            <View style={styles.headerContent}> 
                <View style={{ width: '65%' }}>
                    <Text style={styles.house}>{name}</Text>
                </View>

                <View style={{ width: '35%' }}>
                    <Text style={styles.rating}>Avaliações</Text>   
                    <View style={{ alignItems: 'center', flexDirection: 'row'  }} >
                        <Stars 
                            default={4}
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

            <Text style={styles.price}>R$ 1.200,20</Text>
            <Text style={styles.description}>Casa nova uma quadra do mar, lugar seguro e monitorado 24horas.</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{paddingHorizontal: 15, marginTop: 35 }}
            >
                <View style={styles.slide}>
                    <Image 
                        source={require('../../assets/house1.jpg')}
                        style={styles.slideImage}
                    />
                </View>

                <View style={styles.slide}>
                    <Image 
                        source={require('../../assets/house2.jpg')}
                        style={styles.slideImage}
                    />
                </View>

                <View style={styles.slide}>
                    <Image 
                        source={require('../../assets/house3.jpg')}
                        style={styles.slideImage}
                    />
                </View>                                

            </ScrollView>

        </View>
    );
};

