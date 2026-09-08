import type { Metadata } from "next";
import { ProjectLayout } from "../project-layout";

export const metadata: Metadata = {
  title: "Bayesian Modeling for Dairy-Cow Health | Asir Intesar Tushar",
  description: "Bayesian nonparametric modeling for mastitis detection using sensor-derived dairy-cow data.",
};

export default function MastitisProject() {
  return (
    <ProjectLayout
      number="02"
      title="Bayesian nonparametric modeling for dairy-cow health"
      summary="Probabilistic learning from longitudinal sensor measurements for mastitis detection in precision livestock farming."
      themes={["Bayesian nonparametrics", "Latent-state modeling", "Statistical classification", "Precision livestock farming"]}
      output={<p className="project-output-text">Manuscript in preparation</p>}
    >
      <h2>Project overview</h2>
      <p>
        Modern dairy farms collect repeated measurements of milk production,
        animal activity, and other health-related quantities through automated
        monitoring systems. These records offer opportunities for earlier
        detection of mastitis, but the data are heterogeneous, temporally
        dependent, and often highly variable across animals.
      </p>
      <p>
        This collaborative project develops Bayesian probabilistic
        classification methods for distinguishing healthy and mastitis-related
        patterns in longitudinal sensor data. The model uses latent health
        states to represent changing animal conditions while accounting for
        uncertainty in both the observations and the classification.
      </p>
      <h2>Research goal</h2>
      <p>
        The broader goal is to provide interpretable estimates of animal-health
        status while allowing the complexity of the underlying behavioral
        patterns to be learned from the data. This approach can support more
        reliable decision-making in precision livestock farming and help reveal
        which sensor-derived features are most informative for detection.
      </p>
    </ProjectLayout>
  );
}
