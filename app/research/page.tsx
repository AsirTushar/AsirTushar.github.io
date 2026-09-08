import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Research | Asir Intesar Tushar",
  description: "Research projects and publications in Bayesian statistics, MCMC, point-cloud analysis, and uncertainty quantification.",
};

const projects = [
  {
    number: "01",
    title: "Bayesian curve reconstruction from point-cloud data",
    summary:
      "Bayesian models and tailored MCMC algorithms for recovering uncertain geometric structure from noisy, incomplete, and unordered observations.",
    href: "/research/point-cloud/",
    areas: "Bayesian computation · MCMC · Geometric data",
  },
  {
    number: "02",
    title: "Bayesian nonparametric modeling for dairy-cow health",
    summary:
      "Probabilistic classification of longitudinal sensor data for mastitis detection in precision livestock farming.",
    href: "/research/mastitis/",
    areas: "Bayesian nonparametrics · Classification · Animal health",
  },
  {
    number: "03",
    title: "Numerical investigation of the Black-Scholes equation",
    summary:
      "Numerical approximation of a nonlinear option-pricing model under varying volatility specifications.",
    href: "/research/black-scholes/",
    areas: "Numerical analysis · Mathematical finance · Differential equations",
  },
];

export default function Research() {
  return (
    <main className="research-page">
      <SiteHeader current="research" />
      <section className="research-overview section-shell">
        <p className="eyebrow">01 · Research</p>
        <div className="research-overview-copy">
          <h1>My work connects Bayesian modeling, computational statistics, and scientific applications where the underlying structure is only partially observed.</h1>
          <p><strong>Research interests:</strong> Bayesian statistics · Statistical learning · Markov chain Monte Carlo · Data analysis · Uncertainty quantification · Bayesian nonparametrics</p>
        </div>
      </section>
      <section className="page-content section-shell">
        <section className="project-index" aria-labelledby="projects-title">
          <h2 className="project-index-title" id="projects-title">Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-card-link" href={project.href} key={project.number}>
                <span className="project-number">{project.number}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <span className="project-areas">{project.areas}</span>
                </div>
                <span className="project-details">
                  Details <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
