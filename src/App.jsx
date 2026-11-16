import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  company,
  navigation,
  projectExamples,
  achievements,
  team,
} from './data/siteContent.js';

gsap.registerPlugin(ScrollTrigger);

function Logo({ inverse = false }) {
  return (
    <a className={`brand ${inverse ? 'brand-inverse' : ''}`} href="#home" aria-label={`${company.name}, back to homepage`}>
      <span className="brand-image">
        <img src="/images/os-engineering-logo.png" width="1448" height="1086" alt={company.name} />
      </span>
    </a>
  );
}

function Header() {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    navRef.current?.querySelector('a')?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner page-shell">
          <Logo />
          <nav ref={navRef} className={`site-nav${isOpen ? ' is-open' : ''}`} id="primary-navigation" aria-label="Primary navigation">
            {navigation.map(({ title, href }) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{title}</a>
            ))}
          </nav>
          <button
            className="menu-button"
            type="button"
            ref={buttonRef}
            onClick={() => setOpen(v => !v)}
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>
      {isOpen && <button type="button" className="nav-overlay" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    </>
  );
}

function Eyebrow({ children, light = false }) {
  return <div className={`eyebrow${light ? ' eyebrow-light' : ''}`}><span aria-hidden="true" />{children}</div>;
}

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <div className="section-heading reveal">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}<br /><em>{accent}</em></h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-photograph">
        <img
          src="/images/hero-architecture-1600.webp"
          srcSet="/images/hero-architecture-480.webp 480w, /images/hero-architecture-800.webp 800w, /images/hero-architecture-1600.webp 1600w"
          sizes="100vw"
          width="1600"
          height="1200"
          fetchPriority="high"
          alt="Looking up between modern glass towers; illustrative architecture, not an O.S Engineering project"
          onError={event => {
            const image = event.currentTarget;
            if (image.dataset.fallback) return;
            image.dataset.fallback = 'true';
            image.removeAttribute('srcset');
            image.src = '/images/construction-fallback.svg';
          }}
        />
      </div>
      <div className="page-shell hero-layout">
        <div className="hero-topline">
          <span>O.S ENGINEERING / NIRMAN SEWA</span>
          <span>KATHMANDU, NEPAL</span>
        </div>
        <div className="hero-main">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="kicker-rule" aria-hidden="true" />FROM IDEAS TO THE BUILT ENVIRONMENT</div>
            <h1 id="hero-title">Ideas engineered.<br /><em>Spaces built.</em></h1>
            <p className="hero-intro">Construction, civil engineering and material supply.<br className="hero-desktop-break" /> For the places we live and work in Nepal.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">Explore our projects <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a className="button button-text" href="#about">Meet O.S Engineering <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-discipline" aria-label="Our disciplines">
            <span className="hero-discipline-label">OUR FIELD OF WORK</span>
            <a href="#projects"><span>01</span> Construction <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="#projects"><span>02</span> Civil engineering <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="#projects"><span>03</span> Materials &amp; supply <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-bottom-rule">
          <a href="#about">DISCOVER THE COMPANY <ArrowDownRight size={16} aria-hidden="true" /></a>
          <span>ILLUSTRATIVE PHOTOGRAPHY · NOT COMPANY WORK</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="page-shell about-layout">
        <div className="about-media reveal">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=78"
            width="1200"
            height="1450"
            loading="lazy"
            decoding="async"
            alt="Illustrative architectural structure; not a verified O.S Engineering project"
            onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = "/images/construction-fallback.svg"; }}
          />
          <span className="media-disclaimer">ILLUSTRATIVE PHOTOGRAPHY</span>
          <div className="about-media-corner" aria-hidden="true">01<span>/04</span></div>
        </div>
        <div className="about-copy reveal">
          <Eyebrow>01 / WHO WE ARE</Eyebrow>
          <h2 id="about-heading">A practical partner<br />for <em>what's next.</em></h2>
          <p className="about-lead">O.S Engineering Nirman Sewa Pvt. Ltd. works across construction, civil engineering, infrastructure development and project supply in Nepal.</p>
          <p>Our areas of work also include renovation, maintenance, construction materials, hardware, tools and equipment. These areas support the practical requirements of building and infrastructure work.</p>
          <div className="about-notes">
            <div><span>01</span><p><strong>Project-led thinking</strong><small>Solutions shaped around the work at hand.</small></p></div>
            <div><span>02</span><p><strong>Connected capabilities</strong><small>Construction services alongside supply needs.</small></p></div>
          </div>
          <div className="about-bottom-row">
            <a href="#contact" className="inline-link">Company information <ArrowUpRight size={17} aria-hidden="true" /></a>
            <figure className="company-stamp">
              <img src="/images/company-official-stamp.webp" width="1275" height="1290" loading="lazy" decoding="async" alt="Official O.S Engineering Nirman Sewa company stamp" />
              <figcaption>OFFICIAL COMPANY STAMP</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="page-shell">
        <div id="projects-title"><SectionHeading eyebrow="03 / OUR PROJECTS" title="Built around" accent="real-world needs." description="These examples illustrate our service areas. This is a preview of our project areas. A dedicated project directory will list ongoing and completed work when verified details are available." /></div>
        <div className="project-grid">
          {projectExamples.map((project, index) => (
            <article className={`project-card project-card-${index + 1} reveal`} key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.alt} loading="lazy" decoding="async" width="900" height="720" onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = "/images/construction-fallback.svg"; }} />
                <span className="project-image-label">ILLUSTRATIVE · NOT COMPANY WORK</span>
              </div>
              <div className="project-info"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div>
            </article>
          ))}
        </div>
        <a className="portfolio-note portfolio-link" href="#projects"><Layers3 size={17} aria-hidden="true" /> Illustrative preview only. Ongoing and completed projects will be separated in the full project directory. <span>VIEW PROJECT DIRECTORY →</span></a>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section achievements-section" id="achievements" aria-labelledby="achievements-heading">
      <div className="page-shell">
        <SectionHeading eyebrow="04 / OUR ACHIEVEMENTS" title="A record built" accent="one step at a time." description="A clear timeline for the company story. Verified dates, milestones and project outcomes will be added as they are confirmed." />
        <div className="achievement-timeline" id="achievements-heading">
          {achievements.map((item, index) => (
            <article className="achievement-item reveal" key={item.title}>
              <div className="achievement-marker"><span>{item.year}</span></div>
              <div className="achievement-content"><small> MILESTONE {String(index + 1).padStart(2, '0')}</small><h3>{item.title}</h3><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section team-section" id="team" aria-labelledby="team-heading">
      <div className="page-shell team-layout">
        <div className="team-intro reveal">
          <Eyebrow>05 / OUR TEAM</Eyebrow>
          <h2 id="team-heading">People behind<br /><em>the work.</em></h2>
          <p>The full team directory will be introduced here as roles and profiles are confirmed.</p>
          <a className="inline-link" href="#contact">Company information <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="team-profile reveal">
          <div className="team-profile-photo">
            <img src="/images/balkrishna-shrestha-profile.webp" width="1070" height="1430" loading="lazy" decoding="async" alt="Balkrishna Shrestha, Managing Director of O.S Engineering Nirman Sewa Pvt. Ltd." />
            <span>01 / LEADERSHIP</span>
          </div>
          <div className="team-profile-info">
            <small>MANAGING DIRECTOR</small>
            {team.map(member => <div key={member.name}><h3>{member.name}</h3><p>{member.detail}</p></div>)}
            <blockquote>“We believe every project deserves careful planning, honest communication and work that serves people for the long term.”</blockquote>
            <div className="team-profile-meta">A MESSAGE FROM THE MANAGING DIRECTOR</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="contact-item">
      <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
      <span><small>{label}</small><strong>{value}</strong></span>
    </div>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="page-shell contact-layout">
        <div className="contact-copy reveal">
          <Eyebrow>06 / CONTACT US</Eyebrow>
          <h2 id="contact-heading">O.S Engineering.<br /><em>Based in Nepal.</em></h2>
          <p>{company.name} works across building construction, civil engineering and materials and equipment supply.</p>
          <p>Our company information is listed here for reference.</p>
        </div>
        <div className="contact-details-panel reveal">
          <div className="contact-details">
            <ContactItem icon={Phone} label={company.demoMode ? 'PHONE · DEMO' : 'PHONE'} value={company.phone} />
            <ContactItem icon={Mail} label={company.demoMode ? 'EMAIL · DEMO' : 'EMAIL'} value={company.email} />
            <ContactItem icon={MapPin} label={company.demoMode ? 'OFFICE · SAMPLE LOCATION' : 'OFFICE LOCATION'} value={company.address} />
            <ContactItem icon={Clock3} label={company.demoMode ? 'HOURS · DEMO' : 'OFFICE HOURS'} value={company.businessHours} />
          </div>
          {company.demoMode && <div className="contact-verification"><span aria-hidden="true">i</span> Demo contact details only — these are not verified business contact details. Please do not call or email them.</div>}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socialLinks = Object.entries(company.socials).filter(([, url]) => Boolean(url));
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-top">
          <div className="footer-identity"><Logo inverse /><p>Construction. Engineering.<br />Materials &amp; equipment supply.</p></div>
          <div className="footer-nav-group"><h3>EXPLORE</h3><nav aria-label="Footer navigation">{navigation.map(item => <a href={item.href} key={item.href}>{item.title}</a>)}</nav></div>
          <div className="footer-aside"><h3>COMPANY INFORMATION</h3><p>Construction, engineering and supply in Nepal.</p><a href="#contact" className="footer-cta">Company details <ArrowUpRight size={18} aria-hidden="true" /></a>{socialLinks.length > 0 && <div className="footer-socials">{socialLinks.map(([platform, url]) => <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${platform} ${company.demoMode ? "demo platform link" : "company profile"}`}>{platform}{company.demoMode ? " · demo" : ""}</a>)}</div>}</div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {company.name}{company.demoMode ? " · DEMO CONTENT" : ""}</span><span>NEPAL <span className="footer-spark">✳</span> BUILT WITH PURPOSE</span><a href="#home">BACK TO TOP ↑</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    // A reload should reopen the company profile at the hero, not restore a stale section hash.
    // In-page anchor links continue to work normally during the current visit.
    const navigationEntry = window.performance?.getEntriesByType('navigation')?.[0];
    if (window.location.hash && navigationEntry?.type === 'reload') {
      window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-copy > :not(.hero-identifier)', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.78, stagger: 0.09, ease: 'power2.out', clearProps: 'all' });
      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.fromTo(element, { y: 25, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.72, ease: 'power2.out',
          clearProps: 'all',
          scrollTrigger: { trigger: element, start: 'top 93%', once: true },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
