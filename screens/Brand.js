import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const BrandScreen = ({navigation}) => (
    <View style={styles.container}>
        <Text>Brand</Text>
        <Button 
        title = "Go to body"
        onPress = {
            () => navigation.navigate('body')
        }
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
})

export default BrandScreen;
