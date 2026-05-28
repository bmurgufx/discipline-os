import { Link } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { dailyScore, quickRoutes, todayMetrics } from '../constants/mockData';
import { Card, Header, MetricCard, ProgressBar, ScoreOrb, Screen, SectionTitle, TopBar, colors } from '../components/ui';

export default function DashboardScreen() {
  const date = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date());

  return (
    <Screen>
      <TopBar status="Execution board" />
      <Header
        eyebrow={date}
        title="Today decides the month."
        subtitle="Execute the non-negotiables before comfort starts negotiating."
      />
      <Card style={styles.scoreCard}>
        <ScoreOrb score={dailyScore} label="Daily score" status="Strong" />
        <View style={styles.scoreCopy}>
          <Text style={styles.scoreTitle}>Strong, not elite yet.</Text>
          <Text style={styles.scoreBody}>Food and Bible are controlled. Work output and unfinished training are dragging the day down.</Text>
          <View style={styles.scoreTags}>
            <Text style={styles.scoreTag}>Elite 90+</Text>
            <Text style={styles.scoreTagActive}>Strong 75-89</Text>
          </View>
        </View>
      </Card>
      <View style={styles.metrics}>
        {todayMetrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </View>
      <SectionTitle>Psychological Feedback</SectionTitle>
      <Card style={styles.feedbackCard}>
        <Text style={styles.feedback}>
          You are not behind because life is difficult. You are behind where the plan is vague. Make the next action visible: finish the lift, walk the remaining steps, and send one offer before comfort gets a vote.
        </Text>
      </Card>
      <SectionTitle>System</SectionTitle>
      <View style={styles.quickGrid}>
        {quickRoutes.map((item) => {
          return (
            <Link key={item.title} href={item.route as never} asChild>
              <Pressable style={({ pressed }) => [styles.quickCard, pressed && styles.pressed]}>
                <Text style={styles.quickCode}>{item.icon}</Text>
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
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#11140F',
    borderColor: '#313A22',
  },
  scoreCopy: {
    alignSelf: 'stretch',
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
  scoreTags: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 3,
  },
  scoreTag: {
    color: colors.dim,
    fontSize: 11,
    fontWeight: '900',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: '#181C22',
  },
  scoreTagActive: {
    color: '#151910',
    fontSize: 11,
    fontWeight: '900',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: colors.accent,
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
  feedbackCard: {
    backgroundColor: '#121711',
    borderColor: '#2F3D22',
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
  quickCode: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
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
