import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "CV | Asir Intesar Tushar",
  description:
    "Academic profile and curriculum vitae of Asir Intesar Tushar.",
};

const highlights = [
  {
    label: "Current position",
    title: "Ph.D. Candidate in Mathematics",
    detail: "University of Tennessee, Knoxville",
  },
  {
    label: "Research",
    title: "Bayesian computation and statistical learning",
    detail:
      "MCMC, point-cloud analysis, uncertainty quantification, and Bayesian nonparametrics",
  },
  {
    label: "Experience",
    title: "Research and university teaching",
    detail:
      "Graduate Research Assistant and Graduate Teaching Associate at UTK",
  },
  {
    label: "Academic engagement",
    title: "Publications, talks, and professional service",
    detail:
      "Research presentations, conference participation, peer review, and seminar organization",
  },
];

export default function CV() {
  return (
    <main className="compact-page cv-page">
      <SiteHeader current="cv" />
      <section className="compact-page-header section-shell">
        <p className="eyebrow">04 · Curriculum Vitae</p>
        <h1>Curriculum Vitae</h1>
      </section>

      <section className="compact-page-content section-shell cv-layout">
        <div className="cv-download-card">
          <FileText size={34} aria-hidden="true" />
          <div>
            <p className="card-kicker">Complete document</p>
            <h2>Full academic CV</h2>
            <p>
              View or download the complete PDF for detailed education,
              research, teaching, presentations, awards, and service.
            </p>
          </div>
          <a
            className="button button-dark"
            href="/Asir_Intesar_Tushar_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View full CV <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="cv-highlights" aria-label="CV highlights">
          {highlights.map((item, index) => (
            <article key={item.label}>
              <span>0{index + 1}</span>
              <div>
                <p>{item.label}</p>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
