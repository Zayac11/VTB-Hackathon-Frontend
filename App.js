import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BodyScreen from './screens/Body'
import PriceScreen from './screens/Price'
import BrandScreen from './screens/Brand'
import ModelScreen from './screens/Model'

const Stack = createStackNavigator();

function App() {
  return (
  
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="body" component={BodyScreen} />
            <Stack.Screen name="brand" component={BrandScreen} />
            <Stack.Screen name="price" component={PriceScreen} />
            <Stack.Screen name="moedl" component={ModelScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center', //Горизонтальное
      justifyContent: 'center', //Вертикальное центрирование
    },
    helloText: {
      fontSize: 50,
      color: 'red',
    },
  
  });


  export default App;

