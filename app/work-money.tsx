import { StyleSheet, Text } from 'react-native';
import { Card, Checklist, Header, ProgressBar, Screen, StatRow, colors } from '../components/ui';
import { completedWork, targets, workTasks } from '../constants/mockData';

export default function WorkMoneyScreen() {
  const revenue = 2150;
  const monthlyProgress = revenue / targets.revenue;
  const execution = completedWork.length / workTasks.length;

  return (
    <Screen>
      <Header
        eyebrow="Work & Money"
        title="Revenue follows visible offers, not private effort."
        subtitle="Build assets, contact leads, show demos, and make buying obvious."
      />
      <Card>
        <Text style={styles.big}>{revenue.toLocaleString('ro-RO')} RON</Text>
        <Text style={styles.muted}>monthly target: {targets.revenue.toLocaleString('ro-RO')} RON</Text>
        <ProgressBar progress={monthlyProgress} color={colors.amber} />
      </Card>
      <Card>
        <StatRow label="Execution score" value={`${Math.round(execution * 100)}%`} note="Three of six commercial actions are finished." />
        <StatRow label="Next money move" value="Send offer" note="A demo without distribution is inventory, not income." />
      </Card>
      <Checklist items={workTasks} completed={completedWork} accent={colors.amber} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  big: {
    color: colors.text,
    fontSize: 44,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  muted: {
    color: colors.muted,
    fontSize: 15,
    fontWeight: '800',
  },
});
