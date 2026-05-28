import { StyleSheet, Text } from 'react-native';
import { Card, Header, ProgressBar, Screen, StatRow, colors } from '../components/ui';
import { targets } from '../constants/mockData';

export default function StepsScreen() {
  const current = 7840;
  const remaining = targets.steps - current;
  const progress = current / targets.steps;

  return (
    <Screen>
      <Header
        eyebrow="Steps"
        title="Movement is the baseline, not a bonus."
        subtitle="10,000 steps daily. The target stays the target even when the schedule is tight."
      />
      <Card>
        <Text style={styles.big}>{current.toLocaleString('en-US')}</Text>
        <Text style={styles.muted}>of {targets.steps.toLocaleString('en-US')} steps</Text>
        <ProgressBar progress={progress} color={progress >= 1 ? colors.green : colors.amber} />
      </Card>
      <Card>
        <StatRow label="Remaining" value={remaining.toLocaleString('en-US')} note="Walk before dinner or it becomes a late-night debt." />
        <StatRow label="Status" value="Under target" note="Not a failure yet. It becomes one only if you stop moving." />
        <Text style={styles.warning}>Warning: under 8,000 steps means your discipline score will take a measurable hit.</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  big: {
    color: colors.text,
    fontSize: 54,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  muted: {
    color: colors.muted,
    fontSize: 15,
    fontWeight: '800',
  },
  warning: {
    color: colors.amber,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '800',
  },
});
