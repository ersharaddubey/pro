import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { palette, spacing, typography, radius } from "../Components/theme";

const { width } = Dimensions.get("window");

const IMAGE_URL = "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg";

const languages = [
  { id: "1", name: "Hindi", color: "#f28b25" },
  { id: "2", name: "Tamil", color: "#d89c28" },
  { id: "3", name: "English", color: "#4a73c9" },
  { id: "4", name: "Hindi", color: "#f28b25" },
  { id: "5", name: "Tamil", color: "#d89c28" },
  { id: "6", name: "English", color: "#4a73c9" },
  { id: "7", name: "Hindi", color: "#f28b25" },
  { id: "8", name: "Tamil", color: "#d89c28" },
  { id: "9", name: "English", color: "#4a73c9" },
  { id: "10", name: "Hindi", color: "#f28b25" },
  { id: "11", name: "Tamil", color: "#d89c28" },
  { id: "12", name: "English", color: "#4a73c9" },
  { id: "13", name: "Hindi", color: "#f28b25" },
  { id: "14", name: "Tamil", color: "#d89c28" },
  { id: "15", name: "English", color: "#4a73c9" },
];

const games = [
  {
    id: "1",
    name: "Kitchen Sorting",
    image: IMAGE_URL,
    title: "Kitchen Sorting",
    author: "Game Studio",
    description: "Sort ingredients in a fast-paced kitchen challenge.",
  },
  {
    id: "2",
    name: "Watermelon Fusion",
    image: IMAGE_URL,
    title: "Watermelon Fusion",
    author: "Fruit Lab",
    description: "Merge fruits and unlock juicy combos.",
  },
  {
    id: "3",
    name: "Watermelon Fusion",
    image: IMAGE_URL,
    title: "Watermelon Fusion",
    author: "Fruit Lab",
    description: "Merge fruits and unlock juicy combos.",
  },
  {
    id: "4",
    name: "Watermelon Fusion",
    image: IMAGE_URL,
    title: "Watermelon Fusion",
    author: "Fruit Lab",
    description: "Merge fruits and unlock juicy combos.",
  },
];

const sections = [
  { id: "languages", type: "languages", title: "Browse by Language" },
  { id: "top", type: "movies", title: "Top Movies" },
  { id: "next", type: "movies", title: "Recommended" },
];

export default function Movies() {
  const navigation = useNavigation();

  const renderSection = ({ item }) => {
    if (item.type === "languages") {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
          <FlatList
            data={languages}
            horizontal
            keyExtractor={(it) => it.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={[styles.langCard, { backgroundColor: item.color }]}>
                <Text style={styles.langText}>{item.name}</Text>
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
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate("ViewDetails", { item })}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>{item.author}</Text>
              </TouchableOpacity>
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
  section: { marginBottom: spacing.lg || 20 },
  sectionTitle: {
    color: palette.text || "#fff",
    fontSize: typography.h2 || 18,
    fontWeight: typography.weightBold || "bold",
    marginBottom: spacing.sm || 10,
  },
  card: {
    width: 120,
    marginRight: spacing.sm || 10,
    borderRadius: radius.md || 10,
    backgroundColor: palette.card || "#222",
    padding: spacing.xs || 6,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: radius.md || 8,
  },
  title: {
    color: palette.text || "#fff",
    fontSize: typography.body || 14,
    fontWeight: typography.weightSemi || "600",
    marginTop: spacing.xs || 6,
  },
  author: {
    color: palette.textDim || "#aaa",
    fontSize: typography.small || 12,
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
    fontWeight: typography.weightBold || "bold",
  },
});