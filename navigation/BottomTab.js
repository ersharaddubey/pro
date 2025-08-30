import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverScreen from "../screens/DiscoverScreen";
import VideosScreen from "../screens/VideosScreen";
import Library from "../screens/Library";
import Audio from "../screens/Audio";
import { Ionicons } from "react-native-vector-icons";
import { palette } from "../theme";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: palette.accent || "#fff",
        tabBarInactiveTintColor: palette.textDim || "gray",
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Discover") iconName = "compass-outline";
          else if (route.name === "Videos") iconName = "videocam-outline";
          else if (route.name === "Audio") iconName = "musical-notes-outline";
          else if (route.name === "Library") iconName = "library-outline";
          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
    >
      <BottomTab.Screen name="Discover" component={DiscoverScreen} />
      <BottomTab.Screen name="Videos" component={VideosScreen} />
      <BottomTab.Screen name="Audio" component={Audio} />
      <BottomTab.Screen name="Library" component={Library} />
    </BottomTab.Navigator>
  );
}