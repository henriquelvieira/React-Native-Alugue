import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Details from './pages/Details';

import FeatherIcon from './components/FeatherIcons';

const Stack = createNativeStackNavigator();

function Routes(){

    const ButtonHeader = (name: string, size?: number | undefined, color?: string | undefined) => {
        return (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <FeatherIcon
                name={name}
                size={size}
                color={color}
              />
            </TouchableOpacity>
        );
    };


    const optinsHeader = (title: string, align: string, buttonHeader: any ) => {
        return {
            title: title,
            headerTitleAlign: align,
            headerTitleStyle: {
                fontFamily: 'Montserrat_700Bold',
                // fontSize: 18,
                // color: '#fff'
            },
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerRight: () => buttonHeader 
        }
    }

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={
                        optinsHeader('Home', 'right', ButtonHeader('shopping-bag') )
                    } 
                />
                <Stack.Screen 
                    name="Details" 
                    component={Details} 
                    options={
                        optinsHeader('Detalhes', 'right', ButtonHeader('shopping-bag') )
                    } 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;