import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">{eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
          <div className="mt-6 w-20 h-1 gradient-primary rounded-full mx-auto" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
