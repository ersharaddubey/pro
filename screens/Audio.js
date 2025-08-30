import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { palette, spacing, typography, radius } from "../Components/theme";

const DATA = [
  {
    section: "Hidden Gems",
    items: [
      { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg" },
      { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg" },
    ],
  },
  {
    section: "Audio Dramas",
    items: [
      { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg" },
      { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg" },
    ],
  },
];

export default function Audio() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((section) => (
          <View key={section.section} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.section}</Text>
            <FlatList
              horizontal
              data={section.items}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.author}>{item.author}</Text>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginVertical: spacing.sm || 10,
  },
  sectionTitle: {
    color: palette.text || "white",
    fontSize: typography.h2 || 18,
    fontWeight: typography.weightBold || "bold",
    marginLeft: spacing.lg || 10,
    marginBottom: spacing.xs || 5,
    marginTop: spacing.sm || 10,
  },
  card: {
    marginHorizontal: spacing.sm || 10,
    width: 140,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: radius.md || 10,
    backgroundColor: palette.card || "#222",
  },
  title: {
    color: palette.text || "white",
    fontWeight: typography.weightSemi || "600",
    marginTop: spacing.xs || 5,
  },
  author: {
    color: palette.textDim || "gray",
    fontSize: typography.small || 12,
  },
});