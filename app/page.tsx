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
          <p className="hero-affiliation">
            I am advised by{` `}
            <a
              href="https://math.utk.edu/people/ioannis-sgouralis/"
              target="_blank"
              rel="noreferrer"
            >
              Dr. Ioannis Sgouralis
            </a>{` `}
            and am a member of the{` `}
            <a
              href="https://math.utk.edu/labs/sgouralis/"
              target="_blank"
              rel="noreferrer"
            >
              Sgouralis Research Group
            </a>
            .
          </p>
          <p className="hero-intro">
            My academic interests lie broadly at the intersection of Bayesian
            statistics, statistical learning, scientific computing, and data
            analysis. I am interested
            in developing statistical and computational methods for learning
            from complex and uncertain data, with applications across science
            and engineering. Alongside my research, I have extensive experience
            teaching undergraduate mathematics and enjoy supporting students in
            developing confidence and strong mathematical reasoning. Before
            beginning my doctoral studies at UTK, I earned both my B.S. and M.S.
            in Mathematics from the University of Dhaka and served as a Lecturer
            at Ahsanullah University of Science and Technology. Outside of
            academics, I enjoy playing football (soccer), hiking, and table
            tennis.
          </p>
          <p className="job-market-note">
            I am currently on the academic job market and seeking postdoctoral
            positions beginning in Summer or Fall 2027.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:aintesar@vols.utk.edu">
              <Mail size={17} aria-hidden="true" /> Email me
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
