import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiCode, FiArrowRight } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import avatar from "@/assets/hero-avatar.png";

const roles = ["Computer Science Engineer", "Software Engineer", "Full Stack Developer", "Problem Solver"];

function useTyping() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((idx + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, idx]);

  return text;
}

const socials = [
  { icon: FiGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Dipali26yadav/", label: "LeetCode" },
  { icon: FiMail, href: "mailto:dipali@example.com", label: "Email" },
];

export function Hero() {
  const typed = useTyping();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      {/* floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </span>
          <p className="text-lg text-muted-foreground font-mono">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            <span className="gradient-text">Dipali Yadav</span>
          </h1>
          <div className="text-2xl md:text-3xl font-display font-medium h-10 flex items-center">
            <FiCode className="text-primary mr-3" />
            <span>{typed}</span>
            <span className="ml-1 w-0.5 h-7 bg-primary animate-blink" />
          </div>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Computer Science Engineering graduate (2026) from Oriental College of Technology, Bhopal.
            Passionate about solving real-world problems through technology and building scalable software solutions.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong font-semibold hover-lift"
            >
              <FiDownload /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center gap-3 pt-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="p-3 rounded-full glass hover:text-primary hover:shadow-glow transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-8 gradient-primary rounded-full blur-3xl opacity-30 animate-glow-pulse" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full glass-strong p-2 shadow-glow animate-float">
              <img
                src={avatar}
                alt="Dipali Yadav"
                width={1024}
                height={1024}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Floating tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 glass-strong px-4 py-2 rounded-2xl shadow-card font-mono text-sm"
            >
              &lt;/&gt; C++
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/3 -right-6 glass-strong px-4 py-2 rounded-2xl shadow-card font-mono text-sm"
            >
              &#123;React&#125;
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -bottom-2 left-8 glass-strong px-4 py-2 rounded-2xl shadow-card font-mono text-sm"
            >
              Node.js
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
