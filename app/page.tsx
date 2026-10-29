'use client'

import { FormEvent, useState } from 'react'

const projects = [
  { number: '01', title: 'Data storytelling', type: 'Research & visualization', copy: 'Turning complex findings into clear visual narratives for better decisions.' },
  { number: '02', title: 'Insight systems', type: 'Statistical analysis', copy: 'Building practical frameworks that connect evidence to meaningful action.' },
  { number: '03', title: 'Learning design', type: 'Workshops & training', copy: 'Making technical ideas approachable, memorable, and useful for teams.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main className="site-shell">
      <section id="home" className="hero-section">
        <div className="hero-overlay" />
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>KJ<span>.</span></a>
          <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /> <span />
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {['Home', 'About', 'Service', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </div>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Data analyst · problem solver</p>
          <h1>Hello, I am<br /><em>Kingsley Ijeoma</em></h1>
          <p className="hero-copy">With a strong foundation in statistical analysis and data storytelling, I help bring useful insights to life.</p>
          <a className="pill-button light" href="https://customer-segmentation-system-8zztccyfv5piw8upzzueej.streamlit.app/" target="_blank" rel="noopener noreferrer">Explore my work <span>↗</span></a>
        </div>
        <div className="scroll-note"><span /> Scroll to explore</div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-label">01 / About</div>
        <div className="about-grid">
          <div><p className="display-copy">I believe data becomes powerful when it becomes <em>understandable.</em></p></div>
          <div className="body-copy"><p>I am Kingsley Ijeoma, a data analyst passionate about finding the story inside the numbers. My work sits at the intersection of rigorous analysis, thoughtful communication, and practical impact.</p><p>Whether I am exploring a dataset, designing a workshop, or helping a team make sense of a challenge, I bring curiosity, clarity, and care to every project.</p><a className="text-link" href="https://kaydtechie3.github.io/Kingsley_Ij-Personal-Portfolio.github.io/" target="_blank" rel="noopener noreferrer">Let&apos;s work together <span>→</span></a></div>
        </div>
        <figure className="about-video">
          <video controls playsInline preload="metadata" aria-label="About me video">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-10-29%20at%204.51.50%20AM%20%284%29-eatRSWVslrgjzjMbUoJXvxP8nbyPig.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <figcaption>About me</figcaption>
        </figure>
        <div className="skills-block">
          <div className="skills-heading"><span>Skills</span><p>Tools for turning complex questions into clear, useful direction.</p></div>
          <div className="skills-list" aria-label="Skills">
            {['Business Intelligence & Reporting', 'Data Wrangling, Cleaning & Validation', 'Dashboard Development and Data Visualization', 'Data Storytelling and Insight Communication', 'Predictive Modelling', 'Problem Solving & Root Cause Analysis', 'Data Quality Analysis'].map((skill, index) => <span className="skill-chip" key={skill}><b>{String(index + 1).padStart(2, '0')}</b>{skill}</span>)}
          </div>
        </div>
        <div className="experience-block">
          <div className="skills-heading"><span>Experience</span><p>A practical record of turning analysis into momentum.</p></div>
          <article className="experience-card">
            <div className="experience-meta"><span>2026 – Now</span><span>Business Intelligence</span></div>
            <p>Translate technical analysis into business-friendly insights by uncovering information that drives growth and efficiency.</p>
          </article>
        </div>
        <div className="stat-row"><div><strong>05+</strong><span>Years learning<br />and doing</span></div><div><strong>20+</strong><span>Projects &<br />analyses</span></div><div><strong>∞</strong><span>Curiosity for<br />better questions</span></div></div>
      </section>

      <section id="service" className="section dark-section service-section">
        <div className="section-label">02 / Services</div>
        <div className="service-heading"><h2>What I<br /><em>bring</em></h2><p>From raw information to confident decisions, I make the process clearer at every step.</p></div>
        <div className="service-list"><article><span>01</span><h3>Data analysis</h3><p>I transform raw data into meaningful insights that help businesses understand performance, identify trends, and make data-driven decisions.</p><p className="service-offer"><strong>What I offer</strong>Data cleaning and preprocessing · Exploratory Data Analysis · Statistical analysis and hypothesis testing · Customer behavior and sales analysis · Business performance reporting</p><p className="service-tools">Tools: Python, Pandas, NumPy, SQL &amp; Excel.</p></article><article><span>02</span><h3>Machine learning &amp; predictive modeling</h3><p>I develop and evaluate machine learning models that uncover patterns, predict future outcomes, and support smarter business decisions.</p><p className="service-offer"><strong>What I offer</strong>Predictive modeling and forecasting · Customer churn prediction · Customer segmentation · Recommendation systems · Model evaluation and performance optimization</p><p className="service-tools">Tools: Python, Scikit-learn, Pandas, NumPy, XGBoost.</p></article><article><span>03</span><h3>Data visualization &amp; dashboard development</h3><p>I create clear, interactive visualizations and dashboards that turn complex datasets into actionable business insights.</p><p className="service-offer"><strong>What I offer</strong>Interactive business intelligence dashboards · Sales and financial performance dashboards · KPI tracking and reporting · Trend and pattern visualization · Data storytelling and insight presentation</p><p className="service-tools">Tools: Power BI, Matplotlib, Seaborn, Plotly, Excel.</p></article></div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="section-label">03 / Selected work</div><div className="portfolio-heading"><h2>Recent <em>thinking</em></h2><p>A selection of projects shaped by questions, evidence, and a desire to make things better.</p><a className="text-link project-link" href="https://kaydtechie3.github.io/Kingsley_Ij-Personal-Portfolio.github.io" target="_blank" rel="noopener noreferrer">My Project ↗</a></div>
        <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.copy}</p></div><span className="project-arrow">↗</span></article>)}</div>
      </section>

      <section id="contact" className="contact-section"><div className="section-label">04 / Contact</div><div className="contact-grid"><div><h2>Have a question?<br /><em>Let&apos;s talk.</em></h2><a className="contact-linkedin" href="https://linkedin.com/in/soniya-kaushik-978b63378?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">Feel free to message me ↗</a><p>Tell me a little about what you are working on and I&apos;ll get back to you soon.</p><div className="contact-details"><a href="mailto:kingsley@example.com">kingsley@example.com</a><span>Lagos, Nigeria · Available worldwide</span></div></div><form onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" placeholder="How can I help?" rows={4} /></label><button className="pill-button dark" type="submit">{sent ? 'Message ready ✓' : 'Send message ↗'}</button>{sent && <p className="form-note" role="status">Thanks — your note is ready to send. I&apos;ll be in touch.</p>}</form></div></section>
      <footer><a className="brand" href="#home">KJ<span>.</span></a><span>© 2026 Kingsley Ijeoma</span><a href="#home">Back to top ↑</a></footer>
    </main>
  )
}
