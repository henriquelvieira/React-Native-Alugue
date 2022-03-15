import React from 'react';
import { Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface IRecommended {
    cover: string;
    name: string;
    offer: string;
    onPress: () => void;
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
                <Text style={[styles.house, styles.shadow]}>{props.name}</Text>
                <Text style={[styles.description, styles.shadow]}>{props.offer}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
};