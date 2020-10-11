import React from 'react';
import {StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from 'formik'


const RegistrationScreen = ({ route, navigation}) => {
    const {data, list, fail} = route.params   
    // console.log(fail)
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
            <Formik style={{width: '100%'}}
                initialValues={{email: null, income_amount: null, birth_date_time: null, birth_place: null, family_name: null, first_name: null, gender: null, 
                    middle_name: null, nationality_country_code: "RU", phone: null, requested_amount: data.loanAmount, requested_term: data.term * 12, trade_mark: list.title, vehicle_cost: list.price, interest_rate: 10.1}}
                onSubmit={(values, actions) => {
                    // actions.resetForm()
                    // console.log(values)
                    fetch('http://84.201.142.151:8000/api/post_car_loan',{
                            method: 'post',
                            body: JSON.stringify({
                                email: values.email,
                                income_amount: values.income_amount,
                                birth_date_time: values.birth_date_time,
                                birth_place: values.birth_place,
                                family_name: values.family_name,
                                first_name: values.first_name,
                                gender: values.gender,
                                middle_name: values.middle_name,
                                nationality_country_code: values.nationality_country_code,
                                phone: values.phone,
                                requested_amount: values.requested_amount,
                                requested_term: values.requested_term,
                                trade_mark: values.trade_mark,
                                vehicle_cost: values.vehicle_cost,
                                interest_rate: values.interest_rate,
                            }),
                            headers: {
                                'content-type': "application/json",
                                'accept': "application/json"
                            }
                        }).then(response => response.json())
                        .then(responsedata => 
                            {
                                responsedata.application.decision_report.application_status == 'prescore_approved' ?
                                window.alert('Кредит одобрен') :  window.alert('В кредите отказано, лох')
                            }) 
                    }
                }
            >
            
                {(props) => (<View style={styles.container}>
                    <Text style={{fontSize: 22, marginVertical: 15}}>Оформление</Text>
                    <View style = {{width: '80%'}}>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <Text style = {styles.text}>Стоимость Вашей машины</Text>
                            <Text style = {styles.text}>{fail.cost} ₽</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <Text style = {styles.text}>Сумма кредита</Text>
                            <Text style = {styles.text}>{fail.initialFee} ₽</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <Text style = {styles.text}>Процентная ставка</Text>
                            <Text style = {styles.text}>{data.contractRate}%</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <Text style = {styles.text}>Срок выплаты кредита</Text>
                            <Text style = {styles.text}>{data.term * 12} мес.</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <Text style = {styles.text}>Стоимость Каско</Text>
                            <Text style = {styles.text}>{data.kaskoCost} ₽</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <Text style = {styles.text}>Сумма ежемесячных выплат</Text>
                            <Text style = {styles.text}>{data.payment} ₽</Text>
                        </View>
                    </View>

                    <View style={{width: '100%', alignItems: "center", marginTop: 15}}>
                            <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                <Text style = {{fontWeight: '500', fontSize: 18}}>Ваша фамилия:</Text>
                            </View>
                            <TextInput 
                                    style={styles.input}
                                    placeholder='Ваша фамилия'
                                    onChangeText={props.handleChange('family_name')}
                                    value={props.values.family_name}
                                />

                                <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Ваше имя:</Text>
                                </View>
                            <TextInput 
                                style={styles.input}
                                placeholder='Ваше имя'
                                onChangeText={props.handleChange('first_name')}
                                value={props.values.first_name}
                            />
                            <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Ваше отчество:</Text>
                                </View>
                            <TextInput 
                                style={styles.input}
                                placeholder='Ваше отчество'
                                onChangeText={props.handleChange('middle_name')}
                                value={props.values.middle_name}
                            />
                            <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Пол:</Text>
                                </View>
                            <TextInput 
                                style={styles.input}
                                placeholder='Пол'
                                onChangeText={props.handleChange('gender')}
                                value={props.values.gender}
                            />
                            <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Дата рождения:</Text>
                                </View>
                            <TextInput 
                                style={styles.input}
                                placeholder='Дата рождения'
                                onChangeText={props.handleChange('birth_date_time')}
                                value={props.values.birth_date_time}
                            />
                            <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Место рождения:</Text>
                                </View>
                            <TextInput 
                                style={styles.input}
                                placeholder='Место рождения'
                                onChangeText={props.handleChange('birth_place')}
                                value={props.values.birth_place}
                            />
                            <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Номер телефона:</Text>
                                </View>
                            <TextInput 
                                style={styles.input}
                                placeholder='Номер телефона'
                                onChangeText={props.handleChange('phone')}
                                value={props.values.phone}
                            />
                            <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Email адрес:</Text>
                                </View>
                            <TextInput 
                                style={styles.input}
                                placeholder='Email адрес'
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                            />
                            <View style = {{width:'70%', alignItems: 'center', marginBottom: 15}}>
                                    <Text style = {{fontWeight: '500', fontSize: 18}}>Ваш ежемесячный доход:</Text>
                                </View>
                            <TextInput 
                                style={styles.input}
                                placeholder='Ваш ежемесячный доход'
                                onChangeText={props.handleChange('income_amount')}
                                value={props.values.income_amount}
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
                </View>
                )}
            </Formik>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
        width: '80%',
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 3,
        padding: 5,
        marginVertical: 5
    },
    moveBtn: {
        width: '80%',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#3a83f1',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 15,
    },
})

export default RegistrationScreen;
