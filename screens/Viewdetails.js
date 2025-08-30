import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Dimensions,
  StatusBar,
} from "react-native";

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

const GAP = 12;
const COLS = 3;

export default function ViewDetails() {
  const [activeTab, setActiveTab] = useState("Season 1");

  const { itemSize } = useMemo(() => {
    const width = Dimensions.get("window").width;
    const innerWidth = width - 32; // px-4 padding
    const itemW = (innerWidth - GAP * (COLS - 1)) / COLS;
    return { itemSize: itemW };
  }, []);

  const data = activeTab === "Season 1" ? session : infort;

  const renderItem = ({ item }) => (
    <Pressable style={{ width: itemSize }} className="mb-3">
      <Image
        source={{ uri: item.thumbnail || "https://via.placeholder.com/150" }}
        style={{ width: itemSize, height: itemSize }}
        className="rounded-md bg-neutral-800"
      />
      <Text className="mt-1 text-white text-sm font-semibold">
        {item.name || item.title}
      </Text>
      {item.season && <Text className="text-gray-400 text-xs">{item.season}</Text>}
      {item.description && (
        <Text className="text-gray-400 text-xs mt-1">{item.description}</Text>
      )}
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar backgroundColor={"#000"} barStyle="light-content" />
      {/* Header */}
      <View className="px-4">
        <Image
          source={{ uri: "https://via.placeholder.com/300x150" }}
          className="w-full h-52 rounded-md"
        />
        <Text className="text-white text-2xl font-bold mt-3">Aiyyash Queens</Text>
        <Text className="text-gray-400 text-sm mt-1">2023 • 3 Seasons • Drama</Text>
        <Text className="text-gray-300 text-sm mt-2">
          On Diwali night, Mohini, Neeta, and Shanaya play a dangerous game...
        </Text>
        <Pressable className="mt-3 bg-orange-500 py-3 rounded-md items-center">
          <Text className="text-white font-bold text-base">Play Now</Text>
        </Pressable>
      </View>

      {/* Tabs */}
      <View className="flex-row gap-4 mt-4 px-4">
        <Pressable onPress={() => setActiveTab("Season 1")}>
          <Text
            className={`text-sm font-semibold ${
              activeTab === "Season 1" ? "text-white" : "text-gray-400"
            }`}
          >
            Season 1
          </Text>
          {activeTab === "Season 1" && (
            <View className="h-1 bg-orange-500 rounded mt-1" />
          )}
        </Pressable>

        <Pressable onPress={() => setActiveTab("Cast")}>
          <Text
            className={`text-sm font-semibold ${
              activeTab === "Cast" ? "text-white" : "text-gray-400"
            }`}
          >
            Cast
          </Text>
          {activeTab === "Cast" && (
            <View className="h-1 bg-orange-500 rounded mt-1" />
          )}
        </Pressable>
      </View>

      {/* Section Title */}
      <Text className="mt-4 px-4 text-lg text-white font-bold">
        {activeTab === "Season 1" ? "Episodes" : "Cast"}
      </Text>

      {/* List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={activeTab === "Season 1" ? 1 : 3}
        columnWrapperStyle={activeTab !== "Season 1" && { gap: GAP }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ListEmptyComponent={
          <Text className="text-gray-400 text-center py-6">
            No data available
          </Text>
        }
      />
    </SafeAreaView>
  );
}
