import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  backgroundColor,
  color,
} from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.billing}>Billing to*</Text>
      <Text style={styles.change}>Change</Text>
      <Text style={styles.name}>Kushal Kharbanda</Text>
      <Text style={styles.money}> {"\u20B9"} 26,525</Text>
      <Text style={styles.id}>7000413345</Text>
      <Text style={styles.recieve}>You'll recieve</Text>
      <View style={styles.stats}>
        <View style={styles.item1}>
          <Text style={styles.importance}>Importance</Text>
          <View style={styles.innerItem}>
            <Text style={styles.rating}>10</Text>
            <Text style={styles.small}>/10</Text>
          </View>
        </View>
        <View style={styles.item1}>
          <Text style={styles.importance}>Avg Order Value</Text>
          <Text style={styles.rating}>{"\u20B9"} 265</Text>
        </View>
        <View style={styles.item1}>
          <Text style={styles.importance}>Avg Revisit in</Text>
          <Text style={styles.rating}>26 days</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "auto",
    height: 235,
    backgroundColor: "#fff",
    marginLeft: 0,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5,
    elevation: 5,
  },
  billing: {
    justifyContent: "flex-start",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  change: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 220,
    marginTop: 20,
    color: "#d76995",
  },
  name: {
    fontSize: 17,
    marginTop: 15,
    marginLeft: 20,
    fontWeight: "bold",
  },
  money: {
    color: "red",
    marginTop: 15,
    fontSize: 20,
    paddingLeft: 120,
  },
  id: {
    color: "#cfcfcf",
    fontSize: 15,
    marginLeft: 20,
    marginTop: 10,
  },
  recieve: {
    color: "#cfcfcf",
    marginTop: 10,
    paddingLeft: 180,
  },

  stats: {
    flexDirection: "row",
    marginTop: 10,
    borderColor: "#d8e1ea",
    borderWidth: 0,
    borderTopWidth: 1,
    justifyContent: "center",
  },
  item1: {
    borderColor: "#d8e1ea",
    borderRightWidth: 1,
    height: 100,
  },
  importance: {
    color: "#cfcfcf",
    padding: 15,
    justifyContent: "center",
    alignSelf: "center",
    margin: 6,
    marginBottom: 0,
  },
  innerItem: {
    flexDirection: "row",
    alignSelf: "center",
  },
  rating: {
    fontSize: 23,
    alignSelf: "center",
  },
  small: {
    fontSize: 16,
    marginTop: 10,
  },
});
