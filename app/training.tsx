import { StyleSheet, Text } from 'react-native';
import { Card, Checklist, Header, ProgressBar, Screen, colors } from '../components/ui';
import { completedTraining, trainingTasks } from '../constants/mockData';

export default function TrainingScreen() {
  const progress = completedTraining.length / trainingTasks.length;

  return (
    <Screen>
      <Header
        eyebrow="Daily Weight Training"
        title="Lift before the excuses start sounding reasonable."
        subtitle="Chest, Back, Legs, Shoulders, Arms, Core. Six checks. No drama."
      />
      <Card>
        <Text style={styles.big}>{completedTraining.length}/6 complete</Text>
        <ProgressBar progress={progress} />
        <Text style={styles.feedback}>Skipped volume compounds. Finish Legs and Arms today so tomorrow does not inherit weakness.</Text>
      </Card>
      <Checklist items={trainingTasks} completed={completedTraining} />
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
