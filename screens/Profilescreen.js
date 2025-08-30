import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000", padding: 20 }}>
      <Text style={{ color: "#fff", fontSize: 22, fontWeight: "700" }}>
        OTT Profile Screen
      </Text>

      <Text style={{ color: "#aaa", marginTop: 10 }}>
        This is your profile area. You can manage account & settings.
      </Text>

      <Pressable
        style={{
          marginTop: 20,
          backgroundColor: "#FF7A00",
          padding: 12,
          borderRadius: 8,
        }}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          Go to Settings
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
