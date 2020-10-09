import React from 'react';
import { View, Image, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

export default function CarModal({item}) {
    if(item === null) {
        return (
            <View></View>
        );
    }

    return (
        <Modal transparent={true} visible={true}>
            <View style={styles.backContainer}>
                <View style={{flex: 1}}></View>
                <View style={styles.container}>
                    <View style={styles.carContainer}>
                        <Image 
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                              }}
						/>
						<Text style={styles.titleText}>BWM 5</Text>
						<Text style={styles.carText}>Description</Text>
                    </View>
                    <View style={styles.creditContainer}>
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buyText}>Посмотреть предложения</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.creditButton}>
                            <Text style={styles.creditText}>Посмотреть похожие авто</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomContainer}>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
	backContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: 15,
        width: '100%'
    },
    container: {
        flex: 5,
        backgroundColor: '#fff',
        borderRadius: 20
    },  
    bottomContainer: {
        flex: 1
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24
    },
    carText: {
        fontSize: 18,
        color: '#999ea9'
    },
    carContainer: {
        flex: 2,
        justifyContent: 'center',
		alignItems: 'center'
    },
    creditContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    buyButton: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#3a83f1',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 25
    },
    buyText: {
        textTransform: "uppercase",
        fontSize: 15,
        letterSpacing: 1.5,
        color: '#fff'
    },
    creditButton: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 15
    },
    creditText: {
        textTransform: "uppercase",
        fontSize: 15,
        letterSpacing: 1.5,
        color: '#3a83f1'
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
});