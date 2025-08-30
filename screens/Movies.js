import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const IMAGE_URL =
  "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg";

const languages = [
  { id: "1", name: "Hindi", color: "#f28b25" },
  { id: "2", name: "Tamil", color: "#d89c28" },
  { id: "3", name: "English", color: "#4a73c9" },
  { id: "4", name: "Hindi", color: "#f28b25" },
  { id: "5", name: "Tamil", color: "#d89c28" },
  { id: "6", name: "English", color: "#4a73c9" },
];

const games = [
  {
    id: "1",
    title: "Kitchen Sorting",
    author: "Game Studio",
    image: IMAGE_URL,
  },
  {
    id: "2",
    title: "Watermelon Fusion",
    author: "Fruit Lab",
    image: IMAGE_URL,
  },
  {
    id: "3",
    title: "Fruit Ninja Clone",
    author: "Fruit Lab",
    image: IMAGE_URL,
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
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-3">{item.title}</Text>
          <FlatList
            data={languages}
            horizontal
            keyExtractor={(it) => it.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                className="w-28 h-16 rounded-lg justify-center items-center mx-2"
                style={{ backgroundColor: item.color }}
              >
                <Text className="text-white font-bold">{item.name}</Text>
              </View>
            )}
          />
        </View>
      );
    }

    if (item.type === "movies") {
      return (
        <View className="mb-6">
          <Text className="text-white text-lg font-bold mb-3">{item.title}</Text>
          <FlatList
            data={games}
            horizontal
            keyExtractor={(it) => it.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="w-32 mr-3 rounded-lg bg-neutral-900 p-2"
                onPress={() => navigation.navigate("ViewDetails", { item })}
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-36 rounded-md"
                />
                <Text
                  className="text-white font-semibold mt-2"
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text className="text-gray-400 text-xs">{item.author}</Text>
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
      className="flex-1 bg-black px-4"
    />
  );
}
