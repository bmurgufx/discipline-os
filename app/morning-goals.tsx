import { useMemo, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, FormInput, Header, ProgressBar, Screen, colors } from '../components/ui';
import { initialGoals } from '../constants/mockData';

export default function MorningGoalsScreen() {
  const [goals, setGoals] = useState(initialGoals);
  const complete = useMemo(() => goals.filter((goal) => goal.trim().length > 0).length, [goals]);

  return (
    <Screen>
      <Header
        eyebrow="Morning Contract"
        title="Write all ten before the day gets noisy."
        subtitle="The goal list is not a mood board. It is a daily identity vote."
      />
      <Card>
        <Text style={styles.completion}>{complete}/10 written</Text>
        <ProgressBar progress={complete / 10} />
        <Text style={styles.copy}>If a goal is too unclear to write, it is too unclear to execute. Make every line specific enough that tomorrow can judge it.</Text>
      </Card>
      {goals.map((goal, index) => (
        <FormInput
          key={index}
          label={`Yearly goal ${index + 1}`}
          value={goal}
          onChangeText={(value) => setGoals((current) => current.map((item, itemIndex) => (itemIndex === index ? value : item)))}
        />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  completion: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  copy: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
});
