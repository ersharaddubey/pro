import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Share,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons"; 
import { palette, spacing, typography, radius } from "../Components/theme";
const { width } = Dimensions.get("window");



const IMAGE_URL =
  "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg";

const sliderImages = [
  { id: "1", image: IMAGE_URL },
  { id: "2", image: "https://picsum.photos/800/400?1" },
  { id: "3", image: "https://picsum.photos/800/400?2" },
];

const DATA = {
  All: [
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
      section: "Binge Worthy",
      items: [
         { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
        { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      ],
    },
    {
      section: "lets play Blind",
      items: [
         { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
        { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      ],
    },
    {
      section: "Bolllywood Binge",
      items: [
         { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
        { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      ],
    },
    {
      section: "Bolllywood BingBubbed in Hindi",
      items: [
         { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
        { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      ],
    },
    {
      section: "New Releases",
      items: [
         { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
        { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      ],
    },
    {
      section: "Independent Films",
      items: [
         { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
        { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      ],
    },
    {
      section: "Total Thrill",
      items: [
         { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
        { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      ],
    },
     {
      section: "THollywood Special",
      items: [
         { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
        { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      ],
    },
    {
      section: "Audio Originals",
      items: [
         { id: "1", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "2", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
        { id: "3", title: "WTF is with Nikhil", author: "Nikhil Kamath", image: IMAGE_URL },
        { id: "4", title: "Poetry Sessions", author: "Nevadit Chaudhary", image: IMAGE_URL },
      ],
    },
  ],

  Originals: [
    {
      section: "Bollywood Hungama",
      items: [
        { id: "5", title: "Original Show 1", author: "Director A", image: IMAGE_URL },
        { id: "6", title: "Original Show 2", author: "Director B", image: IMAGE_URL },
      ],
    },
  ],
  
  Originals: [
    {
      section: "Hidden Gems",
      items: [
        { id: "5", title: "Original Show 1", author: "Director A", image: IMAGE_URL },
        { id: "6", title: "Original Show 2", author: "Director B", image: IMAGE_URL },
      ],
    },
  ],
  Originals: [
    {
      section: "Dekha kya ?",
      items: [
        { id: "5", title: "Original Show 1", author: "Director A", image: IMAGE_URL },
        { id: "6", title: "Original Show 2", author: "Director B", image: IMAGE_URL },
      ],
    },
  ],
  Originals: [
    {
      section: "Top Bhojpuri Movies",
      items: [
        { id: "5", title: "Original Show 1", author: "Director A", image: IMAGE_URL },
        { id: "6", title: "Original Show 2", author: "Director B", image: IMAGE_URL },
      ],
    },
  ],


  Cricket: [
    {
      section: "Highlights",
      items: [
        { id: "7", title: "Match 1", author: "India vs Aus", image: IMAGE_URL },
        { id: "8", title: "Match 2", author: "India vs Eng", image: IMAGE_URL },
      ],
    },
  ],
};

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState("All");
  const navigation = useNavigation();

  const renderSection = ({ item }) => {
    // ✅ Slider
    if (item.type === "slider") {
      return (
        <View style={styles.sliderWrapper}>
          <FlatList
            data={sliderImages}
            horizontal
            pagingEnabled
            keyExtractor={(it) => it.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={{ uri: item.image }} style={styles.sliderImage} />
            )}
          />
          <View style={styles.sliderOverlay}>
            <SubscribeShareButtons />
          </View>
        </View>
      );
    }

    // ✅ Sections
    return (
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.sectionTitle}>{item.section}</Text>
        <FlatList
          horizontal
          data={item.items}
          keyExtractor={(it) => item.section + "-" + it.id}
          renderItem={({ item: it }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("ViewDetails", { item: it })}
            >
              <Image source={{ uri: it.image }} style={styles.image} />
              <Text style={styles.title}>{it.title}</Text>
              <Text style={styles.author}>{it.author}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  // ✅ merge slider + selectedTab sections
  const listData = [{ type: "slider", id: "slider" }, ...DATA[selectedTab]];

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        {["All", "Originals", "Cricket"].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTab]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ✅ FlatList instead of ScrollView */}
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#111",
    paddingVertical: 10,
  },
  tabText: { color: "gray", fontSize: 16, fontWeight: "600" },
  activeTab: { color: "white", borderBottomWidth: 2, borderBottomColor: "white" },

  // Slider
  sliderWrapper: { position: "relative", marginBottom: 20 },
  sliderImage: { width: width, height: 200, borderRadius: 12, marginRight: 10 },
  sliderOverlay: { position: "absolute", top: "40%", left: 0, right: 0, alignItems: "center" },

  // Subscribe/Share
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 8,
    borderRadius: 30,
  },
  subscribeBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  subscribeText: { color: "#222", marginLeft: 7, fontWeight: "600", fontSize: 15 },
  shareBtn: {
    backgroundColor: "#e50914",
    borderRadius: 20,
    padding: 9,
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: { color: "white", fontSize: 18, fontWeight: "bold", marginLeft: 10, marginBottom: 5 },
  card: { marginHorizontal: 10, width: 140 },
  image: { width: 140, height: 140, borderRadius: 10 },
  title: { color: "white", fontWeight: "600", marginTop: 5 },
  author: { color: "gray", fontSize: 12 },
});