import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Feather, Ionicons } from '@expo/vector-icons';

import styles from './styles';


export default function Details({ route, navigation }){
    
    const { name } = route.params;

    return (
        <View style={styles.container}> 
            <View style={styles.swiperContent}> 
            </View>
            <Text>Detail</Text>
            <Text>{name}</Text>
        </View>
    );
};

