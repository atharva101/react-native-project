import React from "react";

import { Text, StyleSheet, SafeAreaView } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function Header() {
  return (
    <SafeAreaView elevatoin={5} style={styles.header}>
      <Text style={styles.arrow}>&#8592;</Text>
      <Text style={styles.sale}>Add Sale</Text>
      <Text style={styles.setting}>Settings</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "auto",
    height: 65,
    backgroundColor: "#fff",
    marginLeft: 0,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  arrow: {
    width: 40,
    color: "#c9326d",
    fontSize: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  sale: {
    color: "black",
    fontSize: 20,
    marginTop: 19,
    fontWeight: "bold",
  },
  setting: {
    color: "#c9326d",
    fontSize: 20,
    marginTop: 19,
    marginLeft: 160,
  },
});

export default Header;
