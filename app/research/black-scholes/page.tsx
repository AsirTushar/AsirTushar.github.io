import type { Metadata } from "next";
import { ProjectLayout } from "../project-layout";

export const metadata: Metadata = {
  title: "Numerical Black-Scholes Investigation | Asir Intesar Tushar",
  description: "Numerical investigation of a nonlinear Black-Scholes equation with European options.",
};

export default function BlackScholesProject() {
  return (
    <ProjectLayout
      number="03"
      title="Numerical investigation of the Black-Scholes equation"
      summary="Numerical approximation of a nonlinear option-pricing equation under different volatility models."
      themes={["Numerical analysis", "Nonlinear differential equations", "Mathematical finance", "European options"]}
      output={<p className="project-output-text">Ganit: Journal of Bangladesh Mathematical Society, 42(1), 2022</p>}
    >
      <h2>Project overview</h2>
      <p>
        The classical Black-Scholes equation assumes a constant volatility, an
        assumption that may not adequately describe observed market behavior.
        Allowing volatility to vary with the option value or its derivatives
        leads to nonlinear pricing equations that generally require numerical
        approximation.
      </p>
      <p>
        This project investigated numerical solutions of a nonlinear
        Black-Scholes model for European options under several volatility
        specifications. The work examined how the nonlinear volatility term
        changes the resulting option values and considered the behavior of the
        numerical approximations across the models.
      </p>
      <h2>Outcome</h2>
      <p>
        The study provided a computational comparison of the nonlinear models
        and formed the basis of a paper published in <em>Ganit: Journal of the
        Bangladesh Mathematical Society</em> in 2022.
      </p>
    </ProjectLayout>
  );
}
