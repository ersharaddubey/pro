import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { palette, spacing, typography, radius } from "../Components/theme";

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
    <LinearGradient colors={["#000", "#000"]} style={styles.container}>
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
          Add {activeSubTab.toLowerCase()} content to your library{"\n"}
          Explore some new {activeTopTab.toLowerCase()} content and videos now
        </Text>

        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreButtonText}>Explore {activeTopTab}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 48,
  },

  topTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#111",
  },

  topTab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  activeTopTab: {
    backgroundColor: "#FF6F00",
  },

  topTabText: {
    color: "#aaa",
    fontSize: 14,
    fontWeight: "500",
  },

  activeTopTabText: {
    color: "#fff",
    fontWeight: "700",
  },

  subTabs: {
    flexDirection: "row",
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  subTab: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: "#222",
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
    fontWeight: "600",
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
    marginBottom: 20,
  },

  exploreButton: {
    backgroundColor: "#FF6F00",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
  },

  exploreButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
