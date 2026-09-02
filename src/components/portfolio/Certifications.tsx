import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { Section } from "./Section";

const certs = [
  { title: "Introduction to Generative AI", org: "Google Cloud" },
  { title: "Technology Job Simulation", org: "Deloitte" },
  { title: "Software Engineering Intern", org: "HackerRank" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials">
      <div className="grid md:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-strong rounded-2xl p-6 shadow-card hover-lift text-center"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground mb-4 shadow-glow">
              <FiAward size={26} />
            </div>
            <h3 className="font-bold">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.org}</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary font-medium hover:underline"
            >
              View Certificate <FiExternalLink />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
