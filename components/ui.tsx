import { Link } from 'expo-router';
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
  background: '#08090B',
  panel: '#121419',
  panelSoft: '#181B21',
  border: '#2B3038',
  text: '#F3F4F1',
  muted: '#A1A7B0',
  dim: '#636A75',
  accent: '#D6FF6B',
  amber: '#E6C35C',
  orange: '#DB7C45',
  red: '#D95F5F',
  green: '#86D37E',
};

const dockItems = [
  { label: 'Today', href: '/dashboard' },
  { label: 'Goals', href: '/morning-goals' },
  { label: 'Food', href: '/food' },
  { label: 'Train', href: '/training' },
  { label: 'Score', href: '/daily-score' },
];

export function Screen({
  children,
  centered = false,
  showDock = true,
}: PropsWithChildren<{ centered?: boolean; showDock?: boolean }>) {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />
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
  return (
    <View style={styles.dock}>
      {dockItems.map((item) => (
        <Link key={item.href} href={item.href as never} asChild>
          <Pressable style={({ pressed }) => [styles.dockItem, pressed && styles.pressed]}>
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
    maxWidth: 430,
    backgroundColor: colors.background,
    borderLeftWidth: Platform.OS === 'web' ? 1 : 0,
    borderRightWidth: Platform.OS === 'web' ? 1 : 0,
    borderColor: '#191D23',
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 28,
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
    paddingBottom: 4,
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
    fontSize: 31,
    lineHeight: 35,
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
    borderRadius: 22,
    padding: 16,
    gap: 14,
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
    minHeight: 164,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
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
    backgroundColor: '#20251D',
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
    minHeight: 60,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
  },
  buttonText: {
    color: '#12150F',
    fontSize: 16,
    fontWeight: '900',
  },
  dock: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: Platform.OS === 'web' ? 18 : 10,
    minHeight: 66,
    borderRadius: 24,
    backgroundColor: '#101217',
    borderWidth: 1,
    borderColor: '#29301F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  dockItem: {
    flex: 1,
    minHeight: 48,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dockLabel: {
    color: colors.text,
    fontSize: 11,
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
