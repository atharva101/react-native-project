import react from "react";
import Checkbox from "../Checkbox/checkbox";
import { View,StyleSheet,Text } from "react-native";
import Date from  "../DatePicker/datePicker";
import Input from "../Input/input";
;
export default function Details(){

    return(
        <View style = {styles.container}>
            <View style = {styles.checkbox}>
              <Checkbox text = {'Invoice'}></Checkbox>
              <Checkbox text = {'Delivery Challan'}></Checkbox>
            </View>
            <Text style = {styles.text}>What's the difference?</Text>
            <View style = {styles.sectionContainer}>
                <Date text = {'Invoice Date*'}/>
                <Input style = {styles.input}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

       width: 'auto',
       height: 235,
       backgroundColor: '#fff',
       marginLeft: 0,
       marginTop: 5, 
       marginBottom: 5,
       shadowColor: "#000",
       shadowOffset: {
	     width: 0,
	     height: 5,
        },
       shadowOpacity: 0.34,
       shadowRadius: 5.04,
       elevation: 8,
    },
    checkbox: {
        flexDirection: 'row'
    },
    text: {
        color: '#c5658b',
        marginLeft: 25
    },
    sectionContainer: {
        flexDirection: 'row',
    },
    input: {
        marginTop: 20,
        
    }
})