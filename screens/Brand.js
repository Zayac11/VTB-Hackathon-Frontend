import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import carLogo from '../assets/car.png'

class BrandScreen extends React.Component {

    constructor(props) {
        super(props);
            console.log('constructor')
            console.log(props.route.params.data)
            this.state = {
                data: props.route.params.data,
                isLoading: false,
                index: 0
            };
      }

    showNewCar = () => {
        this.setState(
            (state) => {
                return {index: state.index + 1}
            }
        )
    }

    render() {
        const { data, isLoading } = this.state;
        console.log(this.state.data)
        return (
            
            <View style={styles.backContainer}>
                {isLoading ? <ActivityIndicator/> : (
                    <View style={styles.contentContainer}>
                    <View style={styles.carContainer}>
                        <Image 
                            style={styles.tinyLogo}
                            source={{uri: this.state.data[this.state.index].photo}}
                        />
                        <Text style={styles.titleText}>{this.state.data[this.state.index].title} {this.state.data[this.state.index].model}</Text>
                        <View style = {{width: '100%', paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between'}}> 
                            <Text style={styles.carText}>Price</Text>
                            <Text style={styles.carText}>{this.state.data[this.state.index].price}₽</Text>
                        </View>
                    </View>
                    <View style={styles.creditContainer}>
                        <TouchableOpacity style={styles.buyButton}
                            onPress = {
                            () => this.props.navigation.navigate('price', {data: {...data[this.state.index] }})
                            }
                        >
                            <Text style={styles.buyText}>Посмотреть предложения</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.creditButton}
                            onPress = {
                                this.state.index < 2 ?  () => this.showNewCar()
                                : () => this.props.navigation.navigate('error')
                                }
                        >
                            <Text style={styles.creditText}>Это не тот автомобиль</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
                )}
                              
            </View>    
        )
    } 
}

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 30,
        width: '100%',
        height: '85%'
    },
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
        paddingTop: 15,
        fontWeight: 'bold',
        fontSize: 24
    },
    carText: {
        fontSize: 18,
        fontWeight: '500'
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
        // marginBottom: 15
    },
    creditText: {
        textTransform: "uppercase",
        fontSize: 15,
        letterSpacing: 1.5,
        color: '#3a83f1'
    },
    tinyLogo: {
        width: '100%',
        height: 210,
      },
})

export default BrandScreen;
