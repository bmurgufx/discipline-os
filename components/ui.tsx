import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LucideIcon } from 'lucide-react-native';
import { PropsWithChildren } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export const colors = {
  background: '#090A0C',
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

export function Screen({ children }: PropsWithChildren) {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
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
  icon: Icon,
}: {
  title: string;
  value: string;
  target: string;
  status: string;
  progress: number;
  route: string;
  icon: LucideIcon;
}) {
  return (
    <Link href={route as never} asChild>
      <Pressable style={({ pressed }) => [styles.metric, pressed && styles.pressed]}>
        <View style={styles.metricTop}>
          <View style={styles.iconBox}>
            <Icon color={colors.accent} size={18} strokeWidth={2} />
          </View>
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

export function ActionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href as never} asChild>
      <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </Link>
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
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 62,
    paddingBottom: 44,
    gap: 18,
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
    fontSize: 36,
    lineHeight: 40,
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
    padding: 18,
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
    minHeight: 178,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 24,
    padding: 16,
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
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#20251D',
    borderWidth: 1,
    borderColor: '#323C25',
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
    fontSize: 26,
    lineHeight: 30,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  metricTarget: {
    color: colors.dim,
    fontSize: 12,
    fontWeight: '700',
  },
  button: {
    minHeight: 54,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
  },
  buttonText: {
    color: '#12150F',
    fontSize: 15,
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
