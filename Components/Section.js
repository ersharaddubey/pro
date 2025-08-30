import React from "react";
import { View, Text } from "react-native";

export function Section({ title, subtitle, children }) {
  return (
    <View className="mt-6">
      {/* Title */}
      <Text className="text-text text-lg font-bold mb-2">{title}</Text>

      {/* Subtitle (optional) */}
      {subtitle ? (
        <Text className="text-textDim text-xs mb-2">{subtitle}</Text>
      ) : null}

      {/* Body */}
      <View className="bg-card rounded-lg border border-border overflow-hidden">
        {children}
      </View>
    </View>
  );
}
