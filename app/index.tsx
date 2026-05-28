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
          Food, steps, training, money, coding, Bible, and goals tracked in one private operating system.
        </Text>
      </View>
      <View style={styles.strip}>
        <View style={styles.stripItem}>
          <Text style={styles.stripValue}>84</Text>
          <Text style={styles.stripLabel}>kg target</Text>
        </View>
        <View style={styles.stripDivider} />
        <View style={styles.stripItem}>
          <Text style={styles.stripValue}>1600</Text>
          <Text style={styles.stripLabel}>kcal</Text>
        </View>
        <View style={styles.stripDivider} />
        <View style={styles.stripItem}>
          <Text style={styles.stripValue}>5000</Text>
          <Text style={styles.stripLabel}>RON</Text>
        </View>
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
    gap: 12,
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
    fontSize: 35,
    lineHeight: 39,
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
  strip: {
    minHeight: 84,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#303A25',
    backgroundColor: '#10150F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 6,
  },
  stripItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  stripValue: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  stripLabel: {
    color: colors.dim,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  stripDivider: {
    width: 1,
    height: 42,
    backgroundColor: '#2A3029',
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
