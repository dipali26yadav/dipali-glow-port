import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";
import { Section } from "./Section";

const projects = [
  {
    title: "Custom HashMap Based Banking System",
    date: "November 2025",
    tech: ["C++", "DSA"],
    points: [
      "Implemented a banking system using a custom-built HashMap with chaining for efficient data storage.",
      "Designed account creation, deposits, withdrawals, and fund transfers.",
      "Achieved O(1) average lookup and update operations.",
      "Ensured secure transaction processing with proper edge-case handling.",
    ],
    github: "https://github.com/",
    demo: null,
  },
  {
    title: "Expense Splitter",
    date: "June 2025",
    tech: ["React", "Node.js", "Express.js", "MySQL", "REST APIs"],
    points: [
      "Developed a full-stack expense management application.",
      "Built REST APIs for participant and expense management.",
      "Integrated frontend with backend using Fetch API.",
      "Implemented expense distribution and balance calculation logic.",
    ],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work" subtitle="A selection of projects showcasing my engineering skills.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group relative glass-strong rounded-3xl p-7 shadow-card hover-lift overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-mono text-primary mb-3">
                <FiCalendar /> {p.date}
              </div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:text-primary text-sm font-medium transition-colors"
                >
                  <FiGithub /> GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold shadow-glow"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
