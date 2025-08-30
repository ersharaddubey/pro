import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "react-native-vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { palette, spacing, typography, radius } from "../Components/theme";

const { width } = Dimensions.get("window");

function SubscribeShareButtons() {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.subscribeBtn}
        accessibilityLabel="Subscribe now"
        accessibilityRole="button"
      >
        <FontAwesome5 name="crown" size={18} color={palette.textDark || "#222"} />
        <Text style={styles.subscribeText}>Subscribe Now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shareBtn}
        accessibilityLabel="Share content"
        accessibilityRole="button"
      >
        <Ionicons name="share-social" size={20} color={palette.text || "#fff"} />
      </TouchableOpacity>
    </View>
  );
}

const IMAGE_URL = "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg";

const sliderImages = [
  { id: "1", image: IMAGE_URL },
  { id: "2", image: "https://picsum.photos/800/400?1" },
  { id: "3", image: "https://picsum.photos/800/400?2" },
];

const sections = [
  {
    section: "Top Shows",
    items: [
      { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
      { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
      { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
    ],
  },
  {
    section: "Your Next Watch",
    items: [
      { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
      { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
      { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
    ],
  },
  {
    section: "Trending Now",
    items: [
      { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
      { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
      { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
    ],
  },
];

export default function MainHome() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  console.log("MainHome insets:", insets);

  const renderSection = ({ item }) => {
    if (item.type === "slider") {
      return (
        <View style={[styles.sliderWrapper, { paddingHorizontal: spacing.lg || 10 }]}>
          <FlatList
            data={sliderImages}
            horizontal
            pagingEnabled
            keyExtractor={(it) => it.id}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            windowSize={5}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.image }}
                style={[styles.sliderImage, { width: width - (spacing.lg || 20) }]}
                defaultSource={require('../assets/fallback-image.png')}
                onError={(e) => console.log("Slider image load error:", e.nativeEvent.error)}
              />
            )}
          />
          <View style={styles.sliderOverlay}>
            <SubscribeShareButtons />
          </View>
        </View>
      );
    }

    return (
      <View style={[styles.sectionWrapper, { paddingHorizontal: spacing.lg || 10 }]}>
        <Text style={styles.sectionTitle}>{item.section}</Text>
        <FlatList
          horizontal
          data={item.items}
          keyExtractor={(it) => `${item.section}-${it.id}`}
          initialNumToRender={4}
          windowSize={5}
          renderItem={({ item: it }) => (
            <TouchableOpacity
              style={[styles.card, { width: (width - 40) / 3 }]}
              onPress={() => {
                console.log("Navigating to ViewDetails with item:", it);
                navigation.navigate("ViewDetails", { item: it });
              }}
              accessibilityLabel={`View details for ${it.title}`}
              accessibilityRole="button"
            >
              <Image
                source={{ uri: it.image }}
                style={styles.image}
                defaultSource={require('../assets/fallback-image.png')}
                onError={(e) => console.log("Card image load error:", e.nativeEvent.error)}
              />
              <Text style={styles.title}>{it.title}</Text>
              <Text style={styles.author}>{it.author}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: spacing.xs || 5 }}
        />
      </View>
    );
  };

  const listData = [{ type: "slider", id: "slider" }, ...sections];

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: insets.bottom }]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.bg || "#000",
  },
  contentContainer: {
    padding: spacing.lg || 10,
  },
  sliderWrapper: {
    marginBottom: spacing.lg || 20,
  },
  sliderImage: {
    height: 200,
    borderRadius: radius.md || 12,
  },
  sliderOverlay: {
    position: "absolute",
    top: "40%",
    left: spacing.lg || 10,
    right: spacing.lg || 10,
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
  sectionWrapper: {
    marginVertical: spacing.sm || 10,
  },
  sectionTitle: {
    color: palette.text || "white",
    fontSize: typography.h2 || 18,
    fontWeight: typography.weightBold || "bold",
    marginBottom: spacing.xs || 5,
  },
  card: {
    marginHorizontal: spacing.xs || 5,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: radius.md || 10,
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