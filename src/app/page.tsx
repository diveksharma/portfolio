'use client';

import AnoAI from '@/components/ui/animated-shader-background';
import { Paintbrush, Code, Sparkles, Wrench } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const screenshots = [
  {
    file: '/screenshots/social-one/01-dashboard-overview.png',
    label: 'Overview',
    title: 'Cross-Platform Dashboard',
    description: 'A unified view of 107.7K total followers across YouTube, TikTok, Instagram and Facebook. The follower growth chart shows all platforms on a single timeline, and the AI Insights panel delivers a plain-English performance summary on demand.',
  },
  {
    file: '/screenshots/social-one/02-dashboard-youtube.png',
    label: 'YouTube',
    title: 'YouTube Analytics',
    description: '53.1K subscribers and 5.5M lifetime views with a per-video performance chart. Each bar represents an individual upload so you can immediately see which content drove growth and which underperformed.',
  },
  {
    file: '/screenshots/social-one/03-dashboard-tiktok.png',
    label: 'TikTok',
    title: 'TikTok Performance',
    description: '38.9K followers and 724.4K total likes tracked across 82 videos. The video distribution chart reveals which uploads got the most traction and shows the upward trend in average likes over time.',
  },
  {
    file: '/screenshots/social-one/04-analytics.png',
    label: 'Analytics',
    title: 'Deep-Dive Analytics',
    description: 'A dedicated page with four cross-platform charts: engagement rate per platform, a composite Platform Health Score, a Content Velocity stacked bar showing posts per week, and a Total Reach donut. All four update together when the date range changes.',
  },
  {
    file: '/screenshots/social-one/05-analytics-ai-explain.png',
    label: 'AI Explain',
    title: 'AI-Powered Insight Overlay',
    description: 'Clicking "View insight" on any chart sends the data to the Claude API and streams back a focused analysis. The overlay appears without shifting the layout and the result is cached so you only pay for the API call once per session.',
  },
];

function ScreenshotShowcase() {
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  return (
    <div className="rounded-xl border border-dark-border bg-dark-card shadow-2xl overflow-hidden">
      {/* Browser bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-dark-surface border-b border-dark-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <div className="w-3 h-3 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 bg-dark-card rounded-md px-3 py-1 text-xs text-gray-500 font-mono truncate">
          social-one-demo.vercel.app/dashboard
        </div>
      </div>

      {/* Tab strip */}
      <div className="flex gap-0.5 px-3 pt-2 overflow-x-auto bg-dark-surface border-b border-dark-border" style={{ scrollbarWidth: 'none' }}>
        {screenshots.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className={`shrink-0 px-3 py-1.5 text-[11px] font-medium rounded-t transition-colors ${
              active === i
                ? 'bg-dark-card text-[#6d75e3] border border-b-0 border-dark-border'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Screenshot */}
      <div className="relative w-full aspect-[16/10] bg-[#0a0a0a] overflow-hidden">
        <Image
          key={active}
          src={current.file}
          alt={current.title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 960px"
          priority={active === 0}
          unoptimized
        />
      </div>

      {/* Caption */}
      <div className="px-5 py-3 bg-dark-surface border-t border-dark-border">
        <p className="text-sm font-semibold text-white mb-0.5">{current.title}</p>
        <p className="text-xs text-gray-400 leading-relaxed">{current.description}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="font-[family-name:var(--font-inter)] text-gray-100">
      <AnoAI />
      <div className="relative z-10">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-dark-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-[family-name:var(--font-raleway)] font-bold text-lg text-white tracking-tight">
            DS
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#work" className="hover:text-white transition-colors">Project</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

          <div className="flex-1">
            <h1 className="font-[family-name:var(--font-raleway)] font-bold text-4xl lg:text-5xl leading-tight text-white mb-3">
              I design and build<br />
              <span className="text-[#6d75e3]">digital products</span>
            </h1>
            <p className="font-[family-name:var(--font-raleway)] font-medium text-lg text-gray-400 mb-6">
              from Figma to deployed code
            </p>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-lg">
              UI/UX designer who actually codes. I take ideas from wireframe to working product,
              designing interfaces and building them with modern frontend tools.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#work"
                className="bg-white hover:bg-gray-200 text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                View my work ↓
              </a>
              <a
                href="https://www.linkedin.com/in/divek-sharma-0203i5/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-dark-border hover:border-[#6d75e3] hover:text-[#6d75e3] text-gray-300 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
              >
                LinkedIn →
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Figma', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Claude Code'].map((t) => (
                <span
                  key={t}
                  className="bg-dark-card text-gray-400 text-xs font-medium px-3 py-1.5 rounded-md border border-dark-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#6d75e3]/30" />
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-dark-card shadow-xl bg-[#6d75e3]">
                <img src="/photo.jpg" alt="Divek Sharma" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BRING */}
      <section id="about" className="bg-dark-surface/70 backdrop-blur-sm border-y border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6d75e3] mb-3">What I bring</p>
          <h2 className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-white mb-12">
            The full picture: design <em>and</em> code
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-card rounded-xl p-7 border border-dark-border">
              <div className="w-10 h-10 rounded-lg bg-[#6d75e3]/10 flex items-center justify-center mb-5">
                <Paintbrush className="w-5 h-5 text-[#6d75e3]" />
              </div>
              <h3 className="font-[family-name:var(--font-raleway)] font-semibold text-lg text-white mb-3">Design</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Figma-first. User flows, wireframes, interactive prototypes, and design systems.
                I design what I can actually build, no handoff friction.
              </p>
            </div>

            <div className="bg-dark-card rounded-xl p-7 border border-dark-border">
              <div className="w-10 h-10 rounded-lg bg-[#6d75e3]/10 flex items-center justify-center mb-5">
                <Code className="w-5 h-5 text-[#6d75e3]" />
              </div>
              <h3 className="font-[family-name:var(--font-raleway)] font-semibold text-lg text-white mb-3">Frontend</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                React, Next.js, TypeScript, Tailwind CSS.
                Turning Figma files into real, working code.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-7 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#6d75e3]/10 flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5 text-[#6d75e3]" />
              </div>
              <h3 className="font-[family-name:var(--font-raleway)] font-semibold text-lg text-white mb-3">AI-powered</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                I use Claude Code daily and integrate AI-powered features into products,
                from content analysis to intelligent dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6d75e3] mb-3">Featured project</p>
        <h2 className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-white mb-12">
          Social-One
        </h2>

        <ScreenshotShowcase />

        {/* Project details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A social media analytics platform connecting YouTube, TikTok, Instagram, and Facebook
              into one unified dashboard with AI-powered content analysis, growth trends, and audience insights.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              This is an active project currently in development. Design, features, and overall polish are still being worked on and will continue to evolve.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Multi-platform OAuth with encrypted token storage',
                'AI content profiling via Anthropic Claude API',
                'React Query with server-side prefetching',
                'Automated daily snapshots with Vercel cron jobs',
                'GDPR-compliant data handling and export pipeline',
                'Built end-to-end using Claude Code (AI-assisted dev)',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="text-[#6d75e3] mt-0.5 shrink-0">✦</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js', 'React', 'TypeScript', 'Supabase', 'Claude API', 'React Query', 'Tailwind CSS'].map((tag) => (
                <span key={tag} className="bg-purple-light text-[#6d75e3] text-xs font-medium px-3 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://social-one-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              View live demo →
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-dark-surface/70 backdrop-blur-sm border-y border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6d75e3] mb-3">Experience</p>
          <h2 className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-white mb-12">
            Where I&apos;ve worked
          </h2>

          <div className="space-y-6">
            {[
              {
                company: 'Atech Info Services AB',
                role: 'UI/UX Designer · Frontend Developer',
                period: 'February 2024 to Present',
                points: [
                  'Building the frontend of a CRM system with Vue.js, focusing on performance and scalability',
                  'Redesigning the company website from the ground up, Figma to deployed code',
                  'Worked on the UX process: user flows, wireframes, interactive prototypes',
                ],
              },
              {
                company: 'Eljun AB',
                role: 'UI/UX Designer · Web Developer',
                period: 'April 2023 to September 2023',
                points: [
                  'Redesigned the company website and app in Figma and Webflow',
                  'Conducted UX research and usability testing to identify and resolve pain points',
                  'Produced visual content for LinkedIn, SEO campaigns, and newsletters',
                ],
              },
              {
                company: 'Smart Cash',
                role: 'Junior Frontend Developer · UI/UX Designer',
                period: 'May 2021 to June 2022',
                points: [
                  'Led frontend development of a booking system using Vue.js and Tailwind CSS',
                  'Rebuilt the company e-commerce website in collaboration with an external team',
                  'Contributed UI/UX design across multiple products, improving conversion and usability',
                ],
              },
            ].map((job) => (
              <div key={job.company} className="bg-dark-card rounded-xl p-7 border border-dark-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-raleway)] font-semibold text-lg text-white">{job.company}</h3>
                    <p className="text-sm text-[#6d75e3] font-medium mt-0.5">{job.role}</p>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-dark-surface px-3 py-1.5 rounded-md whitespace-nowrap self-start sm:self-auto">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6d75e3] mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/Divek-Sharma-CV.html"
              download="Divek-Sharma-CV.html"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6d75e3] mb-3">Skills</p>
        <h2 className="font-[family-name:var(--font-raleway)] font-bold text-2xl text-white mb-12">
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              label: 'Design',
              icon: <Paintbrush className="w-4 h-4 text-[#6d75e3]" />,
              items: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Interaction Design', 'Responsive Design'],
            },
            {
              label: 'Frontend',
              icon: <Code className="w-4 h-4 text-[#6d75e3]" />,
              items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'HTML & CSS', 'JavaScript'],
            },
            {
              label: 'Tools & AI',
              icon: <Wrench className="w-4 h-4 text-[#6d75e3]" />,
              items: ['Claude Code', 'Anthropic API', 'Git', 'Vercel', 'Supabase', 'Webflow', 'Framer'],
            },
          ].map((group) => (
            <div key={group.label} className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span>{group.icon}</span>
                <h3 className="font-[family-name:var(--font-raleway)] font-semibold text-sm uppercase tracking-wider text-gray-400">
                  {group.label}
                </h3>
              </div>
              {group.items.map((skill) => (
                <div key={skill} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6d75e3] shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-dark-surface/70 backdrop-blur-sm border-t border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6d75e3] mb-4">Let&apos;s work together</p>
          <h2 className="font-[family-name:var(--font-raleway)] font-bold text-3xl lg:text-4xl text-white mb-6 leading-tight">
            Got a product idea?<br />
            <span className="text-[#6d75e3]">Let&apos;s build it.</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Whether it&apos;s a new product, a redesign, adding AI to something existing, or just a Figma file
            that needs to become real, I&apos;d love to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:diveksharm@gmail.com"
              className="bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              diveksharm@gmail.com →
            </a>
            <a
              href="https://www.linkedin.com/in/divek-sharma-0203i5/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-dark-border hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06060a]/80 backdrop-blur-sm border-t border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-raleway)] font-bold text-gray-500">DS</span>
          <p className="text-xs text-gray-600 text-center">
            © 2026 Divek Sharma · Designed & built by me
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <a href="mailto:diveksharm@gmail.com" className="hover:text-gray-400 transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/divek-sharma-0203i5/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      </div>
    </div>
  )
}
