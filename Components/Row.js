// components/Row.js
import React from 'react';
import { View, Text, StyleSheet, Pressable, Switch } from 'react-native';

export function Row({
  title,
  subtitle,
  rightType = 'chevron',
  valueText,
  switchValue,
  onToggle,
  onPress,
  destructive,
  testID,
}) {
  const content = (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={[styles.title, destructive && { color: palette.danger }]} numberOfLines={1}>
          {title}
        </Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      <View style={styles.right}>
        {rightType === 'value' && valueText ? <Text style={styles.value}>{valueText}</Text> : null}
        {rightType === 'switch' ? (
          <Switch
            trackColor={{ false: '#3C3C46', true: palette.accent }}
            thumbColor="#FFFFFF"
            value={!!switchValue}
            onValueChange={onToggle}
          />
        ) : null}
        {rightType === 'chevron' ? <Text style={styles.chevron}>›</Text> : null}
      </View>
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => [styles.pressable, pressed && styles.pressed]} testID={testID}>
        {content}
      </Pressable>
    );
  }

  return <View style={styles.pressable}>{content}</View>;
}

const styles = StyleSheet.create({
  pressable: { backgroundColor: palette.card },
  pressed: { backgroundColor: '#121219' },
  row: {
    minHeight: 56,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: { flex: 1, paddingRight: spacing.md },
  title: {
    color: palette.text,
    fontSize: typography.body,
    fontWeight: typography.weightSemi,
  },
  subtitle: {
    marginTop: 2,
    color: palette.textDim,
    fontSize: typography.small,
  },
  right: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  value: { color: palette.textDim, fontSize: typography.body },
  chevron: { color: palette.textDim, fontSize: 24, lineHeight: 24, marginLeft: spacing.sm },
});
