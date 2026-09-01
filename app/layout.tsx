import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asir Intesar Tushar | Bayesian Statistics & Computational Mathematics",
  description:
    "Academic website of Asir Intesar Tushar, a Ph.D. candidate at the University of Tennessee, Knoxville, working in Bayesian statistics, MCMC, point-cloud analysis, and uncertainty quantification.",
  keywords: [
    "Asir Intesar Tushar",
    "Bayesian statistics",
    "Markov chain Monte Carlo",
    "point cloud analysis",
    "uncertainty quantification",
    "University of Tennessee Knoxville",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
