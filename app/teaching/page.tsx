import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Teaching | Asir Intesar Tushar",
  description: "Teaching experience and courses taught by Asir Intesar Tushar.",
};

const instructorCourses = [
  ["MATH 151 · Mathematics for Life Sciences", "Fall 2026 · 2 sections"],
  ["MATH 152 · Calculus for Life Sciences", "Spring 2026 · 1 section"],
  ["MATH 151 · Mathematics for Life Sciences", "Fall 2025 · 2 sections"],
  ["MATH 151 · Mathematics for Life Sciences", "Spring 2025 · 1 section"],
  ["MATH 151 · Mathematics for Life Sciences", "Fall 2024 · 2 sections"],
  ["MATH 113 · Mathematical Reasoning", "Spring 2024 · 2 sections"],
  ["MATH 113 · Mathematical Reasoning", "Fall 2023 · 2 sections"],
  ["MATH 123 · Finite Mathematics", "Spring 2023 · 2 sections"],
  ["MATH 123 · Finite Mathematics", "Fall 2022 · 2 sections"],
];

export default function Teaching() {
  return (
    <main className="compact-page teaching-page">
      <SiteHeader current="teaching" />
      <section className="compact-page-header section-shell">
        <p className="eyebrow">02 · Teaching</p>
        <h1>Teaching Experience</h1>
      </section>

      <section className="compact-page-content section-shell">
        <div className="teaching-experience-grid">
          <article className="teaching-role teaching-role-wide">
            <header>
              <div>
                <h2>Graduate Teaching Associate</h2>
                <p>University of Tennessee, Knoxville · Knoxville, USA</p>
              </div>
              <span>Aug 2022–Present</span>
            </header>
            <p className="role-label">Instructor of Record</p>
            <ul className="compact-course-list">
              {instructorCourses.map(([course, term]) => (
                <li key={`${course}-${term}`}>
                  <strong>{course}</strong>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="teaching-role">
            <header>
              <div><h2>Graduate Teaching Assistant</h2><p>University of Tennessee, Knoxville · Knoxville, USA</p></div>
              <span>Aug 2021–July 2022</span>
            </header>
            <ul className="compact-course-list compact-course-list-single">
              <li><strong>MATH 125 · Basic Calculus</strong><span>Spring 2022</span></li>
              <li><strong>MATH 119 · College Algebra</strong><span>Fall 2021</span></li>
            </ul>
          </article>

          <article className="teaching-role">
            <header>
              <div><h2>Lecturer</h2><p>Ahsanullah University of Science and Technology · Dhaka, Bangladesh</p></div>
              <span>Dec 2020–June 2021</span>
            </header>
            <ul className="compact-course-list compact-course-list-single">
              <li><strong>MATH 1107 · Calculus I</strong><span>3 sections</span></li>
              <li><strong>MATH 0231 · Differential Equations</strong><span>2 sections</span></li>
            </ul>
          </article>

          <article className="teaching-role">
            <header>
              <div><h2>Trainer</h2><p>Bangladesh Mathematical Olympiad Committee · Bangladesh</p></div>
              <span>2016–2019</span>
            </header>
            <p className="role-description">Led Number Theory and Combinatorics sessions; supervised national mathematics Olympiads.</p>
          </article>

          <article className="teaching-role">
            <header>
              <div><h2>Mentor</h2><p>Bangladesh Mathematical Olympiad Committee · Bangladesh</p></div>
              <span>2013–2016</span>
            </header>
            <p className="role-description">Trained participants, created problems, graded scripts, and supervised divisional Olympiads.</p>
          </article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
