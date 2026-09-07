import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
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
        <div className="research-grid">
          <article className="research-card research-card-primary">
            <div className="card-number">01</div>
            <div>
              <p className="card-kicker">Primary research</p>
              <h2>Curve reconstruction and point-cloud analysis</h2>
              <p>Fully Bayesian models for reconstructing closed curves from noisy, incomplete, or sparse point clouds, together with problem-specific MCMC algorithms and posterior uncertainty summaries.</p>
              <div className="tag-row"><span>Bayesian computation</span><span>MCMC</span><span>Geometric data</span></div>
            </div>
          </article>
          <article className="research-card">
            <div className="card-number">02</div>
            <div>
              <p className="card-kicker">Collaborative research</p>
              <h2>Probabilistic modeling for precision livestock farming</h2>
              <p>Predictive and Bayesian nonparametric classification methods for detecting mastitis from longitudinal, sensor-derived dairy cow health data.</p>
              <div className="tag-row"><span>Bayesian nonparametrics</span><span>Classification</span><span>Animal health</span></div>
            </div>
          </article>
        </div>
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
