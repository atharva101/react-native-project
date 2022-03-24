import React from "react";

import { Text, View, StyleSheet } from "react-native";

function UploadRx() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.leftText}>
          Invoice has
          <Text style={styles.prescription}> Prescription</Text> Drugs
        </Text>
      </View>
      <View style={styles.right}>
        <View style={styles.rightContainer}>
          <Text style={styles.rightText}>Upload Rx </Text>
          <Text style={styles.arrow}>&#x3e;</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "auto",
    backgroundColor: "yellow",
    marginTop: 15,
    height: 65,
    backgroundColor: "#fff",
    marginLeft: 0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6,
    elevation: 5,
  },
  left: {
    marginLeft: 20,
    marginTop: 20,
  },
  right: {
    marginLeft: 50,
    marginTop: 20,
  },
  leftText: {
    fontSize: 15,
  },
  rightContainer: {
    flexDirection: "row",
  },
  rightText: {
    fontSize: 15,
    color: "#d15284",
  },
  arrow: {
    fontSize: 25,
    color: "#d15284",
    marginTop: -8,
  },
  prescription: {
    color: "#ff9547",
    fontWeight: "400",
  },
});

export default UploadRx;
