import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const PriceScreen = ({navigation}) => (
    <View style={styles.container}>
        <Text>Price</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
})

export default PriceScreen;
