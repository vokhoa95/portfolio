type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: "affinidi",
    company: "Affinidi",
    role: "Mobile Engineer",
    location: "Singapore",
    period: "2023 – August 2026",
    description:
      "Making digital identity more personal—helping people take control of their data and who gets to see it.",
  },
  {
    id: "padlet",
    company: "Padlet",
    role: "Mobile Engineer",
    location: "Singapore",
    period: "2021 – 2023",
    description:
      "A shared canvas for big ideas, classroom discoveries, and those ‘what if we tried this?’ moments.",
  },
  {
    id: "act-brain",
    company: "ACT Brain Vietnam",
    role: "Software Engineer",
    location: "Vietnam",
    period: "2017 – 2021",
    description:
      "A Vietnam-based software team turning ideas from international clients into applications people can use.",
  },
];
