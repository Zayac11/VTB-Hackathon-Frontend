import React from 'react';
import {StyleSheet, Text, View, ScrollView,Image,TouchableOpacity} from 'react-native';
import { ceil } from 'react-native-reanimated';
import carLogo from '../assets/car.png'
import doshik from '../assets/doshik.png'
import arrow from '../assets/Union.png'

const PriceScreen = ({navigation}) => (
    <ScrollView>
        
        <View style={styles.container}>
            <TouchableOpacity style = {{zIndex:1, position: 'absolute', top: 22, left: 15}}
                onPress = {
                    () => navigation.goBack()
                }>
                <Image 
                    style={{width: 22, height: 15,}}
                    source = {arrow}
                />
            </TouchableOpacity>
            <Text style={styles.model}>BMW X5</Text>
            <Image 
                style={{width: 250, height: 210,}}
                source = {carLogo}
            />
            <View style = {{marginTop: 15, width: '90%'}}>
                <Text style = {{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>
                    Information
                </Text>
                <View style = {styles.stats}>
                    <Text style = {styles.statsText}>Type</Text>
                    <Text style = {styles.statsText}>Sedan</Text>
                </View>
                <View style = {styles.stats}>
                    <Text style = {styles.statsText}>Doors</Text>
                    <Text style = {styles.statsText}>4</Text>
                </View>
                <View style = {styles.stats}>
                    <Text style = {styles.statsText}>Colors</Text>
                    <Text style = {styles.statsText}>6</Text>
                </View>
            </View>
            <View style = {{marginVertical: 15, width: '90%'}}>
                <Text style = {{fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 20, marginBottom: 15}}>
                    Pricing
                </Text>

                <View style = {styles.stats}>
                    <Text style = {styles.priceText}>
                       Currency 
                    </Text>
                    <View style = {styles.info}>
                        <Text style = {styles.priceText}>Rate</Text>
                        <Text style = {styles.priceText}>Price</Text>
                    </View>
                </View>
                <View style = {styles.stats}>
                    <Text style = {styles.statsText}>
                        RUR
                    </Text>
                    <View style = {styles.info}>
                        <Text style = {styles.statsText}>68,65</Text>
                        <Text style = {styles.statsText}>2790000₽</Text>
                    </View>
                </View>
                <View style = {styles.stats}>
                    <Text style = {styles.statsText}>
                        USD
                    </Text>
                    <View style = {styles.info}>
                        <Text style = {styles.statsText}>68,65</Text>
                        <Text style = {styles.statsText}>36000$</Text>
                    </View>
                </View>
                <View style = {styles.stats}>
                    <Text style = {styles.statsText}>
                        EUR
                    </Text>
                    <View style = {styles.info}>
                        <Text style = {styles.statsText}>68,65</Text>
                        <Text style = {styles.statsText}>30700€</Text>
                    </View>
                </View>
                <View style = {styles.stats}>
                    <Text style = {styles.statsText}>
                        DOSHIK
                    </Text>
                    <View style = {styles.info}>
                        <Text style = {styles.statsText}>68,65</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style = {styles.statsText}>69750</Text>
                            <Image 
                                style = {{width: 18, height: 23}}
                                source = {doshik}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.buyButton}
                            onPress = {
                                () => navigation.navigate('body')
                            }
                        >
                            <Text style={styles.buyText}>Оформить кредит</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    model: {
        fontWeight: 'bold',
        fontSize: 22,
        marginVertical: 15
    },
    stats: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 2
    },
    info: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 2,
        width: '60%'
    },
    statsText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    priceText: {
        color: '#999EA9',
        fontWeight: '500',
        fontSize: 14
    },
    buyButton: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#3a83f1',
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 25
    },
    buyText: {
        textTransform: "uppercase",
        fontSize: 15,
        fontWeight: '500',
        fontSize: 14,
        color: '#fff'
    },
})

export default PriceScreen;
