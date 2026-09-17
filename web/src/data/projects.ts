export type Project = {
  id: string;
  company: string;
  title: string;
  description: string;
  outcome: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: "flutter-sdk",
    company: "Affinidi",
    title: "Cross-platform development & reusable SDK",
    description:
      "Built and demonstrated a Flutter prototype across web, mobile, and Windows desktop. Developed a reusable Dart SDK by migrating secure credential-exchange logic from a JavaScript bridge to pure Dart.",
    outcome:
      "Supported Flutter adoption and saved an estimated 2–3 developer-days per SDK implementation.",
    technologies: ["Flutter", "Dart", "SDK development"],
  },
  {
    id: "h2h-connect",
    company: "Affinidi",
    title: "H2H Connect",
    description:
      "Led technical design and delivery of credential listing and in-chat photo sharing, including camera capture and integration with WebSocket-based messaging.",
    outcome:
      "Supported 170+ attendees across iOS and Android during the Summit on Human Agency.",
    technologies: ["Flutter", "Dart", "WebSockets"],
  },
  {
    id: "padlet",
    company: "Padlet",
    title: "Mobile authentication & accessibility",
    description:
      "Redesigned authentication with four OAuth providers, handled API and token errors, and collaborated with backend engineers on response issues. Led an accessibility initiative involving VoiceOver testing and guidance for designers and developers.",
    outcome:
      "Helped remediate 78% of known mobile accessibility issues during a two-week initiative.",
    technologies: ["React Native", "TypeScript", "OAuth", "VoiceOver"],
  },
];
