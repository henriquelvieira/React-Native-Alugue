import React from "react";
import { Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import New from '../../components/New';
import House from '../../components/House';
import SearchBox from '../../components/SearchBox';
import Recommended from '../../components/Recommended';

import { DataNews } from './data';


export interface IParamsNavigation {
    name: string;
};


export default function Home(){

    const navigation = useNavigation();

    function handleNavigation(screenName: string, params?: IParamsNavigation): void {
        navigation.navigate(screenName, params);
    };

    // function renderNewList({ dataNew }) {
    //     return (
    //         <New 
    //             cover={require(`../../assets/${dataNew.cover}`)}
    //             name={dataNew.name}
    //             description={dataNew.description}
    //             price={dataNew.price}
    //             onPress={() => {}} 
    //         />
    //     )
    // };


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#fff' }}
        >

            <View style={styles.header}>
                <SearchBox placeholder="O que está procurando??"/>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            {/* TODO: REPLACE TO FLATLIST AFTER IMPLEMENTATION OF API */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                
                {/* <FlatList
                    data={DataNews}
                    renderItem={renderNewList}
                    keyExtractor={dataNew => dataNew.id}
                /> */}

                <New 
                    cover={require('../../assets/house1.jpg')}
                    name="Casa Floripa"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="R$ 1.204,90"
                    onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})} 
                />

                <New
                    cover={require('../../assets/house2.jpg')} 
                    name="Casa Floripa"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="R$ 1.204,90"
                    onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})} 
                />

                <New
                    cover={require('../../assets/house3.jpg')}
                    name="Rancho SP"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="R$ 1.204,90"
                    onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})} 
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
                    onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})} 
                />

                <House 
                    cover={require('../../assets/house5.jpg')}
                    description="Casa para você morar, casa show de bola!"
                    price="R$ 954,60"
                    onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})} 
                />

                <House 
                    cover={require('../../assets/house6.jpg')}
                    description="Casa para você morar, casa show de bola!"
                    price="R$ 954,60"
                    onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})} 
                />
            </ScrollView>

            <View style={[styles.contentNew, { marginBottom: 10, marginTop: 20 }]}>
                <Text style={styles.title}>Dica do Dia</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView} >
                <Recommended
                    cover={require('../../assets/house1.jpg')}
                    house="Casa Floripa"
                    offer="25% OFF"
                    onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})}
                />
                <Recommended
                    cover={require('../../assets/house2.jpg')}
                    house="Casa São Paulo"
                    offer="15% OFF"
                    onPress={() => handleNavigation('Details', { name: 'Casa São Paulo'})}
                />
                <Recommended
                    cover={require('../../assets/house3.jpg')}
                    house="Casa de Praia"
                    offer="10% OFF"
                    onPress={() => handleNavigation('Details', { name: 'Casa de Praia'})}
                />                                
            </ScrollView>

        </ScrollView>
    );
};

