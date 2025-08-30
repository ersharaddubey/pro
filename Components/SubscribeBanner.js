import React from "react";
import { View, Text, Pressable, Platform } from "react-native";

export function SubscribeBanner({ onSubscribe }) {
  return (
    <View
      className={`bg-cardAlt border-t border-border px-4 pt-3 ${
        Platform.OS === "ios" ? "pb-6" : "pb-4"
      }`}
      accessibilityRole="summary"
      accessibilityLabel="Subscription prompt"
    >
      {/* Copy */}
      <View className="mb-3">
        <Text className="text-text text-sm font-bold">
          Unlock unlimited downloads/streaming
        </Text>
        <Text className="text-textDim text-xs mt-1">
          Go ad-free and stream in top quality.
        </Text>
      </View>

      {/* CTA Button */}
      <Pressable
        onPress={onSubscribe}
        className="bg-accentAlt rounded-md py-3 items-center justify-center active:opacity-90"
      >
        <Text className="text-[#1B100A] font-bold text-sm">
          Subscribe Now
        </Text>
      </Pressable>
    </View>
  );
}
