import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Test from './src/Components/TestComponent.js'

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.helloText}>Hello world!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <View style = {{flex: 1}}>  
    //     <View style = {{flex: 3, backgroundColor: 'green'}}></View>  
    //     <View style = {{flex: 2, backgroundColor: 'chocolate'}}></View>  
    //     <View style = {{flex: 1, backgroundColor: 'maroon'}}></View>  
    // </View>  
    <View style={styles.container}>
        <Test name = 'Egor'/>
    </View>
  );
}



// class Test extends React.Component {
//     render() {
//         return(
//             <View style = {{flex: 1}}>  
//                 <View style = {{flex: 3, backgroundColor: 'green'}}></View>  
//                 <View style = {{flex: 2, backgroundColor: 'chocolate'}}></View>  
//                 <View style = {{flex: 1, backgroundColor: 'maroon'}}></View>  
//             </View> 
//         )
//     }
// }

// const Test = (props) => {
//     return (
//         <View style={styles.container}>
//             <Text>{props.name}</Text>
//         </View>
//     )
// }

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