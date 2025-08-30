import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import { palette } from "../theme";

export default function VideosScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: palette.bg || "#000" }}>
      <Header badgeValue={65} />
      <Text>Videos Screen (Placeholder)</Text>
    </View>
  );
}