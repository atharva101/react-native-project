import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Dashboard from "./components/Dashboard/dashboard";
import Details from "./components/Details/details";
import Header from "./components/header/header";
import UploadRx from "./components/UploadRx/uploadRx";
import ProductDashboard from "./components/ProductDashboard/productDashboard";
import Product from "./components/Product/product";
import { ScrollView } from "react-native";
import Total from "./components/TotalSection/totalSection";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Details />
        <Dashboard />
        <UploadRx />
        <ProductDashboard />
        <StatusBar style="auto" />
        <Product
          title="Thyronorm 12.5mcg Tab"
          rnum="H1"
          packagenum="QA22"
          id="HH123456789"
          exp="12/22"
          mrp="265.54"
          pack={3}
          units={4}
          quantity="1x10"
          disc={20}
          gst={12}
        ></Product>
        <Product
          title="Mycorandil 25mg Cream"
          rnum="G"
          packagenum="QA22"
          id="HH123456789"
          exp="12/22"
          mrp="265.54"
          pack={3}
          units={4}
          quantity="1x10"
          disc={20}
          gst={12}
        ></Product>
        <Total total = "1,938.00"/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
