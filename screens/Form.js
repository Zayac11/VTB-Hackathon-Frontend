import React from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from 'formik'


export default function FormScreen ({ route, navigation}){
    const {list} = route.params   
    console.log(list)
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            
                <Formik style={{width: '100%'}}
                    initialValues={{cost: list.price, initialFee: '', term: ''}}
                    onSubmit={(values, actions) => {
                        actions.resetForm()
                        console.log(values)
                        fetch('http://84.201.142.151:8000/api/post_calculations',{
                            method: 'post',
                            body: JSON.stringify({
                                cost: values.cost,
                                initialFee: values.initialFee,
                                term: values.term,
                                specialConditions: ["b907b476-5a26-4b25-b9c0-8091e9d5c65f",
                                "57ba0183-5988-4137-86a6-3d30a4ed8dc9",
                                "cbfc4ef3-af70-4182-8cf6-e73f361d1e68"]
                            }),
                            headers: {
                                'content-type': "application/json",
                                'accept': "application/json"
                            }
                        })
                    }}
                >
                    {
                        (props) => (
                            <View style={{width: '100%', alignItems: "center",}}>
                                <View style = {{width:'70%', alignItems: 'center', marginBottom: 5}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Price: {list.price}</Text>
                                </View>
                                <TextInput 
                                    style={styles.input}
                                    placeholder='Review initialFee'
                                    onChangeText={props.handleChange('initialFee')}
                                    value={props.values.initialFee}
                                    keyboardType = 'numeric'
                                />
                                <TextInput 
                                    style={styles.input}
                                    placeholder='Review term'
                                    onChangeText={props.handleChange('term')}
                                    value={props.values.term}
                                    keyboardType = 'numeric'
                                />
                                <TouchableOpacity style={styles.moveBtn}
                                    onPress={props.handleSubmit}
                                >
                                    <Text style={{color: 'white'}}>Submit</Text>

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
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
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