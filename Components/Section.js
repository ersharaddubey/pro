// components/Section.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Section({ title, subtitle, children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: spacing.xl },
  title: {
    color: palette.text,
    fontSize: typography.h2,
    fontWeight: typography.weightBold,
    marginBottom: spacing.sm,
  },
  subtitle: {
    color: palette.textDim,
    fontSize: typography.small,
    marginBottom: spacing.sm,
  },
  body: {
    backgroundColor: palette.card,
    borderRadius: spacing.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: palette.border,
    overflow: 'hidden',
  },
});
