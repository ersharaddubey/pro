import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>grumpyoctopus94</Text>
      <View style={styles.coinRow}>
        <Icon name="wallet-outline" size={20} color="#fff" />
        <Text style={styles.coinText}>65 Coins</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Earn Coins</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Redeem Coins</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <Text style={styles.settingItem}>🔔 Notifications</Text>
        <Text style={styles.settingItem}>🎛️ App Usage</Text>
        <Text style={styles.settingItem}>🚫 Explicit Content</Text>
        <Text style={styles.settingItem}>🎵 Audio Quality</Text>
        <Text style={styles.settingItem}>📺 Video Quality</Text>
        <Text style={styles.settingItem}>📥 Downloads</Text>
      </View>

      <TouchableOpacity style={styles.subscribe}>
        <Text style={styles.subscribeText}>Subscribe Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  coinRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  coinText: { color: "#fff", fontSize: 16, marginLeft: 8 },
  button: {
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "600" },
  section: { marginTop: 20 },
  sectionTitle: { color: "#fff", fontSize: 18, fontWeight: "600", marginBottom: 10 },
  settingItem: { color: "#ccc", fontSize: 14, marginBottom: 6 },
  subscribe: {
    backgroundColor: "#f57c00",
    padding: 14,
    borderRadius: 8,
    marginTop: 30,
    alignItems: "center",
  },
  subscribeText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});