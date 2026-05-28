import { ShieldCheck } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ActionLink, Card, Header, Screen, colors } from '../components/ui';

export default function OnboardingScreen() {
  return (
    <Screen>
      <View style={styles.mark}>
        <ShieldCheck color={colors.accent} size={34} strokeWidth={2} />
      </View>
      <Header
        eyebrow="Discipline OS"
        title="Build the man who does not negotiate with his standards."
        subtitle="Your life becomes what you track."
      />
      <Card style={styles.statement}>
        <Text style={styles.statementText}>
          This app is a private execution board for food, steps, lifting, money, coding, Bible reading, and the goals that must be written before the day starts.
        </Text>
      </Card>
      <ActionLink href="/dashboard" label="Enter Discipline OS" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  mark: {
    width: 68,
    height: 68,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#171B13',
    borderWidth: 1,
    borderColor: '#303821',
    marginBottom: 18,
  },
  statement: {
    marginTop: 8,
  },
  statementText: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '800',
  },
});
