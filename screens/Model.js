import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';


const ModelScreen = ({ route, navigation}) => {
    const {data} = route.params   
    return (
    <View style={styles.container}>
        <Text>{(data.title)}</Text>
        <Text>SSS</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
})

export default ModelScreen;
