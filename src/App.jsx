import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bot,
  Cloud,
  LayoutTemplate,
  Mail,
  MapPin,
  Menu,
  PlayCircle,
  X,
} from 'lucide-react'
import portrait from './assets/moriah.jpg'

const profile = {
  name: 'Moriah Afolabi',
  title: 'AI Automation Engineer, Front-End Builder, and Content Creator',
  location: 'Ibadan, Oyo State, Nigeria',
  email: 'afolabimoriah@gmail.com',
  linkedin: 'https://www.linkedin.com/in/moriah-afolabi-87950b1b6',
  intro:
    'I build intelligent automations, polished web interfaces, and practical cloud-backed solutions. My work combines structured workflow design, modern front-end execution, and content systems that help brands and teams move with more clarity and speed.',
}

const expertise = [
  {
    icon: Bot,
    title: 'AI Automation',
    text:
      'I design workflow systems with n8n and automation logic shaped by real operational needs, from validation and branching to cleaner handoffs, duplicate prevention, and smarter execution.',
    points: [
      'n8n workflow design',
      'structured automation logic',
      'validation and upsert flows',
      'process efficiency',
    ],
  },
  {
    icon: LayoutTemplate,
    title: 'Front-End Development',
    text:
      'I build websites, landing pages, and web experiences with React and AI-assisted workflows, with strong attention to layout, responsiveness, clarity, and professional presentation.',
    points: ['React websites', 'landing pages', 'AI-assisted builds', 'responsive interfaces'],
  },
  {
    icon: Cloud,
    title: 'AWS Exposure',
    text:
      'My AWS experience includes practical exposure to Lambda and cloud-backed execution, supporting automation workflows and delivery across real project environments.',
    points: ['AWS Lambda', 'cloud-backed execution', 'deployment support', 'workflow integration'],
  },
]

const work = [
  {
    title: 'AI-Assisted Landing Page Build',
    category: 'Front-End',
    description:
      'A live landing page project built with a strong focus on clean structure, spacing, responsiveness, and conversion-conscious presentation.',
    link: 'https://landing-page-six-beta-93.vercel.app/',
    cta: 'View Project',
    icon: LayoutTemplate,
  },
  {
    title: 'n8n Automation Demo',
    category: 'AI Automation',
    description:
      'A workflow automation demo showing event-driven thinking, structured logic, and practical system design using n8n.',
    link: 'https://drive.google.com/file/d/1g6ieLpixEG_qMaJFgpG3GSAuLEjVCd46/view?usp=sharing',
    cta: 'Watch Demo',
    icon: PlayCircle,
  },
  {
    title: 'NGO Content Creation and Page Support',
    category: 'Content Creation',
    description:
      'Content design and social media execution for an NGO, combining visual storytelling, page support, and audience-facing communication.',
    link: 'https://www.instagram.com/reel/DWGmpJuiKyb/?igsh=bGswNGxyMzdpZ3Rw',
    cta: 'View Content',
    icon: LayoutTemplate,
  },
]

function LinkedinIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03 2.03 2.03 0 0 0 5.25 7.06 2.04 2.04 0 0 0 7.31 5.03 2.04 2.04 0 0 0 5.25 3ZM20.8 13.08c0-3.44-1.84-5.04-4.29-5.04-1.98 0-2.87 1.09-3.36 1.85V8.5H9.78c.04.92 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.91 1.05 1.91 2.58V20H20.8v-6.92Z" />
    </svg>
  )
}

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>
}

function SectionHeading({ label, title, text }) {
  return (
    <div className="section-heading">
      <SectionLabel>{label}</SectionLabel>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function ProjectCard({ item }) {
  const Icon = item.icon

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="card project-card"
    >
      <div className="project-top">
        <div className="project-meta-row">
          <span className="pill">{item.category}</span>
          <div className="icon-shell">
            <Icon size={20} />
          </div>
        </div>
        <div className="project-copy">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="project-actions">
        <a href={item.link} target="_blank" rel="noreferrer" className="button button-light">
          {item.cta}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page-shell">
      <div className="background-glow" />

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-sub">AI Automation • Front-End • AWS</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button button-ghost desktop-only">
              LinkedIn
              <LinkedinIcon />
            </a>

            <button
              type="button"
              className="menu-toggle mobile-only"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="container mobile-menu-inner">
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
              <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button button-light">
                LinkedIn
                <LinkedinIcon />
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <SectionLabel>Portfolio</SectionLabel>
              <div className="hero-heading-block">
                <h1>{profile.title}</h1>
                <p>{profile.intro}</p>
              </div>
              <div className="hero-actions">
                <a href="#work" className="button button-light">
                  View Work
                  <ArrowUpRight size={16} />
                </a>
                <a href={`mailto:${profile.email}`} className="button button-ghost">
                  Email Me
                  <Mail size={16} />
                </a>
              </div>
              <div className="hero-meta-grid">
                <div className="card compact-card">
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{profile.location}</span>
                  </div>
                </div>
                <div className="card compact-card">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="meta-item link-reset">
                    <LinkedinIcon />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-portrait-wrap">
              <div className="card portrait-card">
                <img src={portrait} alt="Portrait of Moriah Afolabi" className="portrait-image" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeading
              label="About"
              title="I build with structure, clarity, and intent."
              text="My work sits across AI automation, front-end development, AWS-backed execution, and content support. I enjoy turning manual processes into cleaner systems and shaping digital experiences that feel sharp, usable, and professionally finished."
            />
          </div>
        </section>

        <section id="expertise" className="section">
          <div className="container">
            <div className="expertise-grid">
              {expertise.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div key={item.title} whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="card expertise-card">
                    <div className="icon-shell large-shell">
                      <Icon size={24} />
                    </div>
                    <div className="expertise-copy">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <div className="chip-row">
                      {item.points.map((point) => (
                        <span key={point} className="chip">
                          {point}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <SectionHeading
              label="Selected Work"
              title="A few examples of the way I build."
              text="These projects reflect the kind of work I enjoy most: thoughtful automation, polished front-end delivery, and creative support that strengthens communication and presentation."
            />
            <div className="project-grid">
              {work.map((item) => (
                <ProjectCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="card contact-card">
              <div className="contact-copy">
                <SectionLabel>Contact</SectionLabel>
                <h2>Let’s connect.</h2>
                <p>
                  For collaborations, opportunities, and project conversations, you can reach me directly by email or LinkedIn.
                </p>
              </div>
              <div className="contact-actions">
                <a href={`mailto:${profile.email}`} className="button button-light">
                  Email Me
                  <Mail size={16} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button button-ghost">
                  LinkedIn
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
