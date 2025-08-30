import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HungamaScreen() {
  const [activeTopTab, setActiveTopTab] = useState("Audio");
  const [activeSubTab, setActiveSubTab] = useState("All");

  const topTabs = ["Audio", "Videos", "Purchases"];
  const subTabs = {
    Audio: ["All", "Audio Books", "Audio Stories", "Podcasts"],
    Videos: ["All", "Movies", "Shows"],
    Purchases: ["All", "Active", "History"],
  };

  const getSubTabs = () => subTabs[activeTopTab] || [];

  return (
    <LinearGradient colors={["#000", "#111"]} style={styles.container}>
      {/* Top Tabs */}
      <View style={styles.topTabs}>
        {topTabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => {
              setActiveTopTab(tab);
              setActiveSubTab("All");
            }}
            style={[
              styles.topTab,
              activeTopTab === tab && styles.activeTopTab,
            ]}
          >
            <Text
              style={[
                styles.topTabText,
                activeTopTab === tab && styles.activeTopTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Sub Tabs - Equal Width */}
      <View style={styles.subTabs}>
        {getSubTabs().map((sub) => (
          <TouchableOpacity
            key={sub}
            onPress={() => setActiveSubTab(sub)}
            style={[
              styles.subTab,
              activeSubTab === sub && styles.activeSubTab,
            ]}
          >
            <Text
              style={[
                styles.subTabText,
                activeSubTab === sub && styles.activeSubTabText,
              ]}
            >
              {sub}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.emptyStateText}>
          No {activeSubTab.toLowerCase()} {activeTopTab.toLowerCase()} yet 🎶{"\n"}
          Explore and add to your library now!
        </Text>

        <TouchableOpacity style={styles.exploreButton} activeOpacity={0.8}>
          <Text style={styles.exploreButtonText}>Explore {activeTopTab}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },

  topTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#111",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },

  topTab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  activeTopTab: {
    backgroundColor: "#FF6F00",
  },

  topTabText: {
    color: "#aaa",
    fontSize: 15,
    fontWeight: "500",
  },

  activeTopTabText: {
    color: "#fff",
    fontWeight: "700",
  },

  subTabs: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "#000",
  },

  subTab: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 18,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
  },

  activeSubTab: {
    backgroundColor: "#FF6F00",
  },

  subTabText: {
    color: "#ccc",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },

  activeSubTabText: {
    color: "#fff",
    fontWeight: "700",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  emptyStateText: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },

  exploreButton: {
    backgroundColor: "#FF6F00",
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 30,
    shadowColor: "#FF6F00",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },

  exploreButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    textTransform: "uppercase",
  },
});
