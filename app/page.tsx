import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";

const publications = [
  {
    status: "Preprint · 2026",
    title:
      "Bayesian methods and Markov chain Monte Carlo algorithms for curve reconstruction and point cloud data analysis",
    authors: "Asir Intesar Tushar and Ioannis Sgouralis",
    href: "https://arxiv.org/abs/2608.26490",
    linkLabel: "arXiv:2608.26490",
  },
  {
    status: "In preparation",
    title:
      "Bayesian nonparametric probabilistic classification methods for mastitis detection in dairy cows",
    authors: "Asir Intesar Tushar, D. McBride, I. Sgouralis, and S. Edo",
  },
  {
    status: "Journal article · 2022",
    title:
      "Numerical Approximations of a Nonlinear Volatility Model with European Options",
    authors: "J. A. Khan and Asir Intesar Tushar",
    venue: "Ganit: Journal of Bangladesh Mathematical Society, 42(1)",
  },
];

const talks = [
  {
    date: "2026",
    title:
      "Bayesian Methods and Markov Chain Monte Carlo Algorithms for Curve Reconstruction and Point Cloud Analysis",
    venue: "SIAM Annual Meeting · Cleveland, Ohio",
  },
  {
    date: "2026",
    title:
      "Markov Chain Monte Carlo Algorithms for Curve Reconstruction and Point Cloud Analysis",
    venue: "SIAM Graduate Student Research Showcase · Knoxville, Tennessee",
  },
  {
    date: "2026",
    title:
      "Efficient Bayesian Methods for Curve Reconstruction and Point Cloud Analysis",
    venue:
      "51st Annual New York State Regional Graduate Mathematics Conference · Syracuse University",
  },
  {
    date: "2024",
    title:
      "Computational Modeling and Statistical Learning of Point Cloud Data for LiDAR Applications",
    venue: "Oral Specialty Examination · University of Tennessee, Knoxville",
  },
];

const teachingGroups = [
  {
    course: "MATH 151",
    name: "Mathematics for Life Sciences",
    terms: "Fall 2024–Fall 2026 · 7 sections",
  },
  {
    course: "MATH 152",
    name: "Calculus for Life Sciences",
    terms: "Spring 2026 · 1 section",
  },
  {
    course: "MATH 113",
    name: "Mathematical Reasoning",
    terms: "Fall 2023–Spring 2024 · 4 sections",
  },
  {
    course: "MATH 123",
    name: "Finite Mathematics",
    terms: "Fall 2022–Spring 2023 · 4 sections",
  },
];

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Go to the homepage">
          <span>AIT</span>
          <strong>Asir Intesar Tushar</strong>
        </a>
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#research">Research</a>
          <a href="#teaching">Teaching</a>
          <a href="#talks">Talks</a>
        </nav>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Bayesian statistics · Computational mathematics</p>
          <h1>
            Asir Intesar
            <br />
            <em>Tushar</em>
          </h1>
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
            <a
              className="button button-light"
              href="https://arxiv.org/abs/2608.26490"
              target="_blank"
              rel="noreferrer"
            >
              Read the preprint <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="home-contact" aria-label="Contact and professional profiles">
            <span>Contact</span>
            <a href="mailto:aintesar@tennessee.edu">aintesar@tennessee.edu</a>
            <a
              href="https://math.utk.edu/people/asir-intesar-tushar/"
              target="_blank"
              rel="noreferrer"
            >
              UTK profile <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href="https://bd.linkedin.com/in/asir-intesar-tushar-0454801ba"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="research-index" aria-label="Research profile">
          <div className="index-topline">
            <span>Research profile</span>
            <span>UTK · 2026</span>
          </div>
          <div className="monogram" aria-hidden="true">
            AIT
          </div>
          <div className="index-grid">
            <span>Bayesian inference</span>
            <span>MCMC</span>
            <span>Point clouds</span>
            <span>Uncertainty</span>
          </div>
          <div className="index-location">
            <MapPin size={16} aria-hidden="true" /> Knoxville, Tennessee
          </div>
        </aside>
      </section>

      <section className="section section-shell" id="research">
        <SectionHeading
          eyebrow="01 · Research"
          title="Methods for uncertain geometry and complex data."
          intro="My work connects Bayesian modeling, computational statistics, and scientific applications where the underlying structure is only partially observed."
        />
        <div className="research-grid">
          <article className="research-card research-card-primary">
            <div className="card-number">01</div>
            <div>
              <p className="card-kicker">Primary research</p>
              <h3>Curve reconstruction and point-cloud analysis</h3>
              <p>
                Fully Bayesian models for reconstructing closed curves from
                noisy, incomplete, or sparse point clouds, together with
                problem-specific MCMC algorithms and posterior uncertainty
                summaries.
              </p>
              <div className="tag-row">
                <span>Bayesian computation</span>
                <span>MCMC</span>
                <span>Geometric data</span>
              </div>
            </div>
          </article>
          <article className="research-card">
            <div className="card-number">02</div>
            <div>
              <p className="card-kicker">Collaborative research</p>
              <h3>Probabilistic modeling for precision livestock farming</h3>
              <p>
                Predictive and Bayesian nonparametric classification methods
                for detecting mastitis from longitudinal, sensor-derived dairy
                cow health data.
              </p>
              <div className="tag-row">
                <span>Bayesian nonparametrics</span>
                <span>Classification</span>
                <span>Animal health</span>
              </div>
            </div>
          </article>
        </div>
        <div className="research-note">
          <span>Research interests</span>
          <p>
            Bayesian statistics · Statistical learning · Markov chain Monte
            Carlo · Uncertainty quantification · Bayesian nonparametrics · Data
            analysis
          </p>
        </div>
        <div className="research-publications">
          <div className="subsection-heading">
            <p className="eyebrow">Publications</p>
            <h3>Selected papers and current work.</h3>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication" key={publication.title}>
                <span className="publication-index">0{index + 1}</span>
                <div className="publication-copy">
                  <p className="publication-status">{publication.status}</p>
                  <h3>{publication.title}</h3>
                  <p>{publication.authors}</p>
                  {publication.venue ? (
                    <p className="publication-venue">{publication.venue}</p>
                  ) : null}
                </div>
                {publication.href ? (
                  <a
                    className="publication-link"
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${publication.title}`}
                  >
                    {publication.linkLabel}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="publication-link publication-link-muted">
                    Manuscript
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell" id="teaching">
        <SectionHeading
          eyebrow="02 · Teaching"
          title="Extensive classroom experience, clearly presented."
          intro="I aim to make mathematical reasoning accessible, structured, and connected to the problems students care about."
        />
        <div className="teaching-layout">
          <div className="teaching-stat">
            <strong>16</strong>
            <span>undergraduate sections as Instructor of Record at UTK</span>
            <p>Graduate Teaching Associate · August 2022–Present</p>
          </div>
          <div className="course-list">
            {teachingGroups.map((course) => (
              <article className="course" key={course.course}>
                <span>{course.course}</span>
                <div>
                  <h3>{course.name}</h3>
                  <p>{course.terms}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="teaching-history">
          <p>
            <strong>Additional experience:</strong> Graduate Teaching Assistant
            for Basic Calculus and College Algebra at UTK; Lecturer in Calculus
            I and Differential Equations at Ahsanullah University of Science and
            Technology; Trainer and Mentor with the Bangladesh Mathematical
            Olympiad Committee.
          </p>
        </div>
      </section>

      <section className="section section-dark" id="talks">
        <div className="section-shell">
          <SectionHeading eyebrow="03 · Talks" title="Selected presentations." />
          <div className="talk-list">
            {talks.map((talk) => (
              <article className="talk" key={`${talk.title}-${talk.venue}`}>
                <span>{talk.date}</span>
                <div>
                  <h3>{talk.title}</h3>
                  <p>{talk.venue}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer footer-compact">
        <div className="section-shell footer-bottom">
          <span>© 2026 Asir Intesar Tushar</span>
          <span>
            <BookOpen size={15} aria-hidden="true" /> Mathematics · Statistics · Computation
          </span>
        </div>
      </footer>
    </main>
  );
}
