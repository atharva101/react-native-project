import {React, useState} from 'react'
import DatePicker from 'react-native-datepicker'
import { View,Text,StyleSheet } from 'react-native'




const Date = (props) =>{

    const [currentDate, setDate] = useState(false);


    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>{props.text}</Text>
            <DatePicker style = {styles.date}
                        date = {currentDate}
                        placeholder = {'dd-mm-yyyy'}
                        format = {"DD-MM-YY"}
                         onDateChange={(date) => {
                            setDate(date);
                            }}
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: 5,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                borderColor : "#d8e1ea",
                                alignItems: "flex-start",
                                borderWidth: 1,
                                borderBottomWidth: 1,
                                borderRadius: 5,
                                height: 50,
                                paddingLeft: 30,
                            },
                            placeholderText: {
                                fontSize: 15,
                                color: "#d8e1ea",
                                paddingLeft: 0,
                             
                            },
                            dateText: {
                                fontSize: 17,
                            }
                        }}/>
            <Text style = {styles.require}>* Required</Text>
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    marginTop: 20,
    marginLeft: 20
 },
 date: {
     paddingTop: 15,
     width: 170,
 },
 text: {
     fontSize: 15,
     
 },
 require: {
     paddingTop: 10,
     color: "#d8e1ea"
 }
})

export default Date;