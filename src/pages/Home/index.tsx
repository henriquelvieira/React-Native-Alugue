import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import FeatherIcon from '../../components/FeatherIcons';
import New from '../../components/New';
import House from '../../components/House';


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
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
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

            <View style={[styles.contentNew, { marginBottom: 10, marginTop: 20 }]}>
                <Text style={styles.title}>Próximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView} >
                <House 
                    cover={require('../../assets/house4.jpg')}
                    description="Casa para você morar, casa show de bola!"
                    price="R$ 954,60"
                    onPress={handleDetails} 
                />

                <House 
                    cover={require('../../assets/house5.jpg')}
                    description="Casa para você morar, casa show de bola!"
                    price="R$ 954,60"
                    onPress={handleDetails} 
                />


                <House 
                    cover={require('../../assets/house6.jpg')}
                    description="Casa para você morar, casa show de bola!"
                    price="R$ 954,60"
                    onPress={handleDetails} 
                />
            </ScrollView>

        </ScrollView>
    );
};

