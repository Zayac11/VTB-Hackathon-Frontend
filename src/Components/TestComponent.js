import React from 'react';
import { ActivityIndicator,StyleSheet, Text, View } from 'react-native';

const Test = (props) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size = 'large' color = 'red'/>
            <Text>{props.name}</Text>
        </View>
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

  export default Test;