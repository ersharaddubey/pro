// App.js
// पूरा नेविगेशन सेटअप—Header, Profile, OTT ProfileScreen, SettingsScreen

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

// Existing screens
import Header from './navigation/Header';
import Profile from './screens/Profile';

// OTT-style screens
import { ProfileScreen } from './screens/Profilescreen';
import { SettingsScreen } from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* 🔹 Existing Routes */}
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Profile" component={Profile} />

        {/* 🔸 OTT Profile & Settings Screens */}
        <Stack.Screen name="OTTProfile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
