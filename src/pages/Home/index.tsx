import React from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import SearchBox from '../../components/SearchBox';
import New, { INew } from '../../components/New';
import House, { IHouse } from '../../components/House';
import Recommended, { IRecommended } from '../../components/Recommended';
import Populares, { IPopulares } from '../../components/Populares';


import { DataNews, DataHouses, DataRecommended, DataPopulares, IData } from './data';


export interface IParamsNavigation {
    name: string;
};


export default function Home(){

    const navigation = useNavigation();

    function handleNavigation(screenName: string, params?: any): void {
        navigation.navigate(screenName, params);
    };

    const renderNews = ({ item }: {item: INew} ) => (
        <New 
            cover={item.cover}
            name={item.name}
            description={item.description}
            price={item.price}
            onPress={() => handleNavigation('Details', item)} 
        />               
      );

      const renderHouses = ({ item }: { item: IHouse } ) => (
        <House 
            cover={item.cover}
            description={item.description}
            price={item.price}
            onPress={() => handleNavigation('Details', item)} 
        /> 
      ); 
      
      const renderRecommendeds = ( { item }: { item: IRecommended } ) => (
        <Recommended
            cover={item.cover}
            name={item.name}
            offer={item.offer}
            onPress={() => handleNavigation('Details', item)}
        />  
      );
    

      const renderPopulares = ( { item }: { item: IPopulares } ) => (
        <Populares
            cover={item.cover}
            name={item.name}
            description={item.description}
            price={item.price}
            onPress={() => handleNavigation('Details', item)}
        />  
      );


    return (
        <SafeAreaView
            style={styles.container}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.search}>
                    <SearchBox placeholder="O que está procurando?" />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Novidades</Text>
                </View>

                <Text>{DataNews}</Text>

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
  
                <View style={[styles.content, styles.contentMargin]}>
                    <Text style={styles.title}>Mais populares</Text>
                </View>

                <FlatList
                    showsVerticalScrollIndicator={false} 
                    style={styles.scrollView} 
                    data={DataPopulares}
                    renderItem={renderPopulares}
                    keyExtractor={dataNew => dataNew.id}
                />     


            </ScrollView>
        </SafeAreaView>
    );
};
