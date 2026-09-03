import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const socials = [

  { icon: FiGithub, href: "https://github.com/dipali26yadav", label: "GitHub" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Dipali26yadav/", label: "LeetCode" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/dipali-yadav-76834221b/", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:pateldeepali732@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          Designed & Developed with <FiHeart className="text-primary animate-pulse" /> by{" "}
          <span className="font-semibold gradient-text">Dipali Yadav</span>
        </p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="p-2.5 rounded-full glass hover:text-primary hover:shadow-glow transition-all"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Dipali Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
}
