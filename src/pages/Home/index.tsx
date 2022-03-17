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

    function handleNavigation(screenName: string, params?: any): void {
        navigation.navigate(screenName, params);
    };

    const renderNews = ({ item }) => (
        <New 
            cover={item.cover}
            name={item.name}
            description={item.description}
            price={item.price}
            onPress={() => handleNavigation('Details', item)} 
        />      
      );

      const renderHouses = ({ item }) => (
        <House 
            cover={item.cover}
            description={item.description}
            price={item.price}
            onPress={() => handleNavigation('Details', item)} 
        /> 
      ); 
      
      const renderRecommendeds = ( { item }) => (
        <Recommended
            cover={item.cover}
            name={item.name}
            offer={item.offer}
            onPress={() => handleNavigation('Details', item)}
        />  
      );
    

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >

            <View style={styles.search}>
                <SearchBox placeholder="O que está procurando?"/>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false} 
                style={styles.scrollView}
                data={DataNews}
                renderItem={renderNews}
                keyExtractor={dataNew => dataNew.id}
            />                                                

            <View style={[styles.content, styles.contentMargin]}>
                <Text style={styles.title}>Próximo de você</Text>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false} 
                style={styles.scrollView}                     
                data={DataHouses}
                renderItem={renderHouses}
                keyExtractor={dataNew => dataNew.id}
            />  

            <View style={[styles.content, styles.contentMargin]}>
                <Text style={styles.title}>Dica do Dia</Text>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false} 
                style={styles.scrollView} 
                data={DataRecommended}
                renderItem={renderRecommendeds}
                keyExtractor={dataNew => dataNew.id}
            />                                        
        </ScrollView>
    );
};
