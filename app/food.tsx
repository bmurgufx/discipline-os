import { StyleSheet, Text, View } from 'react-native';
import { Card, Header, ProgressBar, Screen, StatRow, colors } from '../components/ui';
import { meals, targets } from '../constants/mockData';

export default function FoodScreen() {
  const consumed = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const remaining = targets.calories - consumed;
  const over = remaining < 0;

  return (
    <Screen>
      <Header
        eyebrow="Food & Calories"
        title="The cut works only when the numbers are honest."
        subtitle="Target: 1600 kcal. High protein. No vague bites."
      />
      <Card>
        <Text style={styles.big}>{consumed} kcal</Text>
        <Text style={styles.muted}>{over ? `${Math.abs(remaining)} kcal over target` : `${remaining} kcal remaining`}</Text>
        <ProgressBar progress={consumed / targets.calories} color={over ? colors.red : colors.accent} />
      </Card>
      <Card style={over ? styles.warning : undefined}>
        <View style={styles.warningRow}>
          <View style={[styles.warningDot, { backgroundColor: over ? colors.red : colors.amber }]} />
          <Text style={styles.feedback}>
            {over
              ? 'You crossed the line. Log it, stop eating, and do not pretend tomorrow can erase today.'
              : 'You are inside the target. Protect dinner. Hunger is not an emergency.'}
          </Text>
        </View>
      </Card>
      <Card>
        {meals.map((meal) => (
          <StatRow key={meal.name} label={meal.name} value={`${meal.calories}`} note={`${meal.protein} protein`} />
        ))}
      </Card>
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
  warning: {
    borderColor: colors.red,
  },
  warningRow: {
    flexDirection: 'row',
    gap: 12,
  },
  warningDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 5,
  },
  feedback: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '800',
  },
});
