import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiteFooter, SiteHeader } from "./components";

export const metadata: Metadata = { title: "Asir Intesar Tushar | Academic Website" };

export default function Home() {
  return (
    <main>
      <SiteHeader current="home" />
      <section className="hero section-shell">
        <div className="hero-copy">
          <h1>
            Asir Intesar
            <br />
            <em>Tushar <small lang="bn">(তুষার)</small></em>
          </h1>
          <p className="hero-role">
            Ph.D. Candidate in Mathematics
            <span>University of Tennessee, Knoxville</span>
          </p>
          <p className="hero-intro">
            I am Asir Intesar Tushar, a Ph.D. candidate in Mathematics at the
            University of Tennessee, Knoxville. I am a member of the{` `}
            <a href="https://math.utk.edu/labs/sgouralis/" target="_blank" rel="noreferrer">
              Sgouralis Research Group
            </a>{` `}
            under the direction of Dr. Ioannis Sgouralis, where I develop
            Bayesian methods and Markov chain Monte Carlo algorithms for curve
            reconstruction and point-cloud analysis. I also work on
            probabilistic classification methods for sensor-derived
            animal-health data in precision livestock farming. Before beginning
            my doctoral studies at UTK, I earned both my B.S. and M.S. in
            Mathematics from the University of Dhaka and served as a Lecturer
            at Ahsanullah University of Science and Technology.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:aintesar@vols.utk.edu">
              <Mail size={17} aria-hidden="true" /> Email me
            </a>
            <a className="button button-light" href="https://arxiv.org/abs/2608.26490" target="_blank" rel="noreferrer">
              Read the preprint <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="home-contact" aria-label="Contact and professional profiles">
            <span>Contact</span>
            <a href="mailto:aintesar@vols.utk.edu">aintesar@vols.utk.edu</a>
            <a href="https://bd.linkedin.com/in/asir-intesar-tushar-0454801ba" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="https://scholar.google.com/citations?hl=en&amp;user=WeuT6EoAAAAJ" target="_blank" rel="noreferrer">
              Google Scholar <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="portrait-card">
          <img
            src="/asir-intesar-tushar.jpg"
            alt="Asir Intesar Tushar standing beside a waterfall"
          />
          <figcaption>
            <span>Asir Intesar Tushar</span>
            <span>Knoxville, Tennessee</span>
          </figcaption>
        </figure>
      </section>
      <SiteFooter />
    </main>
  );
}
