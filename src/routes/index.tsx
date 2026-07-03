import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { LeetCode } from "@/components/portfolio/LeetCode";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dipali Yadav — Software Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Dipali Yadav, Computer Science Engineering graduate (2026) specializing in DSA, backend development, and scalable software solutions.",
      },
      { property: "og:title", content: "Dipali Yadav — Software Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "CSE graduate (2026) passionate about building scalable software. Skilled in C++, JavaScript, Node.js, React and DSA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <LeetCode />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
