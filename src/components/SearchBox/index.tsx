<<<<<<< HEAD
import React from 'react';
import { View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import FeatherIcon from '../FeatherIcon/index';
import styles from './styles';

export interface ISearchBox {
    placeholder?: string;  
}

export default function SearchBox (props: ISearchBox) {
    return (
        <View style={styles.inputArea} >
            <FeatherIcon name="search" />
            <TextInput 
                placeholder= {props.placeholder && props.placeholder} 
                style={styles.input} 
            />
        </View>
    );
=======
import React from 'react';
import { View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import FeatherIcon from '../FeatherIcon/index';
import styles from './styles';

export interface ISearchBox {
    placeholder?: string;  
}

export default function SearchBox (props: ISearchBox) {
    return (
        <View style={styles.inputArea} >
            <FeatherIcon name="search" />
            <TextInput 
                placeholder= {props.placeholder && props.placeholder} 
                style={styles.input} 
            />
        </View>
    );
>>>>>>> main
};