import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../components/ui';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="morning-goals" />
        <Stack.Screen name="food" />
        <Stack.Screen name="training" />
        <Stack.Screen name="steps" />
        <Stack.Screen name="work-money" />
        <Stack.Screen name="vibe-coding" />
        <Stack.Screen name="bible" />
        <Stack.Screen name="daily-score" />
        <Stack.Screen name="calendar" />
        <Stack.Screen name="settings" />
      </Stack>
    </SafeAreaProvider>
  );
}
