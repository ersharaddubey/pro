import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Share,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const IMAGE_URL =
  "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg";

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
        <View className="mb-6 relative">
          <FlatList
            data={sliderImages}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(it) => it.id}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.image }}
                style={{ width: width - 20, height: 200 }}
                className="rounded-xl mr-2"
              />
            )}
          />

          {/* Overlay */}
          <View className="absolute top-[40%] w-full flex-row justify-center">
            <View className="flex-row items-center bg-black/60 px-3 py-2 rounded-full">
              {/* Subscribe Button */}
              <TouchableOpacity className="flex-row items-center bg-white rounded-full px-4 py-2 mr-2">
                <FontAwesome name="crown" size={18} color="#000" />
                <Text className="text-black font-semibold ml-2">
                  Subscribe Now
                </Text>
              </TouchableOpacity>

              {/* Share Button */}
              <TouchableOpacity
                className="bg-red-600 rounded-full p-2"
                onPress={() =>
                  Share.share({ message: "Check out Hungama OTT!" })
                }
              >
                <Ionicons name="share-social" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }

    if (item.type === "languages") {
      return (
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-3">
            {item.title}
          </Text>
          <FlatList
            data={chunkArray(languages, 3)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => `lang-${i}`}
            renderItem={({ item: langChunk }) => (
              <View style={{ width: width - 20 }} className="flex-row justify-evenly">
                {langChunk.map((lang) => (
                  <View
                    key={lang.id}
                    style={{ backgroundColor: lang.color }}
                    className="w-[100px] h-[70px] rounded-lg justify-center items-center m-1"
                  >
                    <Text className="text-white font-bold">{lang.name}</Text>
                  </View>
                ))}
              </View>
            )}
          />
        </View>
      );
    }

    if (item.type === "movies" || item.type === "games") {
      return (
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-3">
            {item.title}
          </Text>
          <FlatList
            data={games}
            horizontal
            keyExtractor={(it) => it.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="mr-4 w-[180px]">
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-[120px] rounded-lg"
                />
                <Text className="text-white mt-2 text-sm">{item.name}</Text>
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
      className="bg-black flex-1 px-3"
    />
  );
}
