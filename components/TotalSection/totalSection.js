import { View, Text, StyleSheet, TextInput,SafeAreaView } from "react-native";

const Total = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Text style={{ fontSize: 17 }}>Subtotal</Text>
        <Text style={{ fontSize: 17, color: "#cfcfcf" }}>
          {"\u20B9"} {props.total}
        </Text>
      </View>
      <View style={{ flexDirection: "row", height: 50 }}>
        <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 17 }}>
          Bill Discount
        </Text>
        <TextInput style={styles.textInput}> 10.00%</TextInput>
        <Text
          style={{
            marginTop: 20,
            color: "#d15284",
            fontSize: 12,
            paddingLeft: 20,
          }}
        >
          OR
        </Text>
        <TextInput style={styles.textInput2}> {"\u20B9"} 1,938.00</TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginLeft: 20,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 17 }}>Central GST + State GST</Text>
        <Text style={{ marginRight: 20, color: "#cfcfcf", fontSize: 17 }}>
          {"\u20B9"} {props.total}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: 190,
    backgroundColor: "white",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4,

    elevation: 10,
  },
  section1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  
  textInput: {
    borderBottomWidth: 1,
    width: 100,
    textAlign: "right",
    borderBottomColor: "#cfcfcf",
    marginLeft: 20,
    fontSize: 17,
    color: "black",
  },
  textInput2: {
    borderBottomWidth: 1,
    width: 100,
    borderBottomColor: "#cfcfcf",
    marginLeft: 17,
    marginRight: 20,
    fontSize: 17,
    color: "black",
    
  },
});
export default Total;
