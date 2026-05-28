import { StyleSheet, Switch, Text, View } from 'react-native';
import { Card, Header, Screen, StatRow, colors } from '../components/ui';
import { targets } from '../constants/mockData';

export default function SettingsScreen() {
  return (
    <Screen>
      <Header
        eyebrow="Settings"
        title="Standards stay visible."
        subtitle="Editable-looking targets and mock notification preferences for the first local version."
      />
      <Card>
        <StatRow label="Target body weight" value={targets.weight} note="One month target." />
        <StatRow label="Calories" value={`${targets.calories} kcal`} note="Daily cut target." />
        <StatRow label="Steps" value={`${targets.steps.toLocaleString('en-US')}`} note="Daily movement floor." />
        <StatRow label="Monthly revenue" value={`${targets.revenue.toLocaleString('ro-RO')} RON`} note="Minimum business target." />
        <StatRow label="Bible reading" value={`${targets.bibleMinutes} min`} note="Daily spiritual discipline." />
      </Card>
      <Card>
        <SettingToggle label="Morning goals reminder" value />
        <SettingToggle label="Training accountability alert" value />
        <SettingToggle label="Evening score review" value={false} />
      </Card>
      <Card>
        <Text style={styles.infoTitle}>Theme</Text>
        <Text style={styles.infoText}>Premium dark discipline mode. Charcoal surfaces, restrained lime accent, high contrast numbers.</Text>
        <Text style={styles.version}>Discipline OS v1.0.0</Text>
      </Card>
    </Screen>
  );
}

function SettingToggle({ label, value }: { label: string; value: boolean }) {
  return (
    <View style={styles.toggleRow}>
      <Text style={styles.toggleLabel}>{label}</Text>
      <Switch value={value} trackColor={{ true: colors.accent, false: '#303640' }} thumbColor="#F2F3ED" />
    </View>
  );
}

const styles = StyleSheet.create({
  toggleRow: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#242932',
  },
  toggleLabel: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  infoTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '900',
  },
  infoText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
  version: {
    color: colors.dim,
    fontSize: 12,
    fontWeight: '800',
  },
});
