import { Stack } from 'expo-router';
import { colors } from '../components/ui';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: '900' },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="dashboard" options={{ title: 'Today' }} />
      <Stack.Screen name="morning-goals" options={{ title: 'Morning Goals' }} />
      <Stack.Screen name="food" options={{ title: 'Food & Calories' }} />
      <Stack.Screen name="training" options={{ title: 'Training' }} />
      <Stack.Screen name="steps" options={{ title: 'Steps' }} />
      <Stack.Screen name="work-money" options={{ title: 'Work & Money' }} />
      <Stack.Screen name="vibe-coding" options={{ title: 'Vibe Coding' }} />
      <Stack.Screen name="bible" options={{ title: 'Bible Reading' }} />
      <Stack.Screen name="daily-score" options={{ title: 'Daily Score' }} />
      <Stack.Screen name="calendar" options={{ title: 'Calendar' }} />
      <Stack.Screen name="settings" options={{ title: 'Settings' }} />
    </Stack>
  );
}
