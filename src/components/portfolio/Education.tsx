import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { Section } from "./Section";

const items = [
  {
    year: "2022 — 2026",
    title: "Bachelor of Technology",
    subtitle: "Computer Science Engineering",
    place: "Oriental College of Technology, Bhopal",
    score: "CGPA: 7.4",
  },
  {
    year: "2020 — 2021",
    title: "Higher Secondary (12th)",
    subtitle: "Science Stream",
    place: "MP Board",
    score: "81.6%",
  },
  {
    year: "2018 — 2019",
    title: "Secondary (10th)",
    subtitle: "General",
    place: "MP Board",
    score: "83%",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Journey">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:-translate-x-px" />

        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative mb-10 md:mb-14 md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}
          >
            <div className={`pl-16 md:pl-0 ${i % 2 === 1 ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
              <div className="absolute left-6 md:left-1/2 top-2 w-4 h-4 rounded-full gradient-primary shadow-glow -translate-x-1/2 ring-4 ring-background" />
              <div className="glass-strong rounded-2xl p-6 shadow-card hover-lift">
                <div className="flex items-center gap-2 mb-2 text-primary font-mono text-xs">
                  <FiBookOpen /> {item.year}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                <p className="text-sm mt-3">{item.place}</p>
                <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                  {item.score}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
