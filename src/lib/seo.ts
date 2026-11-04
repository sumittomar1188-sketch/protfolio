import { site } from "@/config/site";
import { wheelGroups } from "@/config/content/stack";
import { certificates } from "@/config/content/certificates";
import { experience } from "@/config/content/experience";
import { projects } from "@/config/content/projects";
import { checkpoints, labels } from "@/config/sections";
import { plain } from "./text";

/** schema.org graph for the home page. */
export function personJsonLd() {
  const personId = site.url ? `${site.url}/#person` : undefined;
  const person = {
    "@type": "Person",
    ...(personId ? { "@id": personId } : {}),
    name: site.name.full,
    ...(site.url ? { url: site.url } : {}),
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    description: site.description,
    ...(site.employer
      ? {
          worksFor: {
            "@type": "Organization",
            name: site.employer.name,
            ...(site.employer.url ? { url: site.employer.url } : {}),
          },
        }
      : {}),
    alumniOf: { "@type": "CollegeOrUniversity", name: site.education.school },
    homeLocation: { "@type": "Place", name: site.location },
    ...(site.socials.length ? { sameAs: site.socials.map((s) => s.href) } : {}),
    knowsAbout: wheelGroups.flatMap((g) => g.items.map((i) => i.name)),
    hasCredential: certificates.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.name,
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: c.issuer },
    })),
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        ...(site.url ? { "@id": `${site.url}/#website`, url: site.url } : {}),
        name: site.name.full,
        ...(personId ? { author: { "@id": personId } } : {}),
      },
    ],
  };
}

/** Short markdown index for AI agents (llms.txt convention). */
export function llmsTxt() {
  const sec = (id: string) => checkpoints.find((c) => c.id === id)!;
  return [
    `# ${site.name.full}`,
    "",
    `> ${site.description}`,
    "",
    `${site.role} · ${site.location} · ${site.availability}. Contact: ${site.email}`,
    "",
    "## Pages",
    `- [Portfolio](/): ${checkpoints
      .slice(1)
      .map((c) => c.title)
      .join(", ")}`,
    `- [Full profile for LLMs](/llms-full.txt): every project, skill, education entry and certificate as markdown`,
    ...(site.resume ? [`- [${site.resume.title}](${site.resume.href})`] : []),
    "",
    `## ${sec("experience").title}`,
    ...experience.map((e) => `- ${e.title}, ${e.org} (${e.from}${labels.rangeSeparator}${e.to ?? "present"})`),
    "",
    `## ${sec("projects").title}`,
    ...projects.map((p) => `- ${p.name}: ${p.tag}. ${p.result.value} ${p.result.unit}.`),
    "",
    "## Links",
    ...site.socials.map((s) => `- [${s.label}](${s.href})`),
    "",
  ].join("\n");
}

/** Full markdown dump of the page content for AI agents. */
export function llmsFullTxt() {
  const out: string[] = [
    `# ${site.name.full} — ${site.role}`,
    "",
    site.description,
    "",
    `- Location: ${site.location}`,
    `- Status: ${site.availability}`,
    `- Email: ${site.email}`,
    ...(site.url ? [`- Website: ${site.url}`] : []),
    ...site.socials.map((s) => `- ${s.label}: ${s.href}`),
    "",
  ];
  out.push("## Experience", "");
  experience.forEach((e) => {
    out.push(
      `### ${e.title}, ${e.org} (${e.from}${labels.rangeSeparator}${e.to ?? "present"})`,
      "",
      ...(e.orgUrl ? [`- Website: ${e.orgUrl}`] : []),
      ...e.points.map((pt) => `- ${plain(pt)}`),
      "",
    );
  });
  out.push("## Projects", "");
  projects.forEach((p) => {
    out.push(
      `### ${p.name} (${p.meta})`,
      "",
      `- ${p.tag}`,
      `- Problem: ${p.problem}`,
      `- Built: ${p.built}`,
      `- Result: ${p.result.value}, ${p.result.unit}`,
      `- Stack: ${p.stack.join(", ")}`,
      ...(p.live ? [`- Live: ${p.live}`] : []),
      ...(p.demo ? [`- Demo: ${p.demo}`] : []),
      ...(p.repo ? [`- Code: ${p.repo}`] : []),
      "",
    );
  });
  out.push("## Skills", "");
  wheelGroups.forEach((g) => out.push(`- ${g.name}: ${g.items.map((i) => i.name).join(", ")}`));
  out.push(
    "",
    "## Certificates",
    "",
    ...certificates.map((c) => `- ${c.name} — ${c.issuer}${c.date ? `, ${c.date}` : ""}`),
    "",
  );
  return out.join("\n");
}
