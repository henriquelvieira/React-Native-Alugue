import React from 'react';
import { Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface IRecommended {
    cover: string;
    house: string;
    offer: string;
    onPress: () => {};
};

export default function Recommended (props: IRecommended) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <ImageBackground
                source={props.cover}
                style={styles.container}
                blurRadius={2}
            >
                <Text style={[styles.house, styles.shadow]}>{props.house}</Text>
                <Text style={[styles.description, styles.shadow]}>{props.offer}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
};