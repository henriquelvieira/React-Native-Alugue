import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

export interface IPopulares {
  cover: string;
  name: string;
  description: string;
  price: string;
  onPress: () => void;
};

export default function Populares (props: IPopulares) {
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
            <Text style={styles.title}>{props?.name}</Text>
            <Text style={styles.description}>{props?.description}</Text>
            <Text style={styles.price}>{props?.price}</Text>
        </View>
        
    </TouchableOpacity>

  );
};