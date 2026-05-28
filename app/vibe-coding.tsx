import { StyleSheet, Text } from 'react-native';
import { Card, Checklist, Header, ProgressBar, Screen, StatRow, colors } from '../components/ui';
import { codingTasks, completedCoding } from '../constants/mockData';

export default function VibeCodingScreen() {
  const progress = completedCoding.length / codingTasks.length;

  return (
    <Screen>
      <Header
        eyebrow="Vibe Coding"
        title="Skill becomes real when it ships into the app."
        subtitle="Daily learning tracker for React Native, Expo, components, APIs, and one visible feature."
      />
      <Card>
        <Text style={styles.big}>12 day streak</Text>
        <ProgressBar progress={progress} />
        <Text style={styles.feedback}>Reading docs counts only after your hands touch the code. Finish API basics and build one feature before calling the day complete.</Text>
      </Card>
      <Card>
        <StatRow label="Today progress" value={`${completedCoding.length}/5`} note="Enough to stay warm, not enough to level up." />
        <StatRow label="Required output" value="1 feature" note="A small shipped feature beats a long private tutorial." />
      </Card>
      <Checklist items={codingTasks} completed={completedCoding} accent={colors.green} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  big: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  feedback: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '700',
  },
});
