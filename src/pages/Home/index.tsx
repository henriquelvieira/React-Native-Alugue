import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import FeatherIcon from '../../components/FeatherIcons';
import New from '../../components/New';


export default function Home(){

    const navigation = useNavigation();

    function handleDetails() {
        navigation.navigate('Details');
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#fff' }}
        >

            <View style={styles.header}>
                <View style={styles.inputArea} >
                    <FeatherIcon name="search" />
                    <TextInput placeholder="O que está procurando?" style={styles.input} />
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            {/* TODO: REPLACE TO FLATLIST AFTER IMPLEMENTATION OF API */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#fff'}} >
                <New 
                    cover={require('../../assets/house1.jpg')}
                    name="Casa Floripa"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="1.204,90"
                    onPress={handleDetails} 
                />

                <New
                    cover={require('../../assets/house2.jpg')} 
                    name="Casa Floripa"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="1.204,90"
                    onPress={handleDetails} 
                />

                <New
                    cover={require('../../assets/house3.jpg')}
                    name="Rancho SP"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="1.204,90"
                    onPress={handleDetails} 
                />
                                

            </ScrollView>


        </ScrollView>
    );
};

