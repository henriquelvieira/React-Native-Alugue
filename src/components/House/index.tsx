import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';


export default function House (props) {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={props.cover}
                    style={styles.cover}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.description}>{props?.description}</Text>
                <Text style={styles.price}>{props?.price}</Text>
            </View>



        </View>
    )
};