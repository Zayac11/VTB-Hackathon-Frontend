import React from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from 'formik'


export default function FormScreen ({ route, navigation}){
    const {list} = route.params   
    // console.log(list)
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            
                <Formik style={{width: '100%'}}
                    initialValues={{cost: list.price, initialFee: null, term: null}}
                    onSubmit={(values, actions) => {
                        actions.resetForm()
                        // console.log(values)                        
                        fetch('http://84.201.142.151:8000/api/post_calculations',{
                            method: 'post',
                            body: JSON.stringify({
                                cost: values.cost,
                                initialFee: values.initialFee,
                                term: values.term,
                            }),
                            headers: {
                                'content-type': "application/json",
                                'accept': "application/json"
                            }
                            
                        }).then(response => response.json())
                          .then(responsedata => navigation.navigate('register', {data: responsedata.result, list: list, fail: values}));

                    }
                }
                >
                    {
                        (props) => (
                            <View style={{width: '100%', alignItems: "center"}}>
                                <View style={{alignItems:'center', width: '70%'}}>     
                                    <Text style={{textAlignVertical:'center',fontWeight: '700'}}>ПОЛУЧЕНИЕ ИНФОРМАЦИИ </Text>
                                    <Text style={{textAlignVertical:'center', marginBottom: 25, fontWeight: '700'}}>О СТОИМОСТИ КРЕДИТОВАНИЯ</Text>
                                </View>
                                <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Цена: {list.price}</Text>
                                </View>
                                <Text>Первоначальный взнос</Text>
                                    <TextInput 
                                        style={styles.input}
                                        placeholder='Первоначальный взнос'
                                        onChangeText={props.handleChange('initialFee')}
                                        value={props.values.initialFee}
                                        keyboardType = 'numeric'
                                    />

                                <Text style={{marginTop:10}}>Срок</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder='Срок'
                                    onChangeText={props.handleChange('term')}
                                    value={props.values.term}
                                    keyboardType = 'numeric'
                                />
                                
                                <TouchableOpacity style={styles.moveBtn}
                                    onPress={
                                        props.handleSubmit                                        
                                    }
                                >
                                    <Text style={{color: 'white'}}>Отправить</Text>

                                </TouchableOpacity>
                            </View>
                        )
                    }
                </Formik>
            
        </View>
        </TouchableWithoutFeedback> )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        width: '70%',
        marginHorizontal: 15,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 3,
        marginVertical: 5
    },
    moveBtn: {
        width: '70%',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#3a83f1',
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 15,
    },
})