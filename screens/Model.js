import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const ModelScreen = ({navigation}) => (
    <View style={styles.container}>
        <Text>Model</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
})

export default ModelScreen;
