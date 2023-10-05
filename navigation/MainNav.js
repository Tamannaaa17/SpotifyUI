import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import TabNav from "./Tab";
const MainNav =()=>{
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name='Tab' component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default MainNav;