import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';


const BodyScreen = ({navigation}) => (
    <View style={styles.container}>
        <Text>Body</Text>
        <Button 
        title = "Go to brand"
        onPress = {
            () => navigation.navigate('brand')
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

export default BodyScreen;
