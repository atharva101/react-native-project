import { Button, StyleSheet, View, Text } from "react-native";

const Btn = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.arrow}>&#x3e;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    width: 180,
    backgroundColor: "white",
    borderColor: "#e9e9e9",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  text: {
    fontSize: 18,
    padding: 15,
    fontWeight: "bold",
    color: "#d15284",
  },
  arrow: {
    fontSize: 25,
    color: "#d15284",
    marginTop: 8,
    fontWeight: "bold",
  },
});

export default Btn;
