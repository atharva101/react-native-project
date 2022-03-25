import { react, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Btn from "../Button/button";
import BtnBarcode from '../Button/btnBarCode'
const ProductDashboard = (props) => {

  //console.log(props.press)
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.info1}>Products*</Text>
        <Text style={styles.info2}>Products: 2 | Qty: 67</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.btn1}>
          <Btn text="Search to Add" />
        </View>
        <View  style={styles.btn2}>
          <BtnBarcode nav = {props.press}text="Scan Barcode" />
        </View>
        {/* <View style={styles.barcode}>
          <BarCodeScanner style={StyleSheet.absoluteFillObject} />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 165,
    backgroundColor: "white",
    marginLeft: 0,
    marginTop: 20,
    borderTopColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  info1: {
    marginLeft: 20,
    fontSize: 17,
  },
  info2: {
    marginLeft: 115,
    color: "#cfcfcf",
    fontSize: 17,
  },
  button: {
    margin: 20,
    flexDirection: "row",
  },
  btn1: {
    paddingRight: 15,
  },
});

export default ProductDashboard;
