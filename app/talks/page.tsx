import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Talks | Asir Intesar Tushar",
  description: "Selected conference talks and academic presentations by Asir Intesar Tushar.",
};

const talks = [
  { date: "2026", title: "Bayesian Methods and Markov Chain Monte Carlo Algorithms for Curve Reconstruction and Point Cloud Analysis", venue: "SIAM Annual Meeting · Cleveland, Ohio" },
  { date: "2026", title: "Markov Chain Monte Carlo Algorithms for Curve Reconstruction and Point Cloud Analysis", venue: "SIAM Graduate Student Research Showcase · Knoxville, Tennessee" },
  { date: "March 2026", title: "Efficient Bayesian Methods for Curve Reconstruction and Point Cloud Analysis", venue: "51st Annual New York State Regional Graduate Mathematics Conference · Syracuse University · Syracuse, New York" },
  { date: "2024", title: "Computational Modeling and Statistical Learning of Point Cloud Data for LiDAR Applications", venue: "Oral Specialty Examination · University of Tennessee, Knoxville" },
  { date: "2019", title: "Numerical Investigation of the Black–Scholes Equation", venue: "University of Dhaka" },
  { date: "2018", title: "Mercury’s Perihelion Precession: A Classical Test of General Relativity", venue: "University of Dhaka" },
];

export default function Talks() {
  return (
    <main className="talks-page">
      <SiteHeader current="talks" />
      <section className="compact-page-header section-shell">
        <p className="eyebrow">03 · Talks</p>
        <h1>Talks</h1>
      </section>
      <section className="compact-page-content section-shell">
        <div className="talk-list">
          {talks.map((talk) => (
            <article className="talk" key={`${talk.title}-${talk.venue}`}>
              <span>{talk.date}</span>
              <div><h2>{talk.title}</h2><p>{talk.venue}</p></div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
