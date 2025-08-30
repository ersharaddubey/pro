import React from "react";
import { View, Text, Pressable, Switch } from "react-native";

export function Row({
  title,
  subtitle,
  rightType = "chevron",
  valueText,
  switchValue,
  onToggle,
  onPress,
  destructive,
  testID,
}) {
  const content = (
    <View className="min-h-[56px] px-4 py-3 flex-row items-center">
      {/* Left Section */}
      <View className="flex-1 pr-3">
        <Text
          className={`text-base font-semibold ${destructive ? "text-danger" : "text-text"}`}
          numberOfLines={1}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text className="text-textDim text-xs mt-0.5">{subtitle}</Text>
        ) : null}
      </View>

      {/* Right Section */}
      <View className="flex-row items-center gap-2">
        {rightType === "value" && valueText ? (
          <Text className="text-textDim text-sm">{valueText}</Text>
        ) : null}

        {rightType === "switch" ? (
          <Switch
            trackColor={{ false: "#3C3C46", true: "#FF6F00" }} // accent color from tailwind.config.js
            thumbColor="#FFFFFF"
            value={!!switchValue}
            onValueChange={onToggle}
          />
        ) : null}

        {rightType === "chevron" ? (
          <Text className="text-textDim text-2xl ml-2">›</Text>
        ) : null}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        className="bg-card active:bg-[#121219]"
        testID={testID}
      >
        {content}
      </Pressable>
    );
  }

  return <View className="bg-card">{content}</View>;
}
