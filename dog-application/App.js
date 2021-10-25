import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import LandingPage from "./screens/LandingPage";
import List from "./screens/List";
import Images from "./screens/Images";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./store/index";
const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Images" component={Images} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
