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
    >
      <h2>Project overview</h2>
      <p>
        The classical Black-Scholes equation assumes a constant volatility, an
        assumption that may not adequately describe observed market behavior.
        Allowing volatility to vary with the option value or its derivatives
        leads to nonlinear pricing equations that generally require numerical
        approximation.
      <p>
        This project investigated numerical solutions of a nonlinear
        Black-Scholes model for European options under several volatility
        specifications. The work examined how the nonlinear volatility term
        changes the resulting option values and considered the behavior of the
        numerical approximations across the models.
      </p>
      
      <h2>Related publication</h2>
      <div className="project-paper">
        <p className="paper-status">Journal article · 2022</p>
        <h3>Numerical Approximations of a Nonlinear Volatility Model with European Options</h3>
        <p>J. A. Khan and Asir Intesar Tushar</p>
        <p><em>Ganit: Journal of Bangladesh Mathematical Society</em>, 42(1), 50–68.</p>
        <a href="https://doi.org/10.3329/ganit.v42i1.61000" target="_blank" rel="noreferrer">https://doi.org/10.3329/ganit.v42i1.61000</a>
      </div>
    </ProjectLayout>
  );
}
