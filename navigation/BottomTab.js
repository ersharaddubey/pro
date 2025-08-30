import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styled } from "nativewind";

// Screens
import DiscoverScreen from "../screens/DiscoverScreen";
import VideosScreen from "../screens/VideosScreen";
import Library from "../screens/Library";
import Audio from "../screens/Audio";

// Colors
import colors from "../constants/colors";

const BottomTab = createBottomTabNavigator();
const StyledLinear = styled(LinearGradient);

// ✅ Custom Tab Bar Button with Tailwind
const CustomTabBarButton = ({ children, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} className="flex-1">
      <StyledLinear
        colors={
          focused
            ? [colors.accent, "#FF9500"]
            : [colors.background, colors.background]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1 items-center justify-center"
      >
        {children}
      </StyledLinear>
    </TouchableOpacity>
  );
};

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.textDim,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
          height: 60,
        },
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Discover") iconName = "compass-outline";
          else if (route.name === "Videos") iconName = "videocam-outline";
          else if (route.name === "Audio") iconName = "musical-notes-outline";
          else if (route.name === "Library") iconName = "library-outline";
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      })}
    >
      <BottomTab.Screen name="Discover" component={DiscoverScreen} />
      <BottomTab.Screen name="Videos" component={VideosScreen} />
      <BottomTab.Screen name="Audio" component={Audio} />
      <BottomTab.Screen name="Library" component={Library} />
    </BottomTab.Navigator>
  );
}
