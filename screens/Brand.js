import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import carLogo from '../assets/car.png'

class BrandScreen extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: [
            {
                "title": "Mazda", 
                "model": "6", 
                "colors": 1, 
                "doors": 4, 
                "type": "sedan", 
                "logo":
                "http://tradeins.space/uploads/brand/30/b983c4614d3a3f291364ede80acfa14b5950730c.png", 
                "photo":
                "https://207231.selcdn.ru/locator-media/models_desktop_q90/tradeins.space-uploads-photo-859724-93f1c5c69568d8b20fb050d5964e60eee386cedb.png",
                "price": 2262492
            }, 
            {
                "title": "Cadillac", 
                "model": "ESCALADE", 
                "colors": 3, 
                "doors": 5, 
                "type": "suv", 
                "logo":
                "http://tradeins.space/uploads/brand/6/0ec447411c90475a1fa9557d1ad64879347f7036.png", 
                "photo":
                "https://tradeins.space/uploads/photo/147093/escalade.jpg", 
                "price": 2733100
            }, 
            {
                "title": "KIA", 
                "model": "K5", 
                "colors":6, 
                "doors": 4, 
                "type": "sedan", 
                "logo":
                "http://tradeins.space/uploads/brand/26/75bb737582b2872e4604976820b0d1cd8112fb9c.png", 
                "photo":
                "https://207231.selcdn.ru/locator-media/models_desktop_q90/tradeins.space-uploads-photo-7045549-1ed1ce8ed1655930df51584bf5e294dbdee4f469.png",
                "price": 1974900
            }
        ],
          isLoading: false,
          index: 0
        };
      }

    componentDidMount() {
    // fetch('https://reactnative.dev/movies.json')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({ data: json.movies });
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });
    // const mydata = JSON.parse(json)
    // this.setState({data: mydata.data})
    }

    showNewCar = () => {
        this.setState(
            (state) => {
                return {index: state.index + 1}
            }
        )
        // window.alert(this.state.index)
        // window.alert(this.state.data[this.state.index].logo)
    }

    render() {
        const { data, isLoading } = this.state;
        // const link = this.state.data[this.state.index].logo
        // window.alert(link)
        return (
            
            <View style={styles.backContainer}>
                {isLoading ? <ActivityIndicator/> : (
                    <View style={styles.contentContainer}>
                    <View style={styles.carContainer}>
                        <Image 
                            style={styles.tinyLogo}
                            source={carLogo}
                        />
                        <Text style={styles.titleText}>{this.state.data[this.state.index].title}</Text>
                        <Text style={styles.carText}>Description</Text>
                    </View>
                    <View style={styles.creditContainer}>
                        <TouchableOpacity style={styles.buyButton}
                            onPress = {
                                () => this.props.navigation.navigate('price', {data: { ...data[this.state.index] }})
                            }
                        >
                            <Text style={styles.buyText}>Посмотреть предложения</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.creditButton}
                            onPress = {
                                () => this.showNewCar()
                                }
                            // onPress = {
                            //     () => this.props.navigation.navigate('model', {user: "Oleg"})
                            //     }
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
