import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/home';
import Barcode from "./screens/barcode";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Barcode Scanner" component={Barcode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;