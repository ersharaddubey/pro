// components/SubscribeBanner.js
// नीचे का सब्सक्राइब बैनर—कॉल टू एक्शन क्लियर और बिना क्लटर।

import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';

export function SubscribeBanner({ onSubscribe }) {
  return (
    <View style={styles.container} accessibilityRole="summary" accessibilityLabel="Subscription prompt">
      <View style={styles.copyWrap}>
        <Text style={styles.title}>Unlock unlimited downloads/streaming</Text>
        <Text style={styles.subtitle}>Go ad-free and stream in top quality.</Text>
      </View>
      <Pressable onPress={onSubscribe} style={({ pressed }) => [styles.button, pressed && { opacity: 0.9 }]}>
        <Text style={styles.buttonText}>Subscribe Now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.cardAlt,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: palette.border,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: Platform.select({ ios: spacing.xl, default: spacing.lg }),
  },
  copyWrap: { marginBottom: spacing.md },
  title: {
    color: palette.text,
    fontSize: typography.body,
    fontWeight: typography.weightBold,
  },
  subtitle: {
    color: palette.textDim,
    fontSize: typography.small,
    marginTop: 2,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: palette.accentAlt,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#1B100A',
    fontWeight: typography.weightBold,
    fontSize: typography.body,
  },
});
