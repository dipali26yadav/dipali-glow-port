import { motion } from "framer-motion";
import { FiTarget, FiZap, FiCpu, FiServer } from "react-icons/fi";
import { Section } from "./Section";

const highlights = [
  { icon: FiCpu, title: "DSA & Problem Solving", desc: "Strong foundation in Data Structures, Algorithms and OOP." },
  { icon: FiServer, title: "Backend Development", desc: "Node.js, Express, REST APIs and relational databases." },
  { icon: FiZap, title: "Scalable Systems", desc: "Design software that is efficient, maintainable, and clean." },
  { icon: FiTarget, title: "Goal Driven", desc: "Actively seeking Software Engineer opportunities in 2026." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Get to know me">
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong rounded-3xl p-8 shadow-card"
        >
          <p className="text-lg leading-relaxed text-foreground/90">
            I am a <span className="text-primary font-semibold">Computer Science Engineering graduate</span> from
            Oriental College of Technology, Bhopal. I enjoy solving challenging problems using technology
            and continuously improving my programming skills.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My interests include Data Structures & Algorithms, backend development, REST APIs, and building
            scalable software solutions. I am currently looking for{" "}
            <span className="text-primary font-medium">Software Engineer opportunities</span> where I can
            learn, grow, and contribute to impactful projects.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
            <Stat value="2026" label="Graduation" />
            <Stat value="7.4" label="CGPA" />
            <Stat value="214+" label="LeetCode" />
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 hover-lift"
            >
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground mb-3">
                <h.icon size={20} />
              </div>
              <h3 className="font-semibold mb-1">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold gradient-text">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}
