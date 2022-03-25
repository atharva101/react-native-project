import React from 'react'
import {View, StyleSheet, TextInput, Text} from 'react-native'

export default function Input(){

    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Doctor's Name</Text>
            <TextInput style = {styles.input} placeholder = 'Dr.'></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        marginTop: 20,
    },
    text: {
        fontSize: 15,
        paddingLeft: 30,
        paddingBottom: 7
    },
    input: {
        borderColor : "#d8e1ea",
        textAlign:'left',
        fontSize:17,
        paddingBottom:12,
        borderWidth: 1,
        width: 170,
        borderRadius: 5,
        height: 55,
        marginLeft: 30,
        paddingLeft: 10,
        paddingTop: 15,
    },
   
})