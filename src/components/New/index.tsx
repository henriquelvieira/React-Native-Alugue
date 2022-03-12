import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';


export default function New (props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.container}
        >
            <Image source={props.cover} style={styles.cover} />

            <View style={styles.content}>
                <Text style={styles.title}>{props.name}</Text>
                <View style={styles.dot} />
                <Text style={styles.badge}>Novo</Text>
            </View>

            <Text style={styles.description}>{props.description}</Text>

            <View style={styles.footer}>
                <View style={{width: '80%'}}>
                    <Text style={styles.price}>R$ {props.price}</Text>
                </View>
                <View style={{width: '20%'}}>
                    <Ionicons name="ios-add-circle" size={24} color="black" />
                </View>
            </View>


            
        </TouchableOpacity>
    );
};

