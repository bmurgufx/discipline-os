import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card, FormInput, Header, ProgressBar, Screen, colors } from '../components/ui';
import { targets } from '../constants/mockData';

export default function BibleScreen() {
  const [complete, setComplete] = useState(true);
  const [note, setNote] = useState('Discipline is quieter than impulse. I need obedience in small minutes.');

  return (
    <Screen>
      <Header
        eyebrow="Bible Reading"
        title="Eight minutes of stillness before the noise wins."
        subtitle="Calm discipline. Read, reflect, and carry one line into action."
      />
      <Card style={styles.timer}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>BIB</Text>
        </View>
        <Text style={styles.time}>08:00</Text>
        <Text style={styles.muted}>target minutes today</Text>
        <ProgressBar progress={complete ? 1 : 0.35} color={colors.green} />
        <Pressable style={styles.toggle} onPress={() => setComplete((value) => !value)}>
          <Text style={styles.toggleText}>{complete ? 'Completed' : 'Mark Complete'}</Text>
        </Pressable>
      </Card>
      <Card>
        <Text style={styles.copy}>Target: {targets.bibleMinutes} minutes per day. Not to feel spiritual for a moment, but to become steadier under pressure.</Text>
      </Card>
      <FormInput label="Reflection note" value={note} onChangeText={setNote} multiline />
    </Screen>
  );
}

const styles = StyleSheet.create({
  timer: {
    alignItems: 'center',
  },
  iconText: {
    color: colors.accent,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#172014',
    borderWidth: 1,
    borderColor: '#334326',
  },
  time: {
    color: colors.text,
    fontSize: 58,
    lineHeight: 64,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  muted: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '800',
  },
  toggle: {
    minHeight: 50,
    alignSelf: 'stretch',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
  },
  toggleText: {
    color: '#11140E',
    fontSize: 15,
    fontWeight: '900',
  },
  copy: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '700',
  },
});
