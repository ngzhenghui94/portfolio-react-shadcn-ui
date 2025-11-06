import type { LucideIcon } from "lucide-react";
import { MonitorSmartphone, Server, Wrench } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const projects: Project[] = [
  {
    title: "Design Systems Hub",
    description:
      "An internal platform that lets teams compose accessible design system components and share usage analytics.",
    tech: ["React", "Radix UI", "Vite", "Express"],
    link: "https://example.com/design-systems"
  },
  {
    title: "Insightful Analytics",
    description:
      "A SaaS dashboard that ingests product telemetry and generates tailored retention experiments backed by AI.",
    tech: ["Next.js", "tRPC", "PostgreSQL", "Tailwind"],
    link: "https://example.com/insightful"
  },
  {
    title: "Creator Toolkit",
    description:
      "A toolkit for content creators that automates video chaptering, captions and scheduling across platforms.",
    tech: ["Remix", "Cloudflare", "Stripe"],
    link: "https://example.com/creator-toolkit"
  }
];

export const experiences: Experience[] = [
  {
    company: "Atlas Labs",
    role: "Lead Frontend Engineer",
    period: "2022 — Present",
    achievements: [
      "Bootstrapped a component library with shadcn/ui primitives shared across 5 product teams.",
      "Improved Lighthouse performance scores from 63 to 94 by introducing streaming rendering techniques.",
      "Mentored 6 engineers and instituted an accessibility testing pipeline for every release."
    ]
  },
  {
    company: "Nova Systems",
    role: "Senior Product Engineer",
    period: "2019 — 2022",
    achievements: [
      "Shipped a workflow builder that handles 20k+ daily automations with real-time observability dashboards.",
      "Co-led migration from class-based React to hooks, reducing bundle size by 18%."
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Vite", "Tailwind CSS"],
    icon: MonitorSmartphone
  },
  {
    title: "Backend & Cloud",
    items: ["Node.js", "tRPC", "GraphQL", "PostgreSQL", "AWS"],
    icon: Server
  },
  {
    title: "DX & Tooling",
    items: ["Storybook", "Vitest", "Playwright", "ESLint", "CI/CD"],
    icon: Wrench
  }
];
