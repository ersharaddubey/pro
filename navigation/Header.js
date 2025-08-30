import React from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopTabs from "./TopTabs";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  console.log("Header insets:", insets);

  return (
    <SafeAreaView
      className="bg-black"
      style={{ paddingTop: insets.top + 10 }}
    >
      {/* Header Top Row */}
      <View className="flex-row items-center justify-between px-3 py-2 bg-black z-50">
        {/* Logo */}
        <Image
          source={{
            uri: "https://i.postimg.cc/Dz1cHhN9/Whats-App-Image-2025-08-24-at-1-42-02-PM-1.jpg",
          }}
          className="w-32 h-8"
          resizeMode="contain"
          onError={(e) => console.log("Logo load error:", e.nativeEvent.error)}
        />

        {/* Profile Icon with Badge */}
        <TouchableOpacity
          className="relative"
          onPress={() => {
            console.log("Navigating to Profile");
            navigation.getParent()?.navigate("Profile") || navigation.navigate("Profile");
          }}
        >
          <Icon name="person-circle-outline" size={28} color="#fff" />
          <View className="absolute -top-1 -right-1 bg-red-600 rounded-full px-1">
            <Text className="text-white text-[10px] font-bold">65</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <TopTabs />
    </SafeAreaView>
  );
}
