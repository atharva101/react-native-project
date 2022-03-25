import { View, Text, StyleSheet,SafeAreaView } from "react-native";
import style from "react-native-datepicker/style";
import Icon from "react-native-vector-icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";

const Product = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>{props.title} &#x3e;</Text>
        <FontAwesome5
          style={styles.trash}
          name="trash"
          type="FontAwesome5"
          size={20}
          color="grey"
        />
      </View>
      <View style={styles.line2}>
        <Text style={styles.rnum}>   Rx - {props.rnum}</Text>
        <Feather style={styles.package} name="package" size={25} />
        <Text style={styles.packagenum}>{props.packagenum}</Text>
      </View>
      <View style={styles.line3}>
        <Text style={styles.id}>{props.id}</Text>
        <Text style={styles.exp}>Exp. {props.exp}</Text>
        <Text style={styles.mrp}>
          Mrp {"\u20B9"} {props.mrp}
        </Text>
      </View>
      <View style={styles.line4}>
        <Text style={styles.qty}>
          {props.pack} packs | {props.units} units
        </Text>
        <Text style={styles.price1}>
          {"\u20B9"} {props.mrp}
        </Text>
        <Text style={styles.price2}>
          {"\u20B9"} {props.mrp}
        </Text>
      </View>
      <View style={styles.line5}>
        <Text style={styles.quantity}>Pack: {props.quantity}</Text>
        <Text style={styles.disc}>{props.disc}% Disc</Text>
        <Text style={styles.gst}>{props.gst}% gst</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    height: 240,
    borderBottomColor: 'black',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5,
    elevation: 1,
  },
  head: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    color: "#cf487d",
    fontWeight: "bold",
    marginLeft: 20,
  },
  trash: {
    marginRight: 20,
  },
  line2: {
    marginLeft: 20,
    paddingTop: 20,
    flexDirection: "row",
  },
  rnum: {
    backgroundColor: "#ff6d00",
    color: "white",
    width: 70,
    borderRadius: 40,
    height: 25,
  },
  package: {
    marginLeft: 10,
    color: "#bfbfbf",
  },
  packagenum: {
    marginLeft: 10,
    color: "#bfbfbf",
    fontSize: 15,
  },
  line3: {
    flexDirection: "row",
    left: -10,
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  id: {
    fontSize: 15,
    color: "#bfbfbf",
  },
  exp: {
    fontSize: 15,
    color: "#bfbfbf",
    left: 20,
  },
  mrp: {
    fontSize: 15,
    color: "#bfbfbf",
    left: 20,
  },

  line4: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  qty: {
    fontSize: 17,
    left: -10,
    color: "black",
    fontWeight: "bold",
  },
  price1: {
    fontSize: 18,
    color: "black",
    left: -15,
    fontWeight: "bold",
  },
  price2: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    left: 10,
  },
  line5: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  quantity: {
    color: "#bfbfbf",
    fontSize: 15,
    left: -30
  },
  disc: {
    color: "#bfbfbf",
    fontSize: 15,
    right: -10
  },
  gst: {
    color: "#bfbfbf",
    fontSize: 15,
    right: -30
   
  },
});

export default Product;
