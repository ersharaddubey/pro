import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ProfileCard } from '../Components/ProfileCard';
import { Section } from '../Components/Section';
import { SubscribeBanner } from '../Components/SubscribeBanner'
import { palette, spacing, typography } from '../Components/theme';

export function Profilescreen({ navigation }) {
  const [notifications, setNotifications] = useState(true);
  const [appUsage, setAppUsage] = useState(false);
  const [explicit, setExplicit] = useState(false);

  const onSubscribe = () => navigation.navigate('Settings');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
        >
          <ProfileCard
            username="grumpyoctopus94"
            planLabel="Free User"
            coins={65}
            onEarn={() => console.log("Earn Coins clicked")}
            onRedeem={() => console.log("Redeem Coins clicked")}
          />

          <Section title="General Settings" subtitle="Notifications, App Usage, Display Explicit Content">
            <Row
              title="Notifications"
              rightType="switch"
              switchValue={notifications}
              onToggle={setNotifications}
              testID="row-notifications"
            />
            <Separator />
            <Row
              title="App Usage"
              subtitle="Usage analytics and improvements"
              rightType="switch"
              switchValue={appUsage}
              onToggle={setAppUsage}
              testID="row-app-usage"
            />
            <Separator />
            <Row
              title="Display Explicit Content"
              rightType="switch"
              switchValue={explicit}
              onToggle={setExplicit}
              testID="row-explicit"
            />
          </Section>

          <Section title="Manage My Hungama OTT" subtitle="Current Plan: Free User">
            <Row
              title="View Plans"
              subtitle="Upgrade for unlimited downloads/streaming"
              onPress={onSubscribe}
              rightType="chevron"
              testID="row-view-plans"
            />
          </Section>

          <Section title="Audio Playback Settings" subtitle="Audio enhancement, sleep timer">
            <Row title="Audio Enhancement" valueText="Off" rightType="value" />
            <Separator />
            <Row title="Sleep Timer" valueText="30 min" rightType="value" />
          </Section>

          <Section title="Video Playback Settings" subtitle="Video quality, streaming settings">
            <Row title="Video Quality" valueText="Auto" rightType="value" />
            <Separator />
            <Row title="Streaming" valueText="Wifi + Cellular" rightType="value" />
          </Section>

          <Section title="Downloads" subtitle="Download on Cellular, audio & video quality">
            <Row title="Download on Cellular" valueText="Off" rightType="value" />
            <Separator />
            <Row title="Audio Quality" valueText="High" rightType="value" />
            <Separator />
            <Row title="Video Quality" valueText="Medium" rightType="value" />
          </Section>
        </ScrollView>

        <SubscribeBanner onSubscribe={onSubscribe} />
      </View>
    </SafeAreaView>
  );
}

const Separator = () => <View style={styles.sep} />;

const styles = StyleSheet.create({
  safe: { flex: 1},
  container: { flex: 1 },
  content: {
    paddingHorizontal: spacing.lg || 16,
    paddingTop: spacing.lg || 16,
    paddingBottom: (spacing.xxl || 32) + (spacing.xl || 24),
  },
  sep: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: palette.border || "#333",
    opacity: 0.9,
    marginLeft: spacing.lg || 16,
  },
});