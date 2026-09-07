import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { ExploreLink, SiteFooter, SiteHeader } from "./components";

export const metadata: Metadata = { title: "Asir Intesar Tushar | Academic Website" };

export default function Home() {
  return (
    <main>
      <SiteHeader current="home" />
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Bayesian statistics · Computational mathematics</p>
          <h1>Asir Intesar<br /><em>Tushar</em></h1>
          <p className="hero-role">
            Ph.D. Candidate in Mathematics
            <span>University of Tennessee, Knoxville</span>
          </p>
          <p className="hero-intro">
            I develop Bayesian computational methods for geometric
            reconstruction from noisy point-cloud data, with an emphasis on
            tailored Markov chain Monte Carlo algorithms and uncertainty
            quantification. I also work on Bayesian models for sensor-derived
            animal-health data.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:aintesar@tennessee.edu">
              <Mail size={17} aria-hidden="true" /> Email me
            </a>
            <a className="button button-light" href="https://arxiv.org/abs/2608.26490" target="_blank" rel="noreferrer">
              Read the preprint <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="home-contact" aria-label="Contact and professional profiles">
            <span>Contact</span>
            <a href="mailto:aintesar@tennessee.edu">aintesar@tennessee.edu</a>
            <a href="https://math.utk.edu/people/asir-intesar-tushar/" target="_blank" rel="noreferrer">
              UTK profile <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="https://bd.linkedin.com/in/asir-intesar-tushar-0454801ba" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
        <aside className="research-index" aria-label="Research profile">
          <div className="index-topline"><span>Research profile</span><span>UTK · 2026</span></div>
          <div className="monogram" aria-hidden="true">AIT</div>
          <div className="index-grid">
            <span>Bayesian inference</span><span>MCMC</span>
            <span>Point clouds</span><span>Uncertainty</span>
          </div>
          <div className="index-location"><MapPin size={16} aria-hidden="true" /> Knoxville, Tennessee</div>
        </aside>
      </section>
      <section className="home-directory">
        <div className="section-shell directory-grid">
          <article><span>01</span><h2>Research</h2><p>Current projects, research interests, and publications.</p><ExploreLink href="/research/">Explore research</ExploreLink></article>
          <article><span>02</span><h2>Teaching</h2><p>Courses taught and additional instructional experience.</p><ExploreLink href="/teaching/">View teaching</ExploreLink></article>
          <article><span>03</span><h2>Talks</h2><p>Selected conference talks and academic presentations.</p><ExploreLink href="/talks/">View talks</ExploreLink></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
