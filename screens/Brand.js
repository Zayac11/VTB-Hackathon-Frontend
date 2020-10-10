import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import carLogo from '../assets/car.png'
import jjsonn from '../json.json'

class BrandScreen extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true
        };
      }

      componentDidMount() {
        fetch('https://reactnative.dev/movies.json')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json.movies });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }

    render() {
        const { data, isLoading } = this.state;
        return (
            
            <View style={styles.backContainer}>
                {isLoading ? <ActivityIndicator/> : (
                    <View style={styles.contentContainer}>
                    <View style={styles.carContainer}>
                        <Image 
                            style={styles.tinyLogo}
                            source={carLogo}
                        />
                        <Text style={styles.titleText}>{this.state.data[4].title}</Text>
                        <Text style={styles.carText}>Description</Text>
                    </View>
                    <View style={styles.creditContainer}>
                        <TouchableOpacity style={styles.buyButton}
                            onPress = {
                                () => this.props.navigation.navigate('price')
                            }
                        >
                            <Text style={styles.buyText}>Посмотреть предложения</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.creditButton}
                            onPress = {
                                () => this.props.navigation.navigate('model')
                            }
                        >
                            <Text style={styles.creditText}>Это не тот автомобиль</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.creditButton}
                            onPress = {
                                () => navigation.goBack()
                            }
                        >
                            <Text style={styles.creditText}>Это asdsa тот автомобиль</Text>
                        </TouchableOpacity> */}
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
        // marginBottom: 15
    },
    creditText: {
        textTransform: "uppercase",
        fontSize: 15,
        letterSpacing: 1.5,
        color: '#3a83f1'
    },
    tinyLogo: {
        width: 250,
        height: 210,
      },
})

export default BrandScreen;
