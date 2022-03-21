import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Details from './pages/Details';
import ButtonHeader from './components/ButtonHeader';

import { theme } from './global/styles/theme';


const Stack = createNativeStackNavigator();

function Routes(){

    const optinsHeader = (title: string, align: string, buttonHeader?: any ) => {
        return {
            title: title,
            headerTitleAlign: align,
            headerTitleStyle: {
                fontFamily: theme.FONT_FAMILY_BOLD,
                // fontSize: 18,
                // color: '#fff'
            },
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerRight: buttonHeader && (() => buttonHeader)
        }
    }

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={
                        optinsHeader('Home', 'right', <ButtonHeader name='shopping-bag' /> )
                    } 
                />
                <Stack.Screen 
                    name="Details" 
                    component={Details} 
                    options={
                        optinsHeader('Detalhes', 'right', <ButtonHeader name='shopping-bag' />  )
                    } 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;