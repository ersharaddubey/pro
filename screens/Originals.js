import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, Dimensions, StyleSheet, Text } from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { SafeAreaView } from "react-native-safe-area-context";
import { palette, spacing, typography, radius } from "../Components/theme";

const { width, height } = Dimensions.get("window");

const videoData = [
  {
    id: "1",
    uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Big Buck Bunny",
  },
  {
    id: "2",
    uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    title: "Elephants Dream",
  },
];

export default function Originals() {
  const [visibleVideoIndex, setVisibleVideoIndex] = useState(0);
  const videoRefs = useRef(videoData.map(() => React.createRef()));
  const players = useRef(videoData.map((item) => useVideoPlayer(item.uri, (player) => {
    player.loop = true;
  })));

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      setVisibleVideoIndex(index);
    }
  }).current;

  useEffect(() => {
    players.current.forEach((player, index) => {
      if (index === visibleVideoIndex) {
        player.play().catch((e) => console.log("Play error:", e));
      } else {
        player.pause().catch((e) => console.log("Pause error:", e));
      }
    });

    return () => {
      players.current.forEach((player) => {
        player.pause().catch((e) => console.log("Pause error:", e));
        player.stop().catch((e) => console.log("Stop error:", e));
      });
    };
  }, [visibleVideoIndex]);

  const renderItem = ({ item, index }) => (
    <View style={styles.videoContainer}>
      <VideoView
        ref={videoRefs.current[index]}
        player={players.current[index]}
        style={styles.video}
        allowsFullscreen
        allowsPictureInPicture
        nativeControls={false}
        onError={(e) => console.log("Video load error:", e)}
      />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: palette.text || "#fff",
    fontSize: typography.body || 16,
    fontWeight: typography.weightSemi || "600",
    position: "absolute",
    bottom: spacing.lg || 10,
    left: spacing.lg || 10,
  },
});