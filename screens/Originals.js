import React, { useState, useRef } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { Video } from "expo-av";
const { height } = Dimensions.get("window");

const videoData = [
  { id: "1", uri: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "2", uri: "https://www.w3schools.com/html/movie.mp4" },
  { id: "3", uri: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

export default function Originals() {
  const [visibleVideoIndex, setVisibleVideoIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setVisibleVideoIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });

  return (
    <FlatList
      data={videoData}
      pagingEnabled
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View className="bg-black justify-center items-center" style={{ height }}>
          <Video
            className="w-full h-full"
            source={{ uri: item.uri }}
            resizeMode="cover"
            shouldPlay={visibleVideoIndex === index} // ✅ सिर्फ current play होगा
            isLooping
          />
          <View className="absolute bottom-16 left-5">
            <Text className="text-white text-lg font-bold">Video {item.id}</Text>
          </View>
        </View>
      )}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
    />
  );
}
