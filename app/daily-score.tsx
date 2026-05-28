import { StyleSheet, Text, View } from 'react-native';
import { Card, Header, ProgressBar, Screen, StatRow, colors } from '../components/ui';
import { dailyScore, scoreBreakdown } from '../constants/mockData';

export default function DailyScoreScreen() {
  return (
    <Screen>
      <Header
        eyebrow="Score Calculation"
        title="A discipline score is earned by proof, then reduced by avoidance."
        subtitle="Seven categories create the daily total. Missed standards apply penalties immediately."
      />
      <Card>
        <Text style={styles.score}>{dailyScore}</Text>
        <Text style={styles.category}>Strong: 75-89</Text>
        <ProgressBar progress={dailyScore / 100} color={colors.amber} />
      </Card>
      <Card>
        {scoreBreakdown.map((item) => (
          <StatRow key={item.label} label={item.label} value={`${item.points}/${item.max}`} note={item.penalty} />
        ))}
      </Card>
      <View style={styles.categories}>
        <Badge label="90-100 Elite" color={colors.green} />
        <Badge label="75-89 Strong" color={colors.amber} />
        <Badge label="50-74 Average" color={colors.orange} />
        <Badge label="0-49 Weak" color={colors.red} />
      </View>
    </Screen>
  );
}

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <View style={[styles.badge, { borderColor: color }]}>
      <View style={[styles.badgeDot, { backgroundColor: color }]} />
      <Text style={styles.badgeText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    color: colors.text,
    fontSize: 72,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  category: {
    color: colors.amber,
    fontSize: 16,
    fontWeight: '900',
  },
  categories: {
    gap: 10,
  },
  badge: {
    minHeight: 46,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 10,
    backgroundColor: colors.panel,
  },
  badgeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  badgeText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '800',
  },
});
