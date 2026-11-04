import type { ExperienceEntry } from "@/types/content";
import { site } from "@/config/site";

export const experience: ExperienceEntry[] = [
  {
    from: site.education.from,
    to: site.education.to,
    title: site.education.degree,
    org: site.education.school,
    points: [
      "Solved **300+ problems on LeetCode**.",
      "Earned a **3-star Codeforces rating**.",
      "Built and deployed AI and automation projects, including the work featured below.",
    ],
  },
];
