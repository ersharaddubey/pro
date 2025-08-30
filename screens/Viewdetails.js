import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
  StatusBar,
} from "react-native";
import { palette, spacing, typography, radius } from "../Components/theme";

const infort = [
  { id: "1", name: "Dolly Chawla" },
  { id: "2", name: "Yukti Kapoor" },
  { id: "3", name: "Kangna Sharma" },
  { id: "4", name: "Amy Aela" },
  { id: "5", name: "Akkshith Sukhija" },
  { id: "6", name: "Ribbhu Mehra" },
  { id: "7", name: "Peeyush Suhaney" },
  { id: "8", name: "Ashraf Karim" },
  { id: "9", name: "Samridhi Chadha" },
  { id: "10", name: "Garvit Arora" },
  { id: "11", name: "Shwet Sinha" },
  { id: "12", name: "ASIF MALIK" },
];

const session = [
  {
    id: "1",
    title: "Aiyyash Queens",
    season: "S01 • EP01",
    duration: "23min",
    description: "On Diwali night, Mohini, Neeta, and Shanaya play a dangerous game...",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Bluff Master",
    season: "S01 • EP02",
    duration: "27min",
    description: "The queens get caught in a deadly trap. Secrets unravel...",
    thumbnail: "https://via.placeholder.com/150",
  },
];

const PADDING_H = spacing.lg || 16;
const GAP = spacing.md || 12;
const COLS = 3;

export default function ViewDetails() {
  const [activeTab, setActiveTab] = useState("Season 1");

  const { itemSize } = useMemo(() => {
    const width = Dimensions.get("window").width;
    const innerWidth = width - PADDING_H * 2;
    const itemW = (innerWidth - GAP * (COLS - 1)) / COLS;
    return { itemSize: itemW };
  }, []);

  const data = activeTab === "Season 1" ? session : infort;

  const renderItem = ({ item }) => (
    <Pressable style={[styles.card, { width: itemSize }]}>
      <Image
        source={{ uri: item.thumbnail || "https://via.placeholder.com/150" }}
        style={[styles.avatar, { width: itemSize, height: itemSize }]}
        onError={(e) => console.log("Cast image load error:", e.nativeEvent.error)}
      />
      <Text style={styles.name}>{item.name || item.title}</Text>
      {item.season && <Text style={styles.subName}>{item.season}</Text>}
      {item.description && <Text style={styles.description}>{item.description}</Text>}
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={palette.bg || "#000"} barStyle="light-content" />
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/300x150" }}
          style={styles.headerImage}
          onError={(e) => console.log("Header image load error:", e.nativeEvent.error)}
        />
        <Text style={styles.headerTitle}>Aiyyash Queens</Text>
        <Text style={styles.headerSubtitle}>2023 • 3 Seasons • Drama</Text>
        <Text style={styles.headerDescription}>
          On Diwali night, Mohini, Neeta, and Shanaya play a dangerous game...
        </Text>
        <Pressable style={styles.playButton}>
          <Text style={styles.playText}>Play Now</Text>
        </Pressable>
      </View>

      <View style={styles.tabsRow}>
        <Pressable style={styles.tab} onPress={() => setActiveTab("Season 1")}>
          <Text
            style={[styles.tabLabel, activeTab === "Season 1" && styles.tabLabelActive]}
          >
            Season 1
          </Text>
          {activeTab === "Season 1" && <View style={styles.tabIndicator} />}
        </Pressable>
        <Pressable style={styles.tab} onPress={() => setActiveTab("Cast")}>
          <Text style={[styles.tabLabel, activeTab === "Cast" && styles.tabLabelActive]}>
            Cast
          </Text>
          {activeTab === "Cast" && <View style={styles.tabIndicator} />}
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>{activeTab === "Season 1" ? "Episodes" : "Cast"}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={activeTab === "Season 1" ? 1 : 3}
        columnWrapperStyle={activeTab !== "Season 1" && { gap: GAP }}
        style={{ marginHorizontal: PADDING_H }}
        ListEmptyComponent={<Text style={styles.emptyText}>No data available</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: PADDING_H,
  },
  headerImage: {
    width: "100%",
    height: 200,
    borderRadius: radius.md || 8,
  },
  headerTitle: {
    color: palette.text || "#FFFFFF",
    fontSize: typography.h2 || 22,
    fontWeight: typography.weightBold || "700",
    marginTop: spacing.md || 12,
  },
  headerSubtitle: {
    color: palette.textDim || "#A8A8B3",
    fontSize: typography.small || 14,
    marginTop: spacing.xs || 4,
  },
  headerDescription: {
    color: palette.text || "#EDEDF2",
    fontSize: typography.small || 14,
    marginTop: spacing.sm || 8,
  },
  playButton: {
    marginTop: spacing.md || 12,
    backgroundColor: palette.accent || "#FF7A00",
    paddingVertical: spacing.md || 14,
    borderRadius: radius.md || 8,
    alignItems: "center",
  },
  playText: {
    color: palette.text || "#FFFFFF",
    fontWeight: typography.weightBold || "700",
    fontSize: typography.body || 16,
    letterSpacing: 0.3,
  },
  tabsRow: {
    marginTop: spacing.md || 16,
    flexDirection: "row",
    gap: spacing.md || 16,
  },
  tab: {
    paddingVertical: spacing.sm || 8,
  },
  tabLabel: {
    color: palette.textDim || "#A8A8B3",
    fontSize: typography.body || 15,
    fontWeight: typography.weightSemi || "600",
  },
  tabLabelActive: {
    color: palette.text || "#FFFFFF",
  },
  tabIndicator: {
    marginTop: spacing.xs || 6,
    height: 3,
    backgroundColor: palette.accent || "#FF7A00",
    borderRadius: radius.xs || 2,
  },
  sectionTitle: {
    marginTop: spacing.md || 16,
    color: palette.text || "#FFFFFF",
    fontSize: typography.h2 || 18,
    fontWeight: typography.weightBold || "700",
  },
  card: {
    marginBottom: GAP,
  },
  avatar: {
    borderRadius: radius.md || 8,
    backgroundColor: palette.card || "#22232B",
  },
  name: {
    marginTop: spacing.xs || 6,
    color: palette.text || "#EDEDF2",
    fontSize: typography.small || 13,
    fontWeight: typography.weightSemi || "600",
  },
  subName: {
    color: palette.textDim || "#A8A8B3",
    fontSize: typography.small || 12,
  },
  description: {
    color: palette.textDim || "#A8A8B3",
    fontSize: typography.small || 12,
    marginTop: spacing.xs || 4,
  },
  emptyText: {
    color: palette.textDim || "#A8A8B3",
    textAlign: "center",
    paddingVertical: spacing.lg || 24,
  },
});