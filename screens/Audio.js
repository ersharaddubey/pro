import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    section: "Hidden Gems",
    items: [
      {
        id: "1",
        title: "WTF is with Nikhil",
        author: "Nikhil Kamath",
        image:
          "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg",
      },
      {
        id: "2",
        title: "Poetry Sessions",
        author: "Nevadit Chaudhary",
        image:
          "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg",
      },
    ],
  },
  {
    section: "Audio Dramas",
    items: [
      {
        id: "3",
        title: "WTF is with Nikhil",
        author: "Nikhil Kamath",
        image:
          "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg",
      },
      {
        id: "4",
        title: "Poetry Sessions",
        author: "Nevadit Chaudhary",
        image:
          "https://cdn.pixabay.com/photo/2025/03/13/10/50/fall-9467534_1280.jpg",
      },
    ],
  },
];

export default function Audio() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((section) => (
          <View key={section.section} className="mb-6">
            {/* Section Title */}
            <Text className="text-white text-lg font-bold ml-4 mb-2">
              {section.section}
            </Text>

            {/* Horizontal Cards */}
            <FlatList
              horizontal
              data={section.items}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="w-[140px] mx-2">
                  <Image
                    source={{ uri: item.image }}
                    className="w-[140px] h-[140px] rounded-lg bg-neutral-800"
                  />
                  <Text
                    className="text-white font-semibold mt-1"
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <Text className="text-gray-400 text-xs">{item.author}</Text>
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
