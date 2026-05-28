# Discipline OS

Discipline OS is a first complete Expo mobile app for personal discipline, accountability, and daily execution tracking. It uses local mock data only: no backend, no authentication, and no remote services.

## Tech Stack

- React Native
- Expo SDK 54
- TypeScript
- Expo Router
- Local component state and mock data

## Install And Run

```bash
npm install
npm run start
```

For Expo Go on a real phone, clear the Metro cache after dependency changes:

```bash
npx expo start -c
```

Run on specific targets:

```bash
npm run android
npm run ios
npm run web
```

## Main Features

- Onboarding screen with the Discipline OS positioning and entry action
- Today dashboard with daily score, date, discipline message, progress cards, and psychological feedback
- Morning Goals screen with ten editable goal inputs stored in component state
- Food & Calories screen with a 1600 kcal target, mock meals, consumed/remaining calories, and strict feedback
- Training checklist for Chest, Back, Legs, Shoulders, Arms, and Core
- Steps screen with a 10,000 step target, current progress, and under-target warning
- Work & Money tracker for the 5000 RON monthly target and business execution checklist
- Vibe Coding tracker with daily tasks, streak, progress, and feedback
- Bible Reading screen with an 8-minute timer-style card, completion toggle, and reflection note
- Daily Score screen with calculation rules, breakdown, penalties, final score, and score categories
- Calendar screen with mock monthly score circles and legend
- Settings screen with editable-looking goals, mock notification settings, theme info, and app version

## Next Steps

- Persist local state with secure storage or SQLite
- Add real notification scheduling
- Connect optional health data for steps and training
- Add charts for weekly and monthly discipline trends
- Add revenue pipeline records and client follow-up history
