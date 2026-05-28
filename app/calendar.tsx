import { StyleSheet, Text, View } from 'react-native';
import { Card, Header, Screen, colors } from '../components/ui';
import { calendarScores } from '../constants/mockData';

export default function CalendarScreen() {
  return (
    <Screen>
      <Header
        eyebrow="Monthly Calendar"
        title="The month tells the truth without negotiation."
        subtitle="Colored score circles show whether the standard held across previous days."
      />
      <Card>
        <View style={styles.weekHeader}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
            <Text key={`${day}-${index}`} style={styles.weekText}>{day}</Text>
          ))}
        </View>
        <View style={styles.grid}>
          {calendarScores.map((score, index) => (
            <View key={index} style={styles.dayCell}>
              <View style={[styles.scoreCircle, { backgroundColor: scoreColor(score) }]}>
                <Text style={styles.dayNumber}>{index + 1}</Text>
              </View>
              <Text style={styles.scoreLabel}>{score}</Text>
            </View>
          ))}
        </View>
      </Card>
      <Card>
        <Legend label="Green elite" color={colors.green} />
        <Legend label="Yellow decent" color={colors.amber} />
        <Legend label="Orange weak" color={colors.orange} />
        <Legend label="Red failed" color={colors.red} />
      </Card>
    </Screen>
  );
}

function scoreColor(score: number) {
  if (score >= 90) return colors.green;
  if (score >= 75) return colors.amber;
  if (score >= 50) return colors.orange;
  return colors.red;
}

function Legend({ label, color }: { label: string; color: string }) {
  return (
    <View style={styles.legend}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weekHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  weekText: {
    width: `${100 / 7}%`,
    textAlign: 'center',
    color: colors.dim,
    fontSize: 12,
    fontWeight: '900',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 14,
  },
  dayCell: {
    width: `${100 / 7}%`,
    alignItems: 'center',
    gap: 5,
  },
  scoreCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    color: '#10120F',
    fontSize: 12,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  scoreLabel: {
    color: colors.dim,
    fontSize: 10,
    fontWeight: '800',
    fontVariant: ['tabular-nums'],
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 6,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '800',
  },
});
