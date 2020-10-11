import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import errorImg from '../assets/errorImg.jpg'

const ErrorScreen = ({navigation}) => {
    return (
    <View style={styles.container}>
        <View style = {{marginBottom: 15}}>
            <Image 
                style={{width: 200, height: 200}}
                source={errorImg}
            />
        </View>
        <Text style = {{fontSize:18, fontWeight: 'bold', marginBottom: 15}}>Извините, мы не нашли эту машину</Text>
        <TouchableOpacity style={styles.moveBtn}
            onPress = {
                () => navigation.navigate('body')
            }
            >
                <Text style={styles.moveText}>
                    Попробовать ещё раз
                </Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    moveText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    },
    moveBtn: {
        width: '70%',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#3a83f1',
        alignItems: 'center',
        paddingVertical: 10

    },
})

export default ErrorScreen;
