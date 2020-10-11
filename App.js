import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from './src/Components/CameraScreen'
import BodyScreen from './screens/Body'
import PriceScreen from './screens/Price'
import BrandScreen from './screens/Brand'
import ModelScreen from './screens/Model'
import ErrorScreen from './screens/Error'
import FormScreen from './screens/Form'

const Stack = createStackNavigator();

function App() {
  return (
        <NavigationContainer>
            <StatusBar hidden={true} backgroundColor = '#000'></StatusBar>
            <Stack.Navigator initialRouteName="body" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="body" component={BodyScreen} />
                <Stack.Screen name="camera" component={CartScreen} />
                <Stack.Screen name="brand" component={BrandScreen} />
                <Stack.Screen name="price" component={PriceScreen} />
                <Stack.Screen name="model" component={ModelScreen} />
                <Stack.Screen name="error" component={ErrorScreen} />
                <Stack.Screen name="form" component={FormScreen} />
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

