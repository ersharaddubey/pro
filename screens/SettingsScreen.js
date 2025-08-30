import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Section } from '../Components/Section';
import { SubscribeBanner } from '../Components/SubscribeBanner';
import { palette, spacing, typography, radius } from "../Components/theme";


export function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
        >
          <Section title="General Settings">
            <Row title="Notifications" valueText="On" rightType="value" />
            <Separator />
            <Row title="App Language" valueText="English" rightType="value" />
            <Separator />
            <Row title="Display Explicit Content" valueText="Off" rightType="value" />
          </Section>

          <Section title="Manage My Hungama OTT" subtitle="Current Plan: Free User">
            <Row
              title="Change Plan"
              subtitle="Unlock unlimited streaming"
              rightType="chevron"
              onPress={() => {}}
            />
          </Section>

          <Section title="Audio Playback Settings">
            <Row title="Audio Quality" valueText="High" rightType="value" />
            <Separator />
            <Row title="Audio Language" valueText="Hindi, English" rightType="value" />
            <Separator />
            <Row title="Sleep Timer" valueText="30 min" rightType="value" />
          </Section>

          <Section title="Video Playback Settings">
            <Row title="Autoplay" valueText="On" rightType="value" />
            <Separator />
            <Row title="Video Quality" valueText="Auto" rightType="value" />
          </Section>

          <Section title="General">
            <Row title="Share Hungama OTT" rightType="chevron" onPress={() => {}} />
            <Separator />
            <Row title="Help & Support" rightType="chevron" onPress={() => {}} />
            <Separator />
            <Row title="Terms & Conditions" rightType="chevron" onPress={() => {}} />
            <Separator />
            <Row title="Privacy Policy" rightType="chevron" onPress={() => {}} />
            <Separator />
            <Row title="Delete Your Account" destructive rightType="chevron" onPress={() => {}} />
            <Separator />
            <Row title="Log Out" destructive rightType="chevron" onPress={() => {}} />
          </Section>
        </ScrollView>

        <SubscribeBanner onSubscribe={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const Separator = () => <View style={styles.sep} />;

const styles = StyleSheet.create({
  safe: { flex: 1},
  container: { flex: 1 },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl + spacing.xl,
  },
  sep: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: palette.border,
    opacity: 0.9,
    marginLeft: spacing.lg,
  },
});
