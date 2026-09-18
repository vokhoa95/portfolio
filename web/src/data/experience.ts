type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  skills: { category: string; items: string[] }[];
};

export const experiences: Experience[] = [
  {
    id: "affinidi",
    skills: [
      { category: "Languages", items: ["Dart"] },
      { category: "Frameworks", items: ["Flutter"] },
      { category: "State management", items: ["Riverpod", "BLoC", "Cubit"] },
      {
        category: "Database & storage",
        items: ["Drift", "flutter_secure_storage"],
      },
      { category: "Testing", items: ["flutter_test"] },
      { category: "Architecture", items: ["Clean Architecture"] },
      { category: "Project management", items: ["Agile methodology"] },
    ],
    company: "Affinidi",
    role: "Mobile Engineer",
    location: "Singapore",
    period: "2023 – August 2026",
    description:
      "Making digital identity more personal—helping people take control of their data and who gets to see it.",
  },
  {
    id: "padlet",
    skills: [
      { category: "Languages", items: ["TypeScript"] },
      {
        category: "Frameworks & styling",
        items: ["React Native", "Tailwind CSS"],
      },
      {
        category: "Authentication & accessibility",
        items: ["OAuth", "WCAG", "VoiceOver"],
      },
      {
        category: "Monitoring & debugging",
        items: ["Firebase Crashlytics", "Sentry"],
      },
    ],
    company: "Padlet",
    role: "Mobile Engineer",
    location: "Singapore",
    period: "2021 – 2023",
    description:
      "A shared canvas for big ideas, classroom discoveries, and those ‘what if we tried this?’ moments.",
  },
  {
    id: "act-brain",
    skills: [
      { category: "Languages", items: ["Java", "Kotlin"] },
      { category: "Development tools", items: ["Android Studio"] },
      { category: "Database", items: ["SQLite"] },
    ],
    company: "ACT Brain Vietnam",
    role: "Software Engineer",
    location: "Vietnam",
    period: "2017 – 2021",
    description:
      "A Vietnam-based software team turning ideas from international clients into applications people can use.",
  },
];
