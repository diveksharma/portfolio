export default function Portfolio() {
  return (
    <div className="font-[family-name:var(--font-inter)] text-gray-900">

      {/* ─── NAV ──────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-dark">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-[family-name:var(--font-raleway)] font-black text-lg text-gray-900 tracking-tight">
            DS
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm font-semibold text-gray-500">
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <a
            href="mailto:diveksharm@gmail.com"
            className="bg-[#6d75e3] hover:bg-[#5560d4] text-white text-sm font-bold px-5 py-2 rounded-full transition-colors"
          >
            Hire me
          </a>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

          {/* Left — copy */}
          <div className="flex-1">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for freelance
            </div>

            <h1 className="font-[family-name:var(--font-raleway)] font-black text-5xl lg:text-6xl leading-tight text-gray-900 mb-3">
              I design and build<br />
              <span className="text-[#6d75e3]">digital products</span>
            </h1>
            <p className="font-[family-name:var(--font-raleway)] font-semibold text-xl text-gray-500 mb-6">
              from Figma to deployed code
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-lg">
              UI/UX designer who actually codes. I take ideas from wireframe to working product —
              including AI-powered features, full-stack architecture, and pixel-perfect interfaces.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#work"
                className="bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                View my work ↓
              </a>
              <a
                href="https://www.linkedin.com/in/divek-sharma-0203i5/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-200 hover:border-[#6d75e3] hover:text-[#6d75e3] text-gray-700 font-bold px-6 py-3 rounded-xl transition-colors"
              >
                LinkedIn →
              </a>
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
              {['Figma', 'React', 'Next.js', 'TypeScript', 'Supabase', 'Claude Code'].map((t) => (
                <span
                  key={t}
                  className="bg-cream-mid text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-cream-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="shrink-0">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#6d75e3]/30" />
              {/* Photo — replace src with your actual photo URL */}
              <div className="w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-[#6d75e3] flex items-center justify-center">
                {/*
                  TO REPLACE WITH YOUR PHOTO:
                  Change the div below to: <img src="/photo.jpg" alt="Divek Sharma" className="w-full h-full object-cover" />
                  Then add your photo.jpg to the public/ folder.
                */}
                <span className="font-[family-name:var(--font-raleway)] font-black text-6xl text-white">
                  DS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT I BRING ─────────────────────────────────────────────────── */}
      <section id="about" className="bg-white border-y border-cream-dark">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6d75e3] mb-3">What I bring</p>
          <h2 className="font-[family-name:var(--font-raleway)] font-black text-3xl text-gray-900 mb-12">
            The full picture — design <em>and</em> code
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-cream rounded-2xl p-7 border border-cream-dark">
              <div className="w-10 h-10 rounded-xl bg-[#6d75e3]/10 flex items-center justify-center text-xl mb-5">
                🎨
              </div>
              <h3 className="font-[family-name:var(--font-raleway)] font-bold text-lg text-gray-900 mb-3">Design</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Figma-first. User flows, wireframes, interactive prototypes, and design systems.
                I design what I can actually build — no handoff friction.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-cream rounded-2xl p-7 border border-cream-dark">
              <div className="w-10 h-10 rounded-xl bg-[#6d75e3]/10 flex items-center justify-center text-xl mb-5">
                💻
              </div>
              <h3 className="font-[family-name:var(--font-raleway)] font-bold text-lg text-gray-900 mb-3">Build</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                React, Next.js, TypeScript, Supabase. Frontend to full-stack.
                Clean, maintainable, production-ready code that your team can build on.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#6d75e3] rounded-2xl p-7 border border-[#5560d4]">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl mb-5">
                ✦
              </div>
              <h3 className="font-[family-name:var(--font-raleway)] font-bold text-lg text-white mb-3">AI-powered</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                I use Claude Code daily and build AI-powered features into products —
                from content analysis systems to intelligent dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORK ────────────────────────────────────────────────── */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6d75e3] mb-3">Featured project</p>
        <h2 className="font-[family-name:var(--font-raleway)] font-black text-3xl text-gray-900 mb-12">
          Social-One
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Browser mockup */}
          <div className="rounded-2xl border border-gray-200 bg-gray-100 shadow-2xl overflow-hidden">
            {/* Chrome bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-200 border-b border-gray-300">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate">
                social-one-demo.vercel.app/dashboard
              </div>
            </div>
            {/* App UI */}
            <div className="flex" style={{ height: '280px' }}>
              {/* Sidebar */}
              <div className="w-14 bg-gray-900 flex flex-col items-center py-4 gap-3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-white/10 mb-2" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`w-7 h-7 rounded-lg ${i === 1 ? 'bg-white/25' : 'bg-white/8'}`} />
                ))}
              </div>
              {/* Main content */}
              <div className="flex-1 bg-gray-50 p-4 overflow-hidden">
                {/* Stat cards row */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { val: '42.3K', label: 'Followers', color: 'bg-[#6d75e3]' },
                    { val: '1.2M', label: 'Views', color: 'bg-blue-400' },
                    { val: '8.4%', label: 'Eng. Rate', color: 'bg-green-400' },
                    { val: '+847', label: 'This week', color: 'bg-orange-400' },
                  ].map((card) => (
                    <div key={card.label} className="bg-white rounded-lg p-2.5 border border-gray-100 shadow-sm">
                      <div className={`w-5 h-1.5 rounded-full ${card.color} mb-2 opacity-70`} />
                      <div className="font-bold text-xs text-gray-900">{card.val}</div>
                      <div className="text-[9px] text-gray-400 mt-0.5">{card.label}</div>
                    </div>
                  ))}
                </div>
                {/* Chart */}
                <div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-16 h-2 rounded-full bg-gray-200" />
                    <div className="flex gap-1">
                      {['7d', '30d', '90d'].map((l, i) => (
                        <div key={l} className={`text-[9px] px-2 py-0.5 rounded font-semibold ${i === 1 ? 'bg-[#6d75e3] text-white' : 'text-gray-400'}`}>{l}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end gap-0.5 h-20">
                    {[35, 50, 38, 62, 48, 70, 55, 80, 65, 88, 72, 95, 82, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all"
                        style={{
                          height: `${h}%`,
                          background: i >= 10 ? '#6d75e3' : '#e5e7eb',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project details */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-6">
              A full-stack social media analytics platform connecting YouTube, TikTok, Instagram, and Facebook
              into one unified dashboard — with AI-powered content analysis, growth trends, and audience insights.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Multi-platform OAuth with encrypted token storage',
                'AI content profiling via Anthropic Claude API',
                'React Query with server-side HydrationBoundary prefetching',
                'Automated daily snapshots with Vercel cron jobs',
                'GDPR-compliant data handling and export pipeline',
                'Built end-to-end using Claude Code (AI-assisted dev)',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-[#6d75e3] mt-0.5 shrink-0">✦</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'Claude API', 'React Query', 'Tailwind CSS'].map((tag) => (
                <span key={tag} className="bg-purple-light text-[#5560d4] text-xs font-bold px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://social-one-demo-at6ue0wxl-diveksharmas-projects.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6d75e3] hover:bg-[#5560d4] text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              View live demo →
            </a>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section className="bg-white border-y border-cream-dark">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6d75e3] mb-3">Experience</p>
          <h2 className="font-[family-name:var(--font-raleway)] font-black text-3xl text-gray-900 mb-12">
            Where I&apos;ve worked
          </h2>

          <div className="space-y-6">
            {[
              {
                company: 'Atech Info Services AB',
                role: 'UI/UX Designer · Frontend Developer',
                period: 'February 2024 – Present',
                points: [
                  'Building the frontend of a CRM system with Vue.js, focusing on performance and scalability',
                  'Redesigning the company website from the ground up — Figma to deployed code',
                  'Owning the full UX process: user flows, wireframes, interactive prototypes',
                ],
              },
              {
                company: 'Eljun AB',
                role: 'UI/UX Designer · Web Developer',
                period: 'April 2023 – September 2023',
                points: [
                  'Redesigned the company website and app in Figma and Webflow',
                  'Conducted UX research and usability testing to identify and resolve pain points',
                  'Produced visual content for LinkedIn, SEO campaigns, and newsletters',
                ],
              },
              {
                company: 'Smart Cash',
                role: 'Junior Frontend Developer · UI/UX Designer',
                period: 'May 2021 – June 2022',
                points: [
                  'Led frontend development of a booking system using Vue.js and Tailwind CSS',
                  'Rebuilt the company e-commerce website in collaboration with an external team',
                  'Contributed UI/UX design across multiple products, improving conversion and usability',
                ],
              },
            ].map((job) => (
              <div key={job.company} className="bg-cream rounded-2xl p-7 border border-cream-dark">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-raleway)] font-bold text-lg text-gray-900">{job.company}</h3>
                    <p className="text-sm text-[#6d75e3] font-semibold mt-0.5">{job.role}</p>
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-cream-mid px-3 py-1.5 rounded-full whitespace-nowrap self-start sm:self-auto">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-cream-dark mt-1 shrink-0">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="mailto:diveksharm@gmail.com"
              className="text-sm font-bold text-[#6d75e3] hover:underline"
            >
              Full CV available on request →
            </a>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ───────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6d75e3] mb-3">Skills</p>
        <h2 className="font-[family-name:var(--font-raleway)] font-black text-3xl text-gray-900 mb-12">
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: 'Design',
              icon: '🎨',
              items: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Interaction Design', 'Responsive Design'],
            },
            {
              label: 'Frontend',
              icon: '💻',
              items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'HTML & CSS', 'JavaScript'],
            },
            {
              label: 'Backend & Tools',
              icon: '⚙️',
              items: ['Node.js', 'Supabase', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Git', 'Vercel'],
            },
            {
              label: 'AI & Emerging',
              icon: '✦',
              items: ['Claude Code', 'Anthropic API', 'AI Feature Development', 'Prompt Engineering', 'Webflow', 'Framer'],
            },
          ].map((group) => (
            <div key={group.label} className="space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{group.icon}</span>
                <h3 className="font-[family-name:var(--font-raleway)] font-bold text-sm uppercase tracking-wider text-gray-500">
                  {group.label}
                </h3>
              </div>
              {group.items.map((skill) => (
                <div key={skill} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6d75e3] shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────────────────── */}
      <section id="contact" className="bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6d75e3] mb-4">Let&apos;s work together</p>
          <h2 className="font-[family-name:var(--font-raleway)] font-black text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Got a product idea?<br />
            <span className="text-[#6d75e3]">Let&apos;s build it.</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Whether it&apos;s a new product, a redesign, adding AI to something existing, or just a Figma file
            that needs to become real — I&apos;d love to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:diveksharm@gmail.com"
              className="bg-[#6d75e3] hover:bg-[#5560d4] text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              diveksharm@gmail.com →
            </a>
            <a
              href="https://www.linkedin.com/in/divek-sharma-0203i5/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-gray-950 border-t border-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-raleway)] font-black text-gray-500">DS</span>
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
  )
}
