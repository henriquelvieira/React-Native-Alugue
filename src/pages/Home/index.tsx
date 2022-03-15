import React from "react";
import { Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import New from '../../components/New';
import House from '../../components/House';
import SearchBox from '../../components/SearchBox';
import Recommended from '../../components/Recommended';

import { DataNews, DataHouses, DataRecommended } from './data';


export interface IParamsNavigation {
    name: string;
};


export default function Home(){

    const navigation = useNavigation();

    function handleNavigation(screenName: string, params?: IParamsNavigation): void {
        navigation.navigate(screenName, params);
    };

    const renderNews = ({ item }) => (
        <New 
            cover={require(`../../assets/${item.cover}`)}
            name={item.name}
            description={item.description}
            price={item.price}
            onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})} 
        />      
      );

      const renderHouses = ({ item }) => (
        <House 
            cover={require(`../../assets/${item.cover}`)}
            description={item.description}
            price={item.price}
            onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})} 
        /> 
      ); 
      
      const renderRecommended = ( { item }) => (
        <Recommended
            cover={require(`../../assets/${item.cover}`)}
            name={item.name}
            offer={item.offer}
            onPress={() => handleNavigation('Details', { name: 'Casa Floripa'})}
        />  
      );
    

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

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>            
                <FlatList
                    horizontal
                    data={DataNews}
                    renderItem={renderNews}
                    keyExtractor={dataNew => dataNew.id}
                />                                                
            </ScrollView>

            <View style={[styles.contentNew, { marginBottom: 10, marginTop: 20 }]}>
                <Text style={styles.title}>Próximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView} >
                <FlatList
                    horizontal
                    data={DataHouses}
                    renderItem={renderHouses}
                    keyExtractor={dataNew => dataNew.id}
                />  
            </ScrollView>

            <View style={[styles.contentNew, { marginBottom: 10, marginTop: 20 }]}>
                <Text style={styles.title}>Dica do Dia</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView} >            
                <FlatList
                    horizontal
                    data={DataRecommended}
                    renderItem={renderRecommended}
                    keyExtractor={dataNew => dataNew.id}
                />                                        
            </ScrollView>

        </ScrollView>
    );
};

