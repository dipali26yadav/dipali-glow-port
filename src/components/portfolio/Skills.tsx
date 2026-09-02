import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiBook, FiTool } from "react-icons/fi";
import { Section } from "./Section";

const groups = [
  { icon: FiCode, title: "Programming", items: [{ name: "C++", level: 90 }, { name: "Python", level: 80 }, { name: "JavaScript", level: 85 }] },
  { icon: FiServer, title: "Backend", items: [{ name: "Node.js", level: 82 }, { name: "Express.js", level: 80 }, { name: "REST APIs", level: 85 }] },
  { icon: FiDatabase, title: "Database", items: [{ name: "SQL", level: 90 }, { name: "MySQL", level: 95 }] },
  { icon: FiBook, title: "Core Subjects", items: [{ name: "DSA", level: 90 }, { name: "OOP", level: 85 }, { name: "Operating Systems", level: 78 }, { name: "Computer Networks", level: 75 }, { name: "DBMS", level: 82 }] },
  { icon: FiTool, title: "Tools", items: [{ name: "Git", level: 85 }, { name: "GitHub", level: 88 }, { name: "VS Code", level: 92 }] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tech Arsenal" subtitle="Tools and technologies I use to bring ideas to life.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-strong rounded-2xl p-6 shadow-card hover-lift"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground">
                <g.icon />
              </div>
              <h3 className="font-bold text-lg">{g.title}</h3>
            </div>
            <div className="space-y-3">
              {g.items.map((it) => (
                <div key={it.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{it.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">{it.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${it.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full gradient-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
