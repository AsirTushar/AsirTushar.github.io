import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
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
      output={
        <a className="project-output-link" href="https://arxiv.org/abs/2608.26490" target="_blank" rel="noreferrer">
          View preprint <ExternalLink size={15} aria-hidden="true" />
        </a>
      }
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
      <h2>Why the Bayesian approach matters</h2>
      <p>
        Instead of returning only one reconstructed curve, the method produces
        posterior samples that describe plausible geometries. These samples make
        it possible to identify regions where the curve is well determined and
        regions where sparse or noisy observations create substantial
        uncertainty. Current directions include extensions to three-dimensional
        curves and applications involving LiDAR-derived point clouds.
      </p>
    </ProjectLayout>
  );
}
