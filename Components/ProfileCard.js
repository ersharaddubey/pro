// components/ProfileCard.js
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function ProfileCard({ username, planLabel, coins, onEarn, onRedeem }) {
  const initials = username?.[0]?.toUpperCase() ?? 'U';

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Text style={styles.initial}>{initials}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.plan}>{planLabel}</Text>
        </View>
        <View style={styles.coinPill}>
          <Text style={styles.coinText}>{coins} Coins</Text>
        </View>
      </View>

      <View style={styles.ctas}>
        <Pressable onPress={onEarn} style={({ pressed }) => [styles.cta, pressed && styles.pressed]}>
          <Text style={styles.ctaText}>Earn Coins</Text>
        </Pressable>
        <Pressable onPress={onRedeem} style={({ pressed }) => [styles.ctaAlt, pressed && styles.pressed]}>
          <Text style={styles.ctaAltText}>Redeem Coins</Text>
        </Pressable>
      </View>

      <Text style={styles.helper}>Use coins to unlock exciting deals and digital coupons.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    backgroundColor: palette.cardAlt,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
    padding: spacing.lg,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: radius.pill,
    backgroundColor: '#23232D',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  initial: { color: palette.text, fontSize: typography.h1, fontWeight: typography.weightBold },
  username: { color: palette.text, fontSize: typography.title, fontWeight: typography.weightBold },
  plan: { color: palette.textDim, fontSize: typography.small, marginTop: 2 },
  coinPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    backgroundColor: palette.accent,
    marginLeft: spacing.md,
  },
  coinText: { color: '#1B1200', fontWeight: typography.weightBold, fontSize: typography.small },
  ctas: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.lg },
  cta: {
    flex: 1,
    backgroundColor: palette.accent,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
  },
  ctaText: { color: '#1B1200', fontWeight: typography.weightBold },
  ctaAlt: {
    flex: 1,
    backgroundColor: '#2B2B35',
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
  },
  ctaAltText: { color: palette.text, fontWeight: typography.weightSemi },
  pressed: { opacity: 0.85 },
  helper: { color: palette.textDim, fontSize: typography.small, marginTop: spacing.md },
});