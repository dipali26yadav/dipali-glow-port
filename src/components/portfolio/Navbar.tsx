import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "@/hooks/use-theme";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "leetcode", label: "LeetCode" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass-strong shadow-card" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="font-display font-bold text-xl">
          <span className="gradient-text">Dipali</span>
          <span className="text-primary">.</span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 gradient-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-full glass hover:shadow-glow transition-all"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden p-2 rounded-full glass">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden glass-strong border-t border-border"
        >
          <div className="flex flex-col p-4 gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${active === s.id ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
