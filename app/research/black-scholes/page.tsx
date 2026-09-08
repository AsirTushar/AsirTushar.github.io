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
      </p>
      <p>
        This project investigated numerical solutions of a nonlinear
        Black-Scholes model for European options under several volatility
        specifications. The work examined how the nonlinear volatility term
        changes the resulting option values and considered the behavior of the
        numerical approximations across the models.
      </p>
      <h2>Model formulation</h2>
      <p>
        A nonlinear Black-Scholes equation can be expressed in the form
      </p>
      <div className="equation-block" aria-label="Nonlinear Black-Scholes partial differential equation">
        ∂<em>V</em>/∂<em>t</em> + ½σ<sup>2</sup>(<em>S</em>, <em>t</em>, <em>V</em><sub>SS</sub>)<em>S</em><sup>2</sup> ∂<sup>2</sup><em>V</em>/∂<em>S</em><sup>2</sup> + <em>rS</em> ∂<em>V</em>/∂<em>S</em> − <em>rV</em> = 0,
      </div>
      <p>with the terminal condition for a European call option</p>
      <div className="equation-block" aria-label="European call option terminal condition">
        <em>V</em>(<em>S</em>, <em>T</em>) = max(<em>S</em> − <em>K</em>, 0).
      </div>
      <h2>Outcome</h2>
      <p>
        The study provided a computational comparison of the nonlinear models
        and formed the basis of a paper published in <em>Ganit: Journal of the
        Bangladesh Mathematical Society</em> in 2022.
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
