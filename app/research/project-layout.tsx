import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "../components";

export function ProjectLayout({
  number,
  title,
  summary,
  themes,
  children,
  output,
}: {
  number: string;
  title: string;
  summary: string;
  themes: string[];
  children: ReactNode;
  output: ReactNode;
}) {
  return (
    <main>
      <SiteHeader current="research" />
      <section className="project-hero section-shell">
        <a className="back-link" href="/research/">
          <ArrowLeft size={16} aria-hidden="true" /> Back to Research
        </a>
        <p className="eyebrow">Project {number}</p>
        <h1>{title}</h1>
        <p className="project-lead">{summary}</p>
      </section>
      <section className="project-body section-shell">
        <article className="project-narrative">{children}</article>
        <aside className="project-sidebar">
          <div>
            <span>Research areas</span>
            <ul>
              {themes.map((theme) => <li key={theme}>{theme}</li>)}
            </ul>
          </div>
          <div>
            <span>Related output</span>
            {output}
          </div>
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
