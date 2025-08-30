import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

function SubscribeShareButtons() {
  return (
    <View className="flex-row items-center bg-black/60 px-3 py-2 rounded-full">
      <TouchableOpacity className="flex-row items-center bg-white rounded-full px-4 py-2 mr-3">
        <FontAwesome5 name="crown" size={18} color="#222" />
        <Text className="ml-2 text-black font-semibold text-base">
          Subscribe Now
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-red-600 rounded-full p-2">
        <Ionicons name="share-social" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const IMAGE_URL =
  "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg";

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
    ],
  },
  {
    section: "Your Next Watch",
    items: [
      { id: "3", title: "Another Show", author: "Someone", image: IMAGE_URL },
      { id: "4", title: "More Poetry", author: "Author", image: IMAGE_URL },
    ],
  },
];

export default function MainHome() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const renderSection = ({ item }) => {
    if (item.type === "slider") {
      return (
        <View className="mb-5 px-4">
          <FlatList
            data={sliderImages}
            horizontal
            pagingEnabled
            keyExtractor={(it) => it.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.image }}
                style={{ width: width - 32, height: 200 }}
                className="rounded-xl"
              />
            )}
          />
          <View className="absolute top-[40%] left-4 right-4 items-center">
            <SubscribeShareButtons />
          </View>
        </View>
      );
    }

    return (
      <View className="my-3 px-4">
        <Text className="text-white text-lg font-bold mb-2">
          {item.section}
        </Text>
        <FlatList
          horizontal
          data={item.items}
          keyExtractor={(it) => `${item.section}-${it.id}`}
          renderItem={({ item: it }) => (
            <TouchableOpacity
              className="mr-3 w-32"
              onPress={() => navigation.navigate("ViewDetails", { item: it })}
            >
              <Image
                source={{ uri: it.image }}
                className="w-full h-36 rounded-lg"
              />
              <Text className="text-white font-semibold mt-1" numberOfLines={1}>
                {it.title}
              </Text>
              <Text className="text-gray-400 text-xs">{it.author}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const listData = [{ type: "slider", id: "slider" }, ...sections];

  return (
    <SafeAreaView style={{ paddingTop: insets.top }} className="flex-1 bg-black">
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom }}
      />
    </SafeAreaView>
  );
}
