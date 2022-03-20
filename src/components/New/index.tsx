<<<<<<< HEAD
import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export interface INew {
    cover: string;
    name: string;
    description: string;
    price: string;
    onPress: () => void;
};

export default function New (props: INew) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}
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
                    <Text style={styles.price}>{props.price}</Text>
                </View>
                <View style={{width: '20%'}}>
                    <Ionicons name="ios-add-circle" size={24} color="black" />
                </View>
            </View>


            
        </TouchableOpacity>
    );
};

=======
import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export interface INew {
    cover: string;
    name: string;
    description: string;
    price: string;
    onPress: () => void;
};

export default function New (props: INew) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}
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
                    <Text style={styles.price}>{props.price}</Text>
                </View>
                <View style={{width: '20%'}}>
                    <Ionicons name="ios-add-circle" size={24} color="black" />
                </View>
            </View>


            
        </TouchableOpacity>
    );
};

>>>>>>> main
