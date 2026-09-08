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
      <h2>Model formulation</h2>
      <p>
        A simplified latent-state representation lets the unobserved health
        state evolve over time and links each state to the observed sensor
        measurements:
      </p>
      <div className="equation-block equation-pair" aria-label="Latent health state model and observation model">
        <span><em>z</em><sub>t</sub> | <em>z</em><sub>t−1</sub> ∼ Categorical(π<sub><em>z</em><sub>t−1</sub></sub>),</span>
        <span><em>y</em><sub>t</sub> | <em>z</em><sub>t</sub> = <em>k</em> ∼ N(μ<sub>k</sub>, Σ<sub>k</sub>).</span>
      </div>
      <p>
        A Bayesian nonparametric formulation allows the effective number and
        structure of the latent patterns to be learned from the data rather
        than fixed in advance.
      </p>
      <h2>Research goal</h2>
      <p>
        The broader goal is to provide interpretable estimates of animal-health
        status while allowing the complexity of the underlying behavioral
        patterns to be learned from the data. This approach can support more
        reliable decision-making in precision livestock farming and help reveal
        which sensor-derived features are most informative for detection.
      </p>
      <h2>Related manuscript</h2>
      <div className="project-paper">
        <p className="paper-status">In preparation</p>
        <h3>Bayesian nonparametric probabilistic classification methods for mastitis detection in dairy cows</h3>
        <p>Asir Intesar Tushar, D. McBride, I. Sgouralis, and S. Edo</p>
      </div>
    </ProjectLayout>
  );
}
