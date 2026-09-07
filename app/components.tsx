import { ArrowUpRight, BookOpen } from "lucide-react";

type PageName = "home" | "research" | "teaching" | "talks" | "cv";

const navigation: Array<{ label: string; href: string; page: PageName }> = [
  { label: "Home", href: "/", page: "home" },
  { label: "Research", href: "/research/", page: "research" },
  { label: "Teaching", href: "/teaching/", page: "teaching" },
  { label: "Talks", href: "/talks/", page: "talks" },
  { label: "CV", href: "/cv/", page: "cv" },
];

export function SiteHeader({ current }: { current: PageName }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Go to the homepage">
        <span>AIT</span>
        <strong>Asir Intesar Tushar</strong>
      </a>
      <nav className="top-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            className={item.page === current ? "active" : undefined}
            href={item.href}
            aria-current={item.page === current ? "page" : undefined}
            key={item.page}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer footer-compact">
      <div className="section-shell footer-bottom">
        <span>© 2026 Asir Intesar Tushar</span>
        <span>
          <BookOpen size={15} aria-hidden="true" /> Mathematics · Statistics ·
          Computation
        </span>
      </div>
    </footer>
  );
}

export function PageIntro({ number, label, title, intro }: {
  number: string;
  label: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-intro section-shell">
      <p className="eyebrow">{number} · {label}</p>
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  );
}

export function ExploreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="explore-link" href={href}>
      {children} <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
