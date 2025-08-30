import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTab";
import Profilescreen from "../screens/Profilescreen";
import ViewDetails from "../screens/Viewdetails";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="Profile" component={Profilescreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}