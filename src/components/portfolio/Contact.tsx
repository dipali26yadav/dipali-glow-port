import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { Section } from "./Section";

const contacts = [
  { icon: FiMail, label: "Email", value: "pateldeepali732@gmail.com", href: "mailto:pateldeepali732@gmail.com" },
  { icon: FiGithub, label: "GitHub", value: "@dipali_yadav", href: "https://github.com/" },
  { icon: FiLinkedin, label: "LinkedIn", value: "Dipali Yadav", href: "https://linkedin.com/" },
  { icon: SiLeetcode, label: "LeetCode", value: "Dipali26yadav", href: "https://leetcode.com/u/Dipali26yadav/" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration placeholder — wire real keys via environment or secrets
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Connect" subtitle="Have an opportunity or just want to say hi? Drop me a message.">
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-3"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 glass-strong rounded-2xl p-4 hover-lift group"
            >
              <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                <c.icon size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <p className="font-semibold group-hover:text-primary transition-colors">{c.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 glass-strong rounded-3xl p-7 shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
          </div>
          <Input label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
          <div>
            <label className="text-sm font-medium mb-1.5 block">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform"
          >
            {sent ? (
              <>
                <FiCheck /> Message Sent!
              </>
            ) : (
              <>
                <FiSend /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium mb-1.5 block">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
        placeholder={label}
      />
    </div>
  );
}
