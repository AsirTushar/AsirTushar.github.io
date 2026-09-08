import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Research | Asir Intesar Tushar",
  description: "Research projects and publications in Bayesian statistics, MCMC, point-cloud analysis, and uncertainty quantification.",
};

const publications = [
  {
    status: "Preprint · 2026",
    title: "Bayesian methods and Markov chain Monte Carlo algorithms for curve reconstruction and point cloud data analysis",
    authors: "Asir Intesar Tushar and Ioannis Sgouralis",
    href: "https://arxiv.org/abs/2608.26490",
    linkLabel: "arXiv:2608.26490",
  },
  {
    status: "In preparation",
    title: "Bayesian nonparametric probabilistic classification methods for mastitis detection in dairy cows",
    authors: "Asir Intesar Tushar, D. McBride, I. Sgouralis, and S. Edo",
  },
  {
    status: "Journal article · 2022",
    title: "Numerical Approximations of a Nonlinear Volatility Model with European Options",
    authors: "J. A. Khan and Asir Intesar Tushar",
    venue: "Ganit: Journal of Bangladesh Mathematical Society, 42(1)",
  },
];

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
    <main>
      <SiteHeader current="research" />
      <PageIntro
        number="01"
        label="Research"
        title="Methods for uncertain geometry and complex data."
        intro="My work connects Bayesian modeling, computational statistics, and scientific applications where the underlying structure is only partially observed."
      />
      <section className="page-content section-shell">
        <section className="project-index" aria-labelledby="projects-title">
          <div className="subsection-heading">
            <p className="eyebrow">Projects</p>
            <h2 id="projects-title">Current and previous research.</h2>
          </div>
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
        <div className="research-note">
          <span>Research interests</span>
          <p>Bayesian statistics · Statistical learning · Markov chain Monte Carlo · Uncertainty quantification · Bayesian nonparametrics · Data analysis</p>
        </div>
        <section className="research-publications" aria-labelledby="publications-title">
          <div className="subsection-heading">
            <p className="eyebrow">Publications</p>
            <h2 id="publications-title">Selected papers and current work.</h2>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication" key={publication.title}>
                <span className="publication-index">0{index + 1}</span>
                <div className="publication-copy">
                  <p className="publication-status">{publication.status}</p>
                  <h3>{publication.title}</h3>
                  <p>{publication.authors}</p>
                  {publication.venue ? <p className="publication-venue">{publication.venue}</p> : null}
                </div>
                {publication.href ? (
                  <a className="publication-link" href={publication.href} target="_blank" rel="noreferrer">
                    {publication.linkLabel}<ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : <span className="publication-link publication-link-muted">Manuscript</span>}
              </article>
            ))}
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
