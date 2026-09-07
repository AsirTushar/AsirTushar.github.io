import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Teaching | Asir Intesar Tushar",
  description: "Teaching experience and courses taught by Asir Intesar Tushar.",
};

const teachingGroups = [
  { course: "MATH 151", name: "Mathematics for Life Sciences", terms: "Fall 2024–Fall 2026 · 7 sections" },
  { course: "MATH 152", name: "Calculus for Life Sciences", terms: "Spring 2026 · 1 section" },
  { course: "MATH 113", name: "Mathematical Reasoning", terms: "Fall 2023–Spring 2024 · 4 sections" },
  { course: "MATH 123", name: "Finite Mathematics", terms: "Fall 2022–Spring 2023 · 4 sections" },
];

export default function Teaching() {
  return (
    <main>
      <SiteHeader current="teaching" />
      <PageIntro
        number="02"
        label="Teaching"
        title="Mathematics made accessible, structured, and useful."
        intro="My teaching emphasizes clear reasoning, active participation, and connections between mathematical ideas and the problems students care about."
      />
      <section className="page-content section-shell">
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
                <div><h2>{course.name}</h2><p>{course.terms}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience-list">
          <article><span>2021–2022</span><div><h2>Graduate Teaching Assistant</h2><p>University of Tennessee, Knoxville · Basic Calculus and College Algebra</p></div></article>
          <article><span>2020–2021</span><div><h2>Lecturer</h2><p>Ahsanullah University of Science and Technology · Calculus I and Differential Equations</p></div></article>
          <article><span>2013–2019</span><div><h2>Trainer and Mentor</h2><p>Bangladesh Mathematical Olympiad Committee</p></div></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
