import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Teaching | Asir Intesar Tushar",
  description: "Teaching experience and courses taught by Asir Intesar Tushar.",
};

const currentTeaching = [
  ["Fall 2026", "MATH 151: Mathematics for Life Sciences", "2 sections"],
];

const utkInstructorCourses = [
  ["Spring 2026", "MATH 152: Calculus for Life Sciences", "1 section"],
  ["Fall 2025", "MATH 151: Mathematics for Life Sciences", "2 sections"],
  ["Spring 2025", "MATH 151: Mathematics for Life Sciences", "1 section"],
  ["Fall 2024", "MATH 151: Mathematics for Life Sciences", "2 sections"],
  ["Spring 2024", "MATH 113: Mathematical Reasoning", "2 sections"],
  ["Fall 2023", "MATH 113: Mathematical Reasoning", "2 sections"],
  ["Spring 2023", "MATH 123: Finite Mathematics", "2 sections"],
  ["Fall 2022", "MATH 123: Finite Mathematics", "2 sections"],
];

const assistantCourses = [
  ["Spring 2022", "MATH 125: Basic Calculus", ""],
  ["Fall 2021", "MATH 119: College Algebra", ""],
];

const lecturerCourses = [
  ["2020–2021", "MATH 1107: Calculus I", "3 sections"],
  ["2020–2021", "MATH 0231: Differential Equations", "2 sections"],
];

function CourseList({ courses }: { courses: string[][] }) {
  return (
    <ul className="teaching-list">
      {courses.map(([term, course, sections]) => (
        <li key={`${term}-${course}`}>
          <span>{term}</span>
          <strong>{course}</strong>
          {sections ? <small>{sections}</small> : null}
        </li>
      ))}
    </ul>
  );
}

export default function Teaching() {
  return (
    <main className="compact-page teaching-page">
      <SiteHeader current="teaching" />
      <section className="compact-page-header section-shell">
        <p className="eyebrow">02 · Teaching</p>
        <h1>Teaching</h1>
      </section>

      <section className="compact-page-content section-shell teaching-content">
        <section className="teaching-section">
          <h2>Current Teaching</h2>
          <div className="teaching-group">
            <div className="teaching-group-heading">
              <div><h3>University of Tennessee, Knoxville</h3><p>Graduate Teaching Associate · Instructor of Record</p></div>
              <span>Aug 2022–Present</span>
            </div>
            <CourseList courses={currentTeaching} />
          </div>
        </section>

        <section className="teaching-section">
          <h2>Previous Teaching</h2>
          <div className="teaching-group">
            <div className="teaching-group-heading">
              <div><h3>University of Tennessee, Knoxville</h3><p>Instructor of Record</p></div>
            </div>
            <CourseList courses={utkInstructorCourses} />
          </div>
          <div className="teaching-group">
            <div className="teaching-group-heading">
              <div><h3>University of Tennessee, Knoxville</h3><p>Graduate Teaching Assistant</p></div>
              <span>Aug 2021–July 2022</span>
            </div>
            <CourseList courses={assistantCourses} />
          </div>
          <div className="teaching-group">
            <div className="teaching-group-heading">
              <div><h3>Ahsanullah University of Science and Technology</h3><p>Lecturer · Dhaka, Bangladesh</p></div>
              <span>Dec 2020–June 2021</span>
            </div>
            <CourseList courses={lecturerCourses} />
          </div>
        </section>

        <section className="teaching-section">
          <h2>Mathematics Outreach</h2>
          <ul className="outreach-list">
            <li><span>2016–2019</span><div><strong>Trainer · Bangladesh Mathematical Olympiad Committee</strong><p>Led Number Theory and Combinatorics sessions; supervised national mathematics Olympiads.</p></div></li>
            <li><span>2013–2016</span><div><strong>Mentor · Bangladesh Mathematical Olympiad Committee</strong><p>Trained participants, created problems, graded scripts, and supervised divisional Olympiads.</p></div></li>
          </ul>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
