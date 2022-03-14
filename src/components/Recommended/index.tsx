import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export interface IRecommended {
    cover: string;
    house: string;
    offer: string;
};

export default function Recommended (props: IRecommended) {
    return (
        <ImageBackground
            source={props.cover}
            style={styles.container}
            blurRadius={2}
        >
            <Text style={[styles.house, styles.shadow]}>{props.house}</Text>
            <Text style={[styles.description, styles.shadow]}>{props.offer}</Text>
        </ImageBackground>
    )
};