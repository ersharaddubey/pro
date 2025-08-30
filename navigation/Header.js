import React from "react";
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TopTabs from "./TopTabs";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  console.log("Header insets:", insets);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.postimg.cc/Dz1cHhN9/Whats-App-Image-2025-08-24-at-1-42-02-PM-1.jpg",
          }}
          style={styles.logo}
          resizeMode="contain"
          onError={(e) => console.log("Logo load error:", e.nativeEvent.error)}
        />
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => {
            console.log("Navigating to Profile");
            navigation.getParent()?.navigate("Profile") || navigation.navigate("Profile");
          }}
        >
          <Icon name="person-circle-outline" size={28} color="#fff" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>65</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TopTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: "#000",
    zIndex: 100,
  },
  logo: {
    width: 120,
    height: 30,
  },
  profileContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#f00",
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
});