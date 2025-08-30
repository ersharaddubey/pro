import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";

export default function VideosScreen() {
  return (
    <View className="flex-1 bg-black">
      <Header badgeValue={65} />
      <Text className="text-white text-base px-4 mt-4">
        Videos Screen (Placeholder)
      </Text>
    </View>
  );
}
