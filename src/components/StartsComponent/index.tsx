import React from 'react';
import Stars from "react-native-stars";
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export interface IStartsComponent {
    rating?: number;  
}

export default function StartsComponent (props: IStartsComponent) {
    return (
        <Stars 
            default={props.rating ? props.rating : 4}
            count={5}
            half={true}
            starSize={20}
            fullStar={ <Ionicons name="md-star" size={24} style={styles.star} /> }
            emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.star} /> }
            halfStar={ <Ionicons name="md-star-half" size={24} style={styles.star} /> }
        />
    );
};