import { Link, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const colors = {
  background: '#07080A',
  panel: '#111419',
  panelSoft: '#181C23',
  panelDeep: '#0C0F13',
  border: '#2A3038',
  text: '#F5F7F1',
  muted: '#A6ADB4',
  dim: '#68707A',
  accent: '#C7F464',
  accentDeep: '#2A341A',
  amber: '#E0BD59',
  orange: '#D9804D',
  red: '#D35F62',
  green: '#7FCF78',
};

const dockItems = [
  { label: 'Today', href: '/dashboard', code: 'TD' },
  { label: 'Goals', href: '/morning-goals', code: 'GL' },
  { label: 'Food', href: '/food', code: 'FD' },
  { label: 'Train', href: '/training', code: 'TR' },
  { label: 'Work', href: '/work-money', code: 'WK' },
  { label: 'Score', href: '/daily-score', code: 'SC' },
];

export function Screen({
  children,
  centered = false,
  showDock = true,
}: PropsWithChildren<{ centered?: boolean; showDock?: boolean }>) {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <View style={styles.webBackdropLeft} />
      <View style={styles.webBackdropRight} />
      <SafeAreaView style={styles.phone}>
        <ScrollView
          contentContainerStyle={[styles.scroll, centered && styles.centeredScroll, showDock && styles.scrollWithDock]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
        {showDock ? <BottomDock /> : null}
      </SafeAreaView>
    </View>
  );
}

export function Header({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <View style={styles.header}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

export function TopBar({ label = 'Discipline OS', status = 'Live local system' }: { label?: string; status?: string }) {
  return (
    <View style={styles.topBar}>
      <View style={styles.brandLockup}>
        <View style={styles.brandMark}>
          <Text style={styles.brandMarkText}>D</Text>
        </View>
        <View>
          <Text style={styles.brandTitle}>{label}</Text>
          <Text style={styles.brandStatus}>{status}</Text>
        </View>
      </View>
      <View style={styles.signalPill}>
        <View style={styles.signalDot} />
        <Text style={styles.signalText}>ON</Text>
      </View>
    </View>
  );
}

export function Card({ children, style }: PropsWithChildren<{ style?: ViewStyle }>) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function SectionTitle({ children }: PropsWithChildren) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

export function ProgressBar({ progress, color = colors.accent }: { progress: number; color?: string }) {
  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${Math.max(0, Math.min(progress, 1)) * 100}%`, backgroundColor: color }]} />
    </View>
  );
}

export function ScoreOrb({
  score,
  label,
  status,
  progress = score / 100,
}: {
  score: number;
  label: string;
  status: string;
  progress?: number;
}) {
  return (
    <View style={styles.scoreOrbWrap}>
      <View style={styles.scoreOrbOuter}>
        <View style={[styles.scoreOrbProgress, { height: `${Math.max(18, Math.min(progress, 1) * 100)}%` }]} />
        <View style={styles.scoreOrbInner}>
          <Text style={styles.scoreOrbLabel}>{label}</Text>
          <Text style={styles.scoreOrbValue}>{score}</Text>
          <Text style={styles.scoreOrbStatus}>{status}</Text>
        </View>
      </View>
    </View>
  );
}

export function MetricCard({
  title,
  value,
  target,
  status,
  progress,
  route,
  icon,
}: {
  title: string;
  value: string;
  target: string;
  status: string;
  progress: number;
  route: string;
  icon: string;
}) {
  return (
    <Link href={route as never} asChild>
      <Pressable style={({ pressed }) => [styles.metric, pressed && styles.pressed]}>
        <View style={styles.metricTop}>
          <IconBadge label={icon} />
          <Text style={styles.metricStatus}>{status}</Text>
        </View>
        <Text style={styles.metricTitle}>{title}</Text>
        <Text style={styles.metricValue}>{value}</Text>
        <Text style={styles.metricTarget}>{target}</Text>
        <ProgressBar progress={progress} />
      </Pressable>
    </Link>
  );
}

export function IconBadge({ label, large = false }: { label: string; large?: boolean }) {
  return (
    <View style={[styles.iconBox, large && styles.iconBoxLarge]}>
      <Text style={[styles.iconText, large && styles.iconTextLarge]}>{label}</Text>
    </View>
  );
}

export function ActionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href as never} asChild>
      <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </Link>
  );
}

export function BottomDock() {
  const pathname = usePathname();

  return (
    <View style={styles.dock}>
      {dockItems.map((item) => (
        <Link key={item.href} href={item.href as never} asChild>
          <Pressable style={({ pressed }) => [styles.dockItem, pathname === item.href && styles.dockItemActive, pressed && styles.pressed]}>
            <Text style={[styles.dockCode, pathname === item.href && styles.dockCodeActive]}>{item.code}</Text>
            <Text style={styles.dockLabel}>{item.label}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

export function StatRow({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <View style={styles.statRow}>
      <View style={styles.statCopy}>
        <Text style={styles.statLabel}>{label}</Text>
        {note ? <Text style={styles.statNote}>{note}</Text> : null}
      </View>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

export function Checklist({
  items,
  completed,
  accent = colors.accent,
}: {
  items: string[];
  completed: string[];
  accent?: string;
}) {
  return (
    <View style={styles.checkList}>
      {items.map((item) => {
        const done = completed.includes(item);
        return (
          <View key={item} style={styles.checkRow}>
            <View style={[styles.checkDot, done && { backgroundColor: accent, borderColor: accent }]} />
            <Text style={[styles.checkText, done && styles.checkTextDone]}>{item}</Text>
            <Text style={styles.checkState}>{done ? 'Done' : 'Open'}</Text>
          </View>
        );
      })}
    </View>
  );
}

export function FormInput({
  label,
  value,
  onChangeText,
  multiline,
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  multiline?: boolean;
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        placeholderTextColor={colors.dim}
        style={[styles.input, multiline && styles.textArea]}
      />
    </View>
  );
}

export const textStyles: Record<string, TextStyle> = {
  mono: {
    fontVariant: ['tabular-nums'],
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  phone: {
    flex: 1,
    width: '100%',
    maxWidth: 444,
    backgroundColor: colors.background,
    borderLeftWidth: Platform.OS === 'web' ? 1 : 0,
    borderRightWidth: Platform.OS === 'web' ? 1 : 0,
    borderColor: '#191D23',
    overflow: 'hidden',
  },
  webBackdropLeft: {
    display: Platform.OS === 'web' ? 'flex' : 'none',
    position: 'absolute',
    top: 88,
    left: '50%',
    width: 92,
    height: 240,
    marginLeft: -320,
    borderRadius: 46,
    backgroundColor: '#111914',
    opacity: 0.7,
  },
  webBackdropRight: {
    display: Platform.OS === 'web' ? 'flex' : 'none',
    position: 'absolute',
    bottom: 120,
    right: '50%',
    width: 112,
    height: 280,
    marginRight: -350,
    borderRadius: 56,
    backgroundColor: '#161A22',
    opacity: 0.75,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 34,
    gap: 16,
  },
  centeredScroll: {
    justifyContent: 'center',
    paddingTop: 34,
    paddingBottom: 34,
  },
  scrollWithDock: {
    paddingBottom: 104,
  },
  header: {
    gap: 8,
    paddingBottom: 2,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '900',
    letterSpacing: 0,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 24,
    padding: 17,
    gap: 14,
    shadowColor: '#000000',
    shadowOpacity: 0.22,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },
  topBar: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  brandLockup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  brandMark: {
    width: 38,
    height: 38,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accentDeep,
    borderWidth: 1,
    borderColor: '#44572B',
  },
  brandMarkText: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: '900',
  },
  brandTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '900',
  },
  brandStatus: {
    color: colors.dim,
    fontSize: 11,
    fontWeight: '800',
  },
  signalPill: {
    height: 32,
    borderRadius: 16,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#171C15',
    borderWidth: 1,
    borderColor: '#303E22',
  },
  signalDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.accent,
  },
  signalText: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '900',
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginTop: 6,
  },
  track: {
    height: 8,
    borderRadius: 99,
    backgroundColor: '#252A31',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 99,
  },
  metric: {
    width: '48%',
    minHeight: 158,
    backgroundColor: '#11151B',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 22,
    padding: 14,
    gap: 8,
  },
  pressed: {
    transform: [{ scale: 0.985 }],
    opacity: 0.9,
  },
  metricTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accentDeep,
    borderWidth: 1,
    borderColor: '#323C25',
  },
  iconBoxLarge: {
    width: 86,
    height: 86,
    borderRadius: 28,
    alignSelf: 'center',
  },
  iconText: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.7,
  },
  iconTextLarge: {
    fontSize: 20,
    letterSpacing: 1.4,
  },
  metricStatus: {
    flex: 1,
    color: colors.dim,
    fontSize: 11,
    textAlign: 'right',
    fontWeight: '700',
  },
  metricTitle: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
  },
  metricValue: {
    color: colors.text,
    fontSize: 23,
    lineHeight: 27,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  metricTarget: {
    color: colors.dim,
    fontSize: 12,
    fontWeight: '700',
  },
  button: {
    minHeight: 64,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
    shadowColor: colors.accent,
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  buttonText: {
    color: '#12150F',
    fontSize: 16,
    fontWeight: '900',
  },
  dock: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: Platform.OS === 'web' ? 18 : 10,
    minHeight: 72,
    borderRadius: 26,
    backgroundColor: '#0F1217',
    borderWidth: 1,
    borderColor: '#29301F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  dockItem: {
    flex: 1,
    minHeight: 56,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  dockItemActive: {
    backgroundColor: '#1B2415',
    borderWidth: 1,
    borderColor: '#344522',
  },
  dockCode: {
    color: colors.dim,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  dockCodeActive: {
    color: colors.accent,
  },
  dockLabel: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: '900',
  },
  scoreOrbWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreOrbOuter: {
    width: 164,
    height: 164,
    borderRadius: 82,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#252B21',
    borderWidth: 1,
    borderColor: '#3B4727',
  },
  scoreOrbProgress: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#536A2B',
  },
  scoreOrbInner: {
    width: 132,
    height: 132,
    borderRadius: 66,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0C0F0B',
    borderWidth: 1,
    borderColor: '#2F3B20',
  },
  scoreOrbLabel: {
    color: colors.dim,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  scoreOrbValue: {
    color: colors.text,
    fontSize: 56,
    lineHeight: 62,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  scoreOrbStatus: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '900',
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#242932',
  },
  statCopy: {
    flex: 1,
    gap: 3,
  },
  statLabel: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  statNote: {
    color: colors.dim,
    fontSize: 12,
    lineHeight: 17,
  },
  statValue: {
    color: colors.accent,
    fontSize: 17,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  checkList: {
    gap: 10,
  },
  checkRow: {
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: colors.panelSoft,
    borderWidth: 1,
    borderColor: '#272C34',
  },
  checkDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.dim,
  },
  checkText: {
    flex: 1,
    color: colors.muted,
    fontSize: 14,
    fontWeight: '700',
  },
  checkTextDone: {
    color: colors.text,
  },
  checkState: {
    color: colors.dim,
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.7,
  },
  input: {
    minHeight: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.panelSoft,
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
    lineHeight: 22,
  },
});
