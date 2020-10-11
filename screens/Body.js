import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import logo from '../assets/Latin.png'


const BodyScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    resizeMode='contain'
                    source={logo}
                />
            </View>
            <View style={{width: '100%', height: '60%'}}>
                <View style={styles.titleContainer}>
                    <Text  style={styles.titleText}>Добро пожаловать!</Text>
                    <Text style={styles.titleText}>Давайте найдем эту машину</Text>
                </View>
                <View style={styles.moveContainer}>
                    <TouchableOpacity style={styles.moveBtn}
                    
                    onPress = {
                        () => navigation.navigate('camera')
                    }
                    >
                        <Text style={styles.moveText}>
                           ОТКРЫТЬ КАМЕРУ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.footerText}>
                Powered by Dev.gang
            </Text>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    logoContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingTop: 25
    },
    logo: {
        width: 80,
        height: 30
    },
    moveContainer: {
        width: '100%'
    },
    moveBtn: {
        width: '100%',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#3a83f1',
        alignItems: 'center',
        paddingVertical: 10

    },
    moveText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    },
    footerText: {
        color: '#aaa',
        position: 'absolute', 
        bottom: 20,
    },
    titleContainer: {
        alignItems: "center",
        marginBottom: 100
    },
    titleText: {
        justifyContent: 'center',
        color: '#434343',
        fontWeight: '700',
        fontSize: 22,
        
    }
})

export default BodyScreen;
