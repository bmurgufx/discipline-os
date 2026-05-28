import { StyleSheet, Text, View } from 'react-native';
import { ActionLink, Card, IconBadge, Screen, colors } from '../components/ui';

export default function OnboardingScreen() {
  return (
    <Screen centered showDock={false}>
      <View style={styles.hero}>
        <IconBadge label="DOS" large />
        <Text style={styles.appName}>Discipline OS</Text>
        <Text style={styles.headline}>Build the man who does not negotiate with his standards.</Text>
        <Text style={styles.subtitle}>
          Your life becomes what you track. Score the day, finish the basics, and remove the hiding places.
        </Text>
      </View>
      <Card style={styles.statement}>
        <Text style={styles.statementText}>
          Track food, steps, lifting, money, coding, Bible reading, and the goals that must be written before the day starts.
        </Text>
      </Card>
      <ActionLink href="/dashboard" label="Enter Discipline OS" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 6,
  },
  appName: {
    color: colors.accent,
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginTop: 4,
  },
  headline: {
    color: colors.text,
    fontSize: 34,
    lineHeight: 38,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 23,
    textAlign: 'center',
    fontWeight: '700',
  },
  statement: {
    marginTop: 12,
  },
  statementText: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
});
