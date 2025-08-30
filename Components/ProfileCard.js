import React from "react";
import { View, Text, Pressable } from "react-native";

export function ProfileCard({ username, planLabel, coins, onEarn, onRedeem }) {
  const initials = username?.[0]?.toUpperCase() ?? "U";

  return (
    <View className="bg-cardAlt rounded-xl border border-border p-4">
      {/* Header row */}
      <View className="flex-row items-center">
        {/* Avatar */}
        <View className="w-[52px] h-[52px] rounded-full bg-[#23232D] items-center justify-center mr-3">
          <Text className="text-text text-xl font-bold">{initials}</Text>
        </View>

        {/* Username + Plan */}
        <View className="flex-1">
          <Text className="text-text text-base font-bold">{username}</Text>
          <Text className="text-textDim text-xs mt-0.5">{planLabel}</Text>
        </View>

        {/* Coins pill */}
        <View className="px-3 py-1 rounded-full bg-accent ml-3">
          <Text className="text-[#1B1200] font-bold text-xs">{coins} Coins</Text>
        </View>
      </View>

      {/* CTA buttons */}
      <View className="flex-row gap-3 mt-4">
        <Pressable
          onPress={onEarn}
          className="flex-1 bg-accent rounded-md items-center justify-center py-3"
        >
          <Text className="text-[#1B1200] font-bold">Earn Coins</Text>
        </Pressable>

        <Pressable
          onPress={onRedeem}
          className="flex-1 bg-[#2B2B35] rounded-md items-center justify-center py-3 border border-border"
        >
          <Text className="text-text font-semibold">Redeem Coins</Text>
        </Pressable>
      </View>

      {/* Helper text */}
      <Text className="text-textDim text-xs mt-3">
        Use coins to unlock exciting deals and digital coupons.
      </Text>
    </View>
  );
}
