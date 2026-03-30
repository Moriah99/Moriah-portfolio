import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Download,
  LayoutTemplate,
  Mail,
  MapPin,
  Menu,
  PlayCircle,
  X,
} from "lucide-react";

const CV_BASE64 = "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";

const profile = {
  name: "Moriah Afolabi",
  title: "AI Automation & Front-End Engineer",
  location: "Ibadan, Nigeria",
  email: "afolabimoriah@gmail.com",
  linkedin: "https://www.linkedin.com/in/moriah-afolabi-1b5746231/",
  intro:
    "I build automation systems and front-end experiences that reduce manual work, improve workflow clarity, and deliver clean interfaces people can actually use. My strongest work sits in n8n automation, React-based web development, and structured systems thinking.",
};

const stats = [
  { value: "60%", label: "Estimated reduction in repetitive workflow steps across automation flows" },
  { value: "3", label: "Live project examples linked directly from the portfolio" },
  { value: "2", label: "Core technical focus areas: automation and front-end delivery" },
];

const expertise = [
  {
    icon: Bot,
    title: "AI Automation",
    text:
      "Designing and deploying event-driven workflow systems with n8n. I build automations that validate data, reduce duplication, and move information more efficiently across tools.",
    points: [
      "n8n workflow architecture",
      "Slack and CRM automation",
      "validation and upsert logic",
      "error handling and process reliability",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Front-End Development",
    text:
      "Building responsive websites and landing pages with React and AI-assisted workflows, with strong attention to structure, readability, user flow, and visual polish.",
    points: [
      "React landing pages",
      "responsive interfaces",
      "AI-assisted development",
      "clean UI systems",
    ],
  },
];

const projects = [
  {
    title: "AI-Assisted Landing Page",
    category: "Front-End",
    description:
      "Designed and built a responsive landing page using React with a focus on layout clarity, spacing, and a conversion-ready structure.",
    impact:
      "Delivered a scalable front-end structure suitable for real product presentation and iteration.",
    link: "https://landing-page-six-beta-93.vercel.app/",
    preview: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://landing-page-six-beta-93.vercel.app/",
    cta: "View Project",
    icon: LayoutTemplate,
  },
  {
    title: "n8n Automation Workflow",
    category: "Automation",
    description:
      "Built an event-driven workflow using n8n to automate structured processes and reduce manual handling across repetitive steps.",
    impact:
      "Improved workflow efficiency by replacing repeated manual actions with a cleaner automated process.",
    link: "https://drive.google.com/file/d/1g6ieLpixEG_qMaJFgpG3GSAuLEjVCd46/view",
    preview: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://drive.google.com/file/d/1g6ieLpixEG_qMaJFgpG3GSAuLEjVCd46/view",
    cta: "View Demo",
    icon: PlayCircle,
  },
  {
    title: "NGO Content System",
    category: "Content",
    description:
      "Managed and designed content for an NGO social page, supporting stronger presentation, clearer messaging, and more consistent communication.",
    impact:
      "Strengthened audience-facing content delivery and improved how the work was presented online.",
    link: "https://www.instagram.com/reel/DWGmpJuiKyb/",
    preview: "https://image.thum.io/get/width/1200/crop/800/noanimate/https://www.instagram.com/reel/DWGmpJuiKyb/",
    cta: "View Content",
    icon: LayoutTemplate,
  },
];

function LinkedinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03 2.03 2.03 0 0 0 5.25 7.06 2.04 2.04 0 0 0 7.31 5.03 2.04 2.04 0 0 0 5.25 3ZM20.8 13.08c0-3.44-1.84-5.04-4.29-5.04-1.98 0-2.87 1.09-3.36 1.85V8.5H9.78c.04.92 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.91 1.05 1.91 2.58V20H20.8v-6.92Z" />
    </svg>
  );
}

function downloadCv() {
  const cleaned = CV_BASE64.replace(/\s+/g, "");
  const byteChars = atob(cleaned);
  const byteNumbers = new Array(byteChars.length);
  for (let i = 0; i < byteChars.length; i += 1) byteNumbers[i] = byteChars.charCodeAt(i);
  const blob = new Blob([new Uint8Array(byteNumbers)], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Moriah-Afolabi-CV.docx";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function NavLink({ href, children, mobile = false }) {
  return (
    <a
      href={href}
      className={mobile
        ? "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-stone-200"
        : "rounded-full px-4 py-2 text-sm font-medium text-stone-300 transition hover:bg-white/10 hover:text-white"}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">{children}</p>;
}

function SectionHeading({ label, title, text }) {
  return (
    <div className="max-w-3xl space-y-4">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="text-lg leading-8 text-stone-300">{text}</p>
    </div>
  );
}

function MetricCard({ value, label }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="text-4xl font-semibold tracking-tight text-white">{value}</div>
      <p className="mt-3 text-sm leading-7 text-stone-300">{label}</p>
    </div>
  );
}

function ProjectCard({ item }) {
  const Icon = item.icon;
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_16px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#3a2a22] via-[#171416] to-[#0b0a0d]">
        {!imageError ? (
          <img
            src={item.preview}
            alt={`${item.title} preview`}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-8 text-center text-sm leading-7 text-stone-300">
            Live preview unavailable in this environment. Use the project link below to view the work directly.
          </div>
        )}
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-white/50" />
          <span className="h-3 w-3 rounded-full bg-white/30" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
        </div>
      </div>

      <div className="space-y-6 p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-300">
            {item.category}
          </span>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-white">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
          <p className="text-base leading-8 text-stone-300">{item.description}</p>
          <p className="text-sm leading-7 text-stone-400">{item.impact}</p>
        </div>

        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-[#171416] transition hover:translate-y-[-1px]"
        >
          {item.cta}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

function runChecks() {
  const checks = [
    projects.every((item) => item.link.startsWith("http")),
    projects.every((item) => item.preview.startsWith("http")),
    profile.linkedin.startsWith("https://www.linkedin.com/"),
  ];
  if (checks.includes(false)) throw new Error("Portfolio data is incomplete.");
}

runChecks();

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const styles = useMemo(
    () => `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      :root { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      html { scroll-behavior: smooth; }
      body { background: #120f10; }
    `,
    []
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#120f10] text-white">
      <style>{styles}</style>

      <div className="fixed inset-0 -z-20 bg-[#120f10]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(212,142,85,0.22),transparent_22%),radial-gradient(circle_at_88%_14%,rgba(120,98,255,0.18),transparent_20%),radial-gradient(circle_at_50%_72%,rgba(255,255,255,0.05),transparent_18%),linear-gradient(180deg,#120f10_0%,#151113_36%,#1c1718_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      <motion.div
        className="pointer-events-none fixed -left-24 top-20 -z-10 h-80 w-80 rounded-full bg-[#ce7b46]/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none fixed right-0 top-40 -z-10 h-96 w-96 rounded-full bg-[#7c6cff]/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120f10]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="text-left">
            <div className="text-lg font-semibold tracking-tight text-white">{profile.name}</div>
            <div className="text-sm text-stone-400">Automation • Front-End • Systems</div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#expertise">Expertise</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={downloadCv}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download CV
              <Download className="h-4 w-4" />
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#171416] transition hover:translate-y-[-1px]"
            >
              LinkedIn
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#120f10]/95 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <NavLink href="#about" mobile>About</NavLink>
              <NavLink href="#expertise" mobile>Expertise</NavLink>
              <NavLink href="#projects" mobile>Projects</NavLink>
              <NavLink href="#contact" mobile>Contact</NavLink>
              <button
                onClick={downloadCv}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
              >
                Download CV
                <Download className="h-4 w-4" />
              </button>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#171416]"
              >
                LinkedIn
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-32 lg:pt-28">
          <div className="flex items-center">
            <div className="space-y-8">
              <SectionLabel>Portfolio</SectionLabel>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {profile.title}
                </h1>
                <p className="max-w-2xl text-xl leading-9 text-stone-300">{profile.intro}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-[#171416] transition hover:translate-y-[-1px]"
                >
                  View Work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <button
                  onClick={downloadCv}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Download CV
                  <Download className="h-4 w-4" />
                </button>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Email Me
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-sm text-stone-300">
                    <MapPin className="h-4 w-4" />
                    {profile.location}
                  </div>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-stone-300 transition hover:text-white">
                    <LinkedinIcon className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] rounded-[34px] border border-white/10 bg-white/5 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.36)] backdrop-blur-sm">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#ce7b46]/20 blur-3xl" />
              <div className="absolute -bottom-4 -right-2 h-28 w-28 rounded-full bg-[#7c6cff]/20 blur-3xl" />
              <img
                src="/moriah.jpg"
                alt="Portrait of Moriah Afolabi"
                className="relative h-full w-full rounded-[26px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="grid gap-6 lg:grid-cols-3">
            {stats.map((item) => (
              <MetricCard key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            label="About"
            title="I build with structure, clarity, and intent."
            text="My work is strongest where systems need to become cleaner and interfaces need to become sharper. I enjoy turning repetitive processes into smarter workflows and shaping front-end experiences that feel polished, useful, and professionally finished."
          />
        </section>

        <section id="expertise" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_16px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm"
                >
                  <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-black/20 p-3 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                    <p className="text-base leading-8 text-stone-300">{item.text}</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <span key={point} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-stone-300">
                        {point}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            label="Selected Work"
            title="A few examples of how I build."
            text="These projects show the kind of work I enjoy most: thoughtful automation, polished front-end delivery, and supporting systems that improve how ideas are presented and executed."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {projects.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 rounded-[34px] border border-white/10 bg-white/5 p-10 shadow-[0_16px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="space-y-4">
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Open to meaningful work and strong opportunities.</h2>
              <p className="max-w-2xl text-lg leading-8 text-stone-300">
                For collaborations, project conversations, and roles that sit around automation, front-end delivery, or digital systems, you can reach me directly by email or LinkedIn.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-[#171416] transition hover:translate-y-[-1px]"
              >
                Email Me
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
