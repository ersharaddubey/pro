import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Share,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { palette, spacing, typography, radius } from "../Components/theme";

const { width } = Dimensions.get("window");

const IMAGE_URL = "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg";

const sliderImages = [
  { id: "1", image: IMAGE_URL },
  { id: "2", image: "https://picsum.photos/800/400?1" },
  { id: "3", image: "https://picsum.photos/800/400?2" },
];

const languages = [
  { id: "1", name: "Hindi", color: "#f28b25" },
  { id: "2", name: "Tamil", color: "#d89c28" },
  { id: "3", name: "Bhojpuri", color: "#f28b25" },
  { id: "4", name: "English", color: "#4a73c9" },
  { id: "5", name: "Telugu", color: "#41c9c5" },
  { id: "6", name: "Malayalam", color: "#7ec75f" },
  { id: "7", name: "Punjabi", color: "#e46d6d" },
  { id: "8", name: "Kannada", color: "#5fc780" },
  { id: "9", name: "Marathi", color: "#9b5fc7" },
  { id: "10", name: "Bengali", color: "#f28b25" },
  { id: "11", name: "Odia", color: "#e1a467" },
];

const games = [
  { id: "1", name: "Kitchen Sorting", image: IMAGE_URL },
  { id: "2", name: "Watermelon Fusion", image: IMAGE_URL },
];

const chunkArray = (arr, size) =>
  arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);

const sections = [
  { id: "slider", type: "slider" },
  { id: "languages", type: "languages", title: "Browse by Language" },
  { id: "top", type: "movies", title: "Audio Originals" },
  { id: "next", type: "movies", title: "Audio Dramas" },
  { id: "binge", type: "movies", title: "Talking Divas" },
  { id: "games", type: "games", title: "Games" },
];

export default function Audiot() {
  const renderSection = ({ item }) => {
    if (item.type === "slider") {
      return (
        <View style={styles.sliderWrapper}>
          <FlatList
            data={sliderImages}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(it) => it.id}
            renderItem={({ item }) => (
              <Image source={{ uri: item.image }} style={styles.sliderImage} />
            )}
          />
          <View style={styles.sliderOverlay}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.subscribeBtn}>
                <FontAwesome name="crown" size={18} color={palette.textDark || "#222"} />
                <Text style={styles.subscribeText}>Subscribe Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shareBtn}
                onPress={() => Share.share({ message: "Check out Hungama OTT!" })}
              >
                <Ionicons name="share-social" size={20} color={palette.text || "#fff"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }

    if (item.type === "languages") {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
          <FlatList
            data={chunkArray(languages, 3)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(it, i) => `lang-${i}`}
            renderItem={({ item: langChunk }) => (
              <View style={styles.langSlide}>
                {langChunk.map((lang) => (
                  <View
                    key={lang.id}
                    style={[styles.langCard, { backgroundColor: lang.color }]}
                  >
                    <Text style={styles.langText}>{lang.name}</Text>
                  </View>
                ))}
              </View>
            )}
          />
        </View>
      );
    }

    if (item.type === "movies") {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
          <FlatList
            data={games}
            horizontal
            keyExtractor={(it) => it.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.gameCard}>
                <Image source={{ uri: item.image }} style={styles.gameImage} />
                <Text style={styles.gameText}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      );
    }

    if (item.type === "games") {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
          <FlatList
            data={games}
            horizontal
            keyExtractor={(it) => it.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.gameCard}>
                <Image source={{ uri: item.image }} style={styles.gameImage} />
                <Text style={styles.gameText}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      );
    }

    return null;
  };

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.id}
      renderItem={renderSection}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  sliderWrapper: { position: "relative", marginBottom: spacing.lg || 20 },
  sliderImage: {
    width: width - (spacing.lg || 20),
    height: 200,
    borderRadius: radius.md || 12,
    marginRight: spacing.sm || 10,
  },
  sliderOverlay: {
    position: "absolute",
    top: "40%",
    left: spacing.lg || 0,
    right: spacing.lg || 0,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: spacing.sm || 8,
    borderRadius: radius.pill || 30,
  },
  subscribeBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: palette.card || "#fff",
    borderRadius: radius.pill || 20,
    paddingVertical: spacing.xs || 6,
    paddingHorizontal: spacing.md || 14,
    marginRight: spacing.sm || 10,
  },
  subscribeText: {
    color: palette.textDark || "#222",
    marginLeft: spacing.xs || 7,
    fontWeight: typography.weightSemi || "600",
    fontSize: typography.body || 15,
  },
  shareBtn: {
    backgroundColor: palette.accent || "#e50914",
    borderRadius: radius.pill || 20,
    padding: spacing.sm || 9,
    alignItems: "center",
    justifyContent: "center",
  },
  section: { marginBottom: spacing.lg || 20 },
  sectionTitle: {
    color: palette.text || "#fff",
    fontSize: typography.h2 || 18,
    fontWeight: typography.weightBold || "bold",
    marginBottom: spacing.sm || 10,
  },
  gameCard: { marginRight: spacing.md || 15, width: 180 },
  gameImage: { width: "100%", height: 120, borderRadius: radius.md || 10 },
  gameText: {
    color: palette.text || "#fff",
    marginTop: spacing.xs || 6,
    fontSize: typography.small || 14,
  },
  langSlide: {
    width: width - (spacing.lg || 20),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  langCard: {
    width: width / 3.5,
    height: 70,
    borderRadius: radius.md || 10,
    justifyContent: "center",
    alignItems: "center",
    margin: spacing.xs || 5,
  },
  langText: {
    color: palette.text || "#fff",
    fontSize: typography.body || 16,
    fontWeight: typography.weightBold || "700",
  },
});