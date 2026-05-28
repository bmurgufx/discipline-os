import { Link } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { dailyScore, quickRoutes, todayMetrics } from '../constants/mockData';
import { Card, Header, MetricCard, ProgressBar, Screen, SectionTitle, colors } from '../components/ui';

export default function DashboardScreen() {
  const date = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date());

  return (
    <Screen>
      <Header
        eyebrow={date}
        title="Today decides the month."
        subtitle="The target is not motivation. The target is executed proof."
      />
      <Card style={styles.scoreCard}>
        <View>
          <Text style={styles.scoreLabel}>Daily Score</Text>
          <Text style={styles.score}>{dailyScore}</Text>
          <Text style={styles.scoreMax}>out of 100</Text>
        </View>
        <View style={styles.scoreCopy}>
          <Text style={styles.scoreTitle}>Strong, not elite.</Text>
          <Text style={styles.scoreBody}>Food and Bible are controlled. Work output and unfinished training are dragging the day down.</Text>
        </View>
      </Card>
      <View style={styles.metrics}>
        {todayMetrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </View>
      <SectionTitle>Psychological Feedback</SectionTitle>
      <Card>
        <Text style={styles.feedback}>
          You are not behind because life is difficult. You are behind where the plan is vague. Make the next action visible: finish the lift, walk the remaining steps, and send one offer before comfort gets a vote.
        </Text>
      </Card>
      <SectionTitle>System</SectionTitle>
      <View style={styles.quickGrid}>
        {quickRoutes.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.title} href={item.route as never} asChild>
              <Pressable style={({ pressed }) => [styles.quickCard, pressed && styles.pressed]}>
                <Icon color={colors.accent} size={20} strokeWidth={2} />
                <Text style={styles.quickTitle}>{item.title}</Text>
                <Text style={styles.quickSubtitle}>{item.subtitle}</Text>
                <ProgressBar progress={item.title === 'Daily Score' ? 0.76 : 0.64} color={colors.amber} />
              </Pressable>
            </Link>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scoreCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    backgroundColor: '#11140F',
    borderColor: '#313A22',
  },
  scoreLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  score: {
    color: colors.accent,
    fontSize: 72,
    lineHeight: 76,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  scoreMax: {
    color: colors.dim,
    fontSize: 12,
    fontWeight: '800',
  },
  scoreCopy: {
    flex: 1,
    gap: 8,
  },
  scoreTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  scoreBody: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
  metrics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 14,
  },
  feedback: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '700',
  },
  quickGrid: {
    gap: 12,
  },
  quickCard: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 22,
    padding: 16,
    gap: 8,
  },
  pressed: {
    transform: [{ scale: 0.985 }],
    opacity: 0.9,
  },
  quickTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '900',
  },
  quickSubtitle: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
  },
});
