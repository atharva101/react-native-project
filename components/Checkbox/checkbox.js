import {React, useState} from 'react'

import {View,StyleSheet, Text} from 'react-native'
import {
  RoundedCheckbox,
} from "react-native-rounded-checkbox";




const Checkbox = (props) => {
    let flag = 0
    
    const[selected,setSelected] = useState(false)
    
    function handleSelected(){
        if(flag === 0){
            flag = 1
            setSelected(true)
        }
        else{
            flag = 0;
            setSelected(false)
        }
    }
    return(
        <View style = {styles.container} >
          <RoundedCheckbox 
              styles = {styles.checkbox}
              onPress = {handleSelected}
              text = {''}
             /* children = {selected?(<Icon name="done" type="MaterialIcons" size={30} color = {'#fff'} onPress={() => {}}/>):('')} */
              outerStyle ={styles.outer}
              innerStyle ={styles.inner}
              uncheckedColor = {'white'}
              checkedColor = {'#c5658b'}
               />
          <Text style = {styles.label}>{props.text}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    checkbox: {
        
        color: 'black',
        flexDirection: 'row',
        backgroundColor: 'yellow',
        padding:0
        
    },
    outer:{
        height: 27,
        width:26,
        margin: 20,
        backgroundColor: 'grey',
        
        
    },
    inner: {
        height: 25,
        width: 25
    },
    label: {
        fontSize: 16,
        marginTop: 18,
       
    }
})

export default Checkbox;