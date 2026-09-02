import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FiExternalLink, FiTrendingUp } from "react-icons/fi";
import { Section } from "./Section";

const stats = [
  { label: "Total Solved", value: "214+", accent: true },
  { label: "Easy", value: "90+" },
  { label: "Medium", value: "100+" },
  { label: "Hard", value: "24+" },
];

export function LeetCode() {
  return (
    <Section id="leetcode" eyebrow="LeetCode" title="Problem Solving">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto glass-strong rounded-3xl p-8 md:p-10 shadow-card relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/15 blur-3xl" />

        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-3xl gradient-primary flex items-center justify-center text-primary-foreground shadow-glow shrink-0">
            <SiLeetcode size={48} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold">Dipali26yadav</h3>
            <p className="text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-2">
              <FiTrendingUp className="text-primary" /> Consistently sharpening DSA skills
            </p>
            <a
              href="https://leetcode.com/u/Dipali26yadav/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Visit LeetCode <FiExternalLink />
            </a>
          </div>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold ${s.accent ? "gradient-text" : ""}`}>{s.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
