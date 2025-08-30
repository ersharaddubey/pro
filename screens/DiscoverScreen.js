import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import MainHome from "./MainHome";

export default function DiscoverScreen() {
  return (
    <View className="flex-1 bg-bg">
      <Header badgeValue={65} />
      <MainHome />
    </View>
  );
}
