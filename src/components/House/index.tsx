import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface IHouse {
    cover: string;  
    description?: string;
    price?: string;
    onPress: () => void;
}


export default function House (props: IHouse) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
        >

            <Image 
                source={props.cover}
                style={styles.cover}
            />


            <View style={styles.content}>
                <Text style={styles.description}>{props?.description}</Text>
                <Text style={styles.price}>{props?.price}</Text>
            </View>



        </TouchableOpacity>
    )
};