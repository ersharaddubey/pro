import React from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111", padding: 20 }}>
      <Text style={{ color: "#fff", fontSize: 22, fontWeight: "700" }}>
        Settings
      </Text>

      <Text style={{ color: "#aaa", marginTop: 10 }}>
        Here you can manage notifications, language, and privacy options.
      </Text>

      <Pressable
        style={{
          marginTop: 20,
          backgroundColor: "#444",
          padding: 12,
          borderRadius: 8,
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          Back to Profile
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
