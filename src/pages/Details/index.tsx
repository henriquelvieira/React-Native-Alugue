import React from "react";
import { Text, View } from "react-native";


export default function Details({ route, navigation }){
    
    const { name } = route.params;

    return (
        <View>
            <Text>Detail</Text>
            <Text>{name}</Text>
        </View>
    );
};

