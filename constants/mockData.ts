export const targets = {
  weight: '84 kg',
  calories: 1600,
  steps: 10000,
  revenue: 5000,
  bibleMinutes: 8,
};

export const dailyScore = 76;

export const todayMetrics = [
  {
    title: 'Calories',
    value: '1,420',
    target: '1,600 kcal',
    progress: 0.89,
    status: 'Under control',
    route: '/food',
    icon: 'CAL',
  },
  {
    title: 'Steps',
    value: '7,840',
    target: '10,000 steps',
    progress: 0.78,
    status: '2,160 left',
    route: '/steps',
    icon: 'STP',
  },
  {
    title: 'Training',
    value: '4/6',
    target: 'Daily lift',
    progress: 0.67,
    status: 'Finish accessories',
    route: '/training',
    icon: 'LFT',
  },
  {
    title: 'Work/Money',
    value: '2,150 RON',
    target: '5,000 RON',
    progress: 0.43,
    status: 'Pipeline weak',
    route: '/work-money',
    icon: 'RON',
  },
  {
    title: 'Vibe Coding',
    value: '3/5',
    target: 'Daily reps',
    progress: 0.6,
    status: 'Build one feature',
    route: '/vibe-coding',
    icon: 'DEV',
  },
  {
    title: 'Bible Reading',
    value: '8 min',
    target: '8 min',
    progress: 1,
    status: 'Completed',
    route: '/bible',
    icon: 'BIB',
  },
  {
    title: 'Morning Goals',
    value: '7/10',
    target: '10 written goals',
    progress: 0.7,
    status: 'Write all ten',
    route: '/morning-goals',
    icon: 'GOL',
  },
];

export const quickRoutes = [
  { title: 'Daily Score', subtitle: 'Scoring rules and penalties', route: '/daily-score', icon: 'SCR' },
  { title: 'Calendar', subtitle: 'Monthly execution history', route: '/calendar', icon: 'CAL' },
  { title: 'Settings', subtitle: 'Goals and notification mocks', route: '/settings', icon: 'SET' },
];

export const meals = [
  { name: 'Greek yogurt, berries, black coffee', calories: 310, protein: '28g' },
  { name: 'Chicken breast, rice, cucumber salad', calories: 540, protein: '52g' },
  { name: 'Protein shake and banana', calories: 240, protein: '32g' },
  { name: 'Egg white omelet with vegetables', calories: 330, protein: '35g' },
];

export const trainingTasks = ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'];
export const completedTraining = ['Chest', 'Back', 'Shoulders', 'Core'];

export const workTasks = [
  'Personal trainer website',
  'Contact qualified leads',
  'Build platform demo',
  'Learn sales',
  'Send offer',
  'Improve portfolio',
];
export const completedWork = ['Personal trainer website', 'Contact qualified leads', 'Build platform demo'];

export const codingTasks = ['React Native', 'Expo', 'UI components', 'API basics', 'Build one feature'];
export const completedCoding = ['React Native', 'Expo', 'UI components'];

export const scoreBreakdown = [
  { label: 'Calories', points: 16, max: 18, penalty: 'No penalty. Stay precise at dinner.' },
  { label: 'Steps', points: 13, max: 16, penalty: '-3 for missing 10,000 before evening.' },
  { label: 'Training', points: 14, max: 18, penalty: '-4 for skipped Arms and Legs volume.' },
  { label: 'Work', points: 12, max: 18, penalty: '-6 because offers are not out yet.' },
  { label: 'Vibe Coding', points: 9, max: 12, penalty: '-3 until one feature ships.' },
  { label: 'Bible', points: 8, max: 8, penalty: 'Complete.' },
  { label: 'Morning Goals', points: 4, max: 10, penalty: '-6 because only seven goals are written.' },
];

export const calendarScores = [
  92, 81, 68, 44, 77, 88, 91,
  73, 52, 84, 96, 61, 70, 79,
  83, 47, 89, 94, 76, 65, 58,
  82, 90, 72, 49, 86, 78, 93,
  74, 67,
];

export const initialGoals = [
  'Reach 84 kg with strict food control.',
  'Eat 1600 kcal with high protein every day.',
  'Walk 10,000 steps before night.',
  'Train weights daily without negotiating.',
  'Make 5000 RON per month from builds.',
  'Build and sell websites, apps, and platforms.',
  'Launch the personal trainer website.',
  'Sell platform demos to fitness, make-up, and education schools.',
  'Learn vibe coding daily until shipping feels normal.',
  'Read the Bible 8 minutes and write yearly goals every morning.',
];
