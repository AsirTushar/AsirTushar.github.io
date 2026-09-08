import type { Metadata } from "next";
import { ProjectLayout } from "../project-layout";

export const metadata: Metadata = {
  title: "Point-Cloud Curve Reconstruction | Asir Intesar Tushar",
  description: "Bayesian methods for curve reconstruction and point-cloud analysis.",
};

export default function PointCloudProject() {
  return (
    <ProjectLayout
      number="01"
      title="Bayesian curve reconstruction from point-cloud data"
      summary="A probabilistic framework for recovering closed curves from noisy, incomplete, and unordered point-cloud observations."
      themes={["Bayesian computation", "Markov chain Monte Carlo", "Point-cloud analysis", "Uncertainty quantification"]}
    >
      <h2>Project overview</h2>
      <p>
        Point-cloud datasets provide scattered measurements of an underlying
        geometric object, but they do not directly reveal how those observations
        should be ordered or connected. Noise, gaps, and uneven sampling make
        reconstruction especially challenging.
      </p>
      <p>
        This project represents the unknown curve by a polygonal structure whose
        number and locations of vertices are inferred from the data. A fully
        Bayesian model jointly describes the geometry, the association between
        observations and curve segments, and the measurement uncertainty.
        Tailored Markov chain Monte Carlo algorithms explore the resulting
        posterior distribution.
      </p>
      <h2>Model formulation</h2>
      <p>
        Let <em>h</em><sup>s</sup> denote the vertices of a polygonal curve. An
        observation assigned to segment <em>s</em><sub>n</sub> is represented by
        a location <em>u</em><sub>n</sub> along that segment:
      </p>
      <div className="equation-block" aria-label="Curve point r sub s n u n equals h superscript s n plus u n times h superscript s n plus one minus h superscript s n">
        <em>r</em><sub>s<sub>n</sub>,u<sub>n</sub></sub> = <em>h</em><sup>s<sub>n</sub></sup> + <em>u</em><sub>n</sub>(<em>h</em><sup>s<sub>n</sub>+1</sup> − <em>h</em><sup>s<sub>n</sub></sup>).
      </div>
      <p>The corresponding observation model can be written as</p>
      <div className="equation-block" aria-label="w n conditional on s n u n h and tau follows a two dimensional normal distribution">
        <em>w</em><sub>n</sub> | <em>s</em><sub>n</sub>, <em>u</em><sub>n</sub>, <em>h</em>, τ ∼ N<sub>2</sub>(<em>r</em><sub>s<sub>n</sub>,u<sub>n</sub></sub>, I<sub>2</sub>/τ).
      </div>
      <h2>Why the Bayesian approach matters</h2>
      <p>
        Instead of returning only one reconstructed curve, the method produces
        posterior samples that describe plausible geometries. These samples make
        it possible to identify regions where the curve is well determined and
        regions where sparse or noisy observations create substantial
        uncertainty. Current directions include extensions to three-dimensional
        curves and applications involving LiDAR-derived point clouds.
      </p>
      <h2>Related preprint</h2>
      <div className="project-paper">
        <p className="paper-status">Preprint · 2026</p>
        <h3>Bayesian methods and Markov chain Monte Carlo algorithms for curve reconstruction and point cloud data analysis</h3>
        <p>Asir Intesar Tushar and Ioannis Sgouralis</p>
        <a href="https://arxiv.org/abs/2608.26490" target="_blank" rel="noreferrer">arXiv:2608.26490</a>
      </div>
    </ProjectLayout>
  );
}
