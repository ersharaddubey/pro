import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import MainHome from "./MainHome";
import { palette } from "../theme";

export default function DiscoverScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: palette.bg || "#000" }}>
      <Header badgeValue={65} />
      <MainHome />
    </View>
  );
}