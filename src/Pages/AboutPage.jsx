/* ═══════════════════════════════════════════════════════
   AboutPage.jsx — Full About Us Page
   Shows complete company info from PDF
   Triggered by "View More About Us" in About section
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const navigate = useNavigate();
  const heroRef = useRef();
  const sectionsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Entrance animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );

    // Stagger sections on scroll
    sectionsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const addRef = (i) => (el) => { sectionsRef.current[i] = el; };

  const coreServices = [
    { icon: "🪳", name: "General Pest Control",       desc: "Protection against common household pests" },
    { icon: "🐀", name: "Rodent Control",              desc: "Effective elimination of rats and mice" },
    { icon: "🪲", name: "Cockroach Control",           desc: "Advanced gel and spray treatments" },
    { icon: "🐜", name: "Termite Control",             desc: "Pre- and post-construction solutions" },
    { icon: "🛏️", name: "Bed Bug Treatment",          desc: "Complete eradication methods" },
    { icon: "🦟", name: "Mosquito Control",            desc: "Fogging and larval control" },
    { icon: "🐝", name: "Ant Control",                 desc: "Colony elimination and prevention" },
    { icon: "🪰", name: "Housefly Control",            desc: "Hygiene-focused fly management" },
    { icon: "🪵", name: "Wood Borer Treatment",        desc: "Protection for wooden structures" },
    { icon: "🐝", name: "Honey Bee Removal",           desc: "Safe and eco-friendly relocation" },
    { icon: "🐍", name: "Snake Control",               desc: "Humane capture and removal services" },
    { icon: "🧹", name: "Deep Cleaning Services",      desc: "Thorough cleaning for homes and businesses" },
    { icon: "🧴", name: "Disinfection & Sanitization", desc: "Advanced hygiene solutions" },
  ];

  const approach = [
    { step: "01", title: "Inspection",       desc: "Detailed assessment of the problem area and infestation level." },
    { step: "02", title: "Identification",   desc: "Understanding the pest type, species, and severity of the problem." },
    { step: "03", title: "Customized Plan",  desc: "Tailored treatment strategy designed for your specific environment." },
    { step: "04", title: "Execution",        desc: "Safe, precise, and effective application of treatments." },
    { step: "05", title: "Follow-Up",        desc: "Ongoing monitoring and preventive support for long-term protection." },
  ];

  const keyFeatures = [
    { icon: "👷", title: "Professional Expertise",  desc: "Trained technicians with in-depth knowledge of pest behavior and control methods." },
    { icon: "🔬", title: "Advanced Techniques",     desc: "Use of modern tools, eco-friendly products, and scientifically proven methods." },
    { icon: "🎯", title: "Customized Solutions",    desc: "Services tailored to suit different environments and infestation levels." },
    { icon: "🛡️", title: "Safety & Compliance",    desc: "Use of approved chemicals and strict safety protocols for people and pets." },
    { icon: "⭐", title: "Customer Satisfaction",   desc: "Focus on delivering reliable service, timely response, and lasting results." },
  ];

  const industries = [
    { icon: "🏠", label: "Residential Homes & Apartments" },
    { icon: "🏢", label: "Offices & Corporate Spaces" },
    { icon: "🍽️", label: "Restaurants & Hotels" },
    { icon: "🏥", label: "Hospitals & Healthcare Facilities" },
    { icon: "🏫", label: "Schools & Educational Institutions" },
    { icon: "🏭", label: "Factories & Warehouses" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');

        .ap-root {
          background: #f8f9f4;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Top nav bar ── */
        .ap-topbar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,0,0,.07);
          padding: 14px 48px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ap-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 14px;
          font-weight: 700; color: #0a1628;
          padding: 8px 16px; border-radius: 50px;
          transition: all .25s;
        }
        .ap-back-btn:hover { background: rgba(91,199,40,.1); color: #5bc728; }
        .ap-topbar-logo {
          font-family: 'Lato', sans-serif; font-size: 18px;
          font-weight: 900; color: #0a1628; letter-spacing: -0.5px;
        }
        .ap-topbar-logo span { color: #5bc728; }

        /* ── Hero ── */
        .ap-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a2f50 60%, #0d2010 100%);
          padding: 100px 48px 80px;
          position: relative; overflow: hidden;
        }
        .ap-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.04) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }
        .ap-hero-glow {
          position: absolute; top: -80px; right: -80px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(91,199,40,.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .ap-hero-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 2; }
        .ap-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(91,199,40,.15); border: 1px solid rgba(91,199,40,.4);
          border-radius: 50px; padding: 7px 18px; margin-bottom: 24px;
          font-size: 11px; font-weight: 700; color: #5bc728;
          letter-spacing: 2px; text-transform: uppercase;
        }
        .ap-hero-dot { width: 6px; height: 6px; border-radius: 50%; background: #5bc728; }
        .ap-hero-h1 {
          font-family: 'Lato', sans-serif; font-size: clamp(36px, 5vw, 64px);
          font-weight: 900; color: #fff; line-height: 1.05;
          letter-spacing: -1px; margin: 0 0 20px;
        }
        .ap-hero-h1 em { font-style: normal; color: #5bc728; }
        .ap-hero-sub {
          font-size: 16px; color: rgba(255,255,255,.6);
          line-height: 1.85; max-width: 640px; font-weight: 300;
        }
        .ap-hero-stats {
          display: flex; gap: 48px; margin-top: 48px; flex-wrap: wrap;
        }
        .ap-hero-stat-num {
          font-family: 'Playfair Display', sans-serif;
          font-size: 36px; font-weight: 900; color: #fff; line-height: 1;
        }
        .ap-hero-stat-num span { color: #5bc728; }
        .ap-hero-stat-lbl {
          font-size: 11px; font-weight: 700; color: rgba(255,255,255,.4);
          letter-spacing: 1.5px; text-transform: uppercase; margin-top: 4px;
        }

        /* ── Main content ── */
        .ap-content { max-width: 1100px; margin: 0 auto; padding: 0 48px 100px; }

        /* ── Section blocks ── */
        .ap-section { margin-top: 80px; }
        .ap-section-label {
          display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
        }
        .ap-section-bar {
          height: 3px; width: 32px;
          background: linear-gradient(90deg, #5bc728, #3fa81a); border-radius: 2px;
        }
        .ap-section-tag {
          font-size: 11px; font-weight: 700; color: #5bc728;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .ap-section-h2 {
          font-family: 'Lato', sans-serif; font-size: clamp(24px, 3vw, 38px);
          font-weight: 900; color: #0a1628; letter-spacing: -0.5px; margin: 0 0 16px;
        }
        .ap-section-body {
          font-size: 15px; color: #5a6476; line-height: 1.9; max-width: 720px;
        }

        /* ── Overview card ── */
        .ap-overview-card {
          background: #fff; border-radius: 20px;
          padding: 40px 44px; margin-top: 24px;
          box-shadow: 0 8px 40px rgba(0,0,0,.06);
          border-left: 4px solid #5bc728;
        }
        .ap-overview-card p {
          font-size: 15px; color: #5a6476; line-height: 1.95; margin: 0 0 16px;
        }
        .ap-overview-card p:last-child { margin: 0; }

        /* ── Service grid ── */
        .ap-services-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px; margin-top: 28px;
        }
        .ap-service-card {
          background: #fff; border-radius: 14px; padding: 20px 22px;
          display: flex; align-items: flex-start; gap: 14px;
          box-shadow: 0 4px 20px rgba(0,0,0,.05);
          border: 1px solid rgba(0,0,0,.05);
          transition: all .25s;
        }
        .ap-service-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(91,199,40,.15);
          border-color: rgba(91,199,40,.25);
        }
        .ap-service-icon {
          width: 42px; height: 42px; border-radius: 11px; flex-shrink: 0;
          background: rgba(91,199,40,.1); border: 1px solid rgba(91,199,40,.2);
          display: flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .ap-service-name {
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
          color: #0a1628; line-height: 1.3;
        }
        .ap-service-desc {
          font-size: 12px; color: #9aa5b8; margin-top: 3px; line-height: 1.5;
        }

        /* ── Approach steps ── */
        .ap-steps { display: flex; flex-direction: column; gap: 0; margin-top: 28px; }
        .ap-step {
          display: flex; gap: 24px; padding: 24px 0;
          border-bottom: 1px solid rgba(0,0,0,.06); position: relative;
        }
        .ap-step:last-child { border-bottom: none; }
        .ap-step-num {
          font-family: 'Playfair Display', sans-serif;
          font-size: 36px; font-weight: 900; color: rgba(91,199,40,.2);
          line-height: 1; flex-shrink: 0; width: 56px;
          transition: color .25s;
        }
        .ap-step:hover .ap-step-num { color: #5bc728; }
        .ap-step-content {}
        .ap-step-title {
          font-family: 'DM Sans', sans-serif; font-size: 16px;
          font-weight: 700; color: #0a1628; margin-bottom: 6px;
        }
        .ap-step-desc { font-size: 14px; color: #5a6476; line-height: 1.7; }

        /* ── Key features ── */
        .ap-features-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px; margin-top: 28px;
        }
        .ap-feat-card {
          background: #fff; border-radius: 16px; padding: 24px 26px;
          box-shadow: 0 4px 24px rgba(0,0,0,.05);
          border: 1px solid rgba(0,0,0,.05);
          transition: all .25s;
        }
        .ap-feat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(91,199,40,.12);
        }
        .ap-feat-icon-wrap {
          width: 48px; height: 48px; border-radius: 13px; margin-bottom: 14px;
          background: linear-gradient(135deg, rgba(91,199,40,.15), rgba(91,199,40,.05));
          border: 1px solid rgba(91,199,40,.2);
          display: flex; align-items: center; justify-content: center; font-size: 22px;
        }
        .ap-feat-title {
          font-family: 'DM Sans', sans-serif; font-size: 15px;
          font-weight: 700; color: #0a1628; margin-bottom: 8px;
        }
        .ap-feat-desc { font-size: 13px; color: #5a6476; line-height: 1.7; }

        /* ── Industries ── */
        .ap-industries-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px; margin-top: 28px;
        }
        .ap-industry-pill {
          background: #fff; border-radius: 12px; padding: 16px 20px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 3px 16px rgba(0,0,0,.05);
          border: 1px solid rgba(0,0,0,.05);
          transition: all .2s;
        }
        .ap-industry-pill:hover {
          border-color: rgba(91,199,40,.3);
          background: rgba(91,199,40,.04);
        }
        .ap-industry-icon { font-size: 20px; }
        .ap-industry-label {
          font-size: 13px; font-weight: 600; color: #1a2540; line-height: 1.3;
        }

        /* ── Mission / Vision ── */
        .ap-mv-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
          margin-top: 28px;
        }
        .ap-mv-card {
          border-radius: 18px; padding: 32px 34px; position: relative; overflow: hidden;
        }
        .ap-mv-card.mission {
          background: linear-gradient(135deg, #0a1628, #1a2f50);
        }
        .ap-mv-card.vision {
          background: linear-gradient(135deg, #3fa81a, #5bc728);
        }
        .ap-mv-card::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .ap-mv-label {
          font-size: 10px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; margin-bottom: 14px;
          position: relative; z-index: 1;
        }
        .ap-mv-card.mission .ap-mv-label { color: #5bc728; }
        .ap-mv-card.vision  .ap-mv-label { color: rgba(255,255,255,.7); }
        .ap-mv-text {
          font-family: 'DM Sans', sans-serif; font-size: 15px;
          line-height: 1.85; font-weight: 400;
          position: relative; z-index: 1;
        }
        .ap-mv-card.mission .ap-mv-text { color: rgba(255,255,255,.75); }
        .ap-mv-card.vision  .ap-mv-text { color: rgba(255,255,255,.9); }

        /* ── CTA band ── */
        .ap-cta-band {
          background: linear-gradient(135deg, #5bc728 0%, #3fa81a 100%);
          border-radius: 20px; padding: 48px 52px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; margin-top: 72px;
          box-shadow: 0 24px 64px rgba(91,199,40,.3);
          flex-wrap: wrap;
        }
        .ap-cta-title {
          font-family: 'Lato', sans-serif; font-size: 28px;
          font-weight: 900; color: #fff; margin-bottom: 8px;
        }
        .ap-cta-sub { font-size: 14px; color: rgba(255,255,255,.8); }
        .ap-cta-btn {
          background: #fff; color: #3fa81a; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
          padding: 16px 36px; border-radius: 50px;
          box-shadow: 0 8px 28px rgba(0,0,0,.15);
          transition: all .3s; white-space: nowrap;
        }
        .ap-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,.2); }

        @media (max-width: 768px) {
          .ap-hero { padding: 70px 24px 60px; }
          .ap-content { padding: 0 24px 80px; }
          .ap-topbar { padding: 12px 24px; }
          .ap-mv-grid { grid-template-columns: 1fr; }
          .ap-cta-band { padding: 36px 28px; }
          .ap-hero-stats { gap: 28px; }
        }
      `}</style>

      <div className="ap-root">
        {/* ── Sticky top bar ── */}
        <div className="ap-topbar">
          <button className="ap-back-btn" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
          <div className="ap-topbar-logo">OnGuard <span>Pest Controls</span></div>
          <div style={{ width: 120 }} /> {/* spacer */}
        </div>

        {/* ── Hero ── */}
        <div className="ap-hero" ref={heroRef}>
          <div className="ap-hero-glow" />
          <div className="ap-hero-inner">
            <div className="ap-hero-tag">
              <span className="ap-hero-dot" />
              Company Overview
            </div>
            <h1 className="ap-hero-h1">
              About <em>OnGuard</em><br />Pest Controls
            </h1>
            <p className="ap-hero-sub">
              A professional pest management and hygiene service provider based in Kerala,
              serving residential, commercial, and industrial clients since 2010 with
              modern techniques, trained expertise, and customer-focused service.
            </p>
            <div className="ap-hero-stats">
              {[
                ["15", "+", "Years Experience"],
                ["13", "+", "Services Offered"],
                ["6",  "+", "Sectors Served"],
                ["24", " Hrs", "Always Open"],
              ].map(([n, s, l]) => (
                <div key={l}>
                  <div className="ap-hero-stat-num">{n}<span>{s}</span></div>
                  <div className="ap-hero-stat-lbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ap-content">

          {/* ── Company Overview ── */}
          <div className="ap-section" ref={addRef(0)}>
            <div className="ap-section-label">
              <div className="ap-section-bar" />
              <span className="ap-section-tag">Who We Are</span>
            </div>
            <h2 className="ap-section-h2">Kerala's Most Trusted Pest Control Partner</h2>
            <div className="ap-overview-card">
              <p>
                OnGuard Pest Controls is a professional pest management and hygiene service
                provider based in Kerala, offering reliable and effective solutions for
                residential, commercial, and industrial clients since 2010. The company is
                dedicated to creating safe, healthy, and pest-free environments through
                modern techniques, trained expertise, and customer-focused service.
              </p>
              <p>
                OnGuard Pest Controls specializes in comprehensive pest control and cleaning
                services tailored to meet the unique needs of each client. With a strong focus
                on quality, safety, and long-term results, the company has built a reputation
                for delivering dependable and efficient pest management solutions.
              </p>
              <p>
                We provide the highest level of quality and care to residential and commercial
                properties. Our team will treat your home or office as though it were our own —
                we believe that is the cornerstone of a quality relationship. Our experience
                allows us to quickly and efficiently detect and eliminate pests in any
                environment or structure.
              </p>
              <p>
                From termites, ants, rats and mice to bed bugs, cockroaches, and more, OnGuard
                Pest Controls is determined to help you live pest-free. For each client, we
                create a personalized pest control plan to keep your home or office free of
                the harmful effects that pests can cause.
              </p>
            </div>
          </div>

          {/* ── Core Services ── */}
          <div className="ap-section" ref={addRef(1)}>
            <div className="ap-section-label">
              <div className="ap-section-bar" />
              <span className="ap-section-tag">Core Services</span>
            </div>
            <h2 className="ap-section-h2">13+ Specialized Pest Control Services</h2>
            <p className="ap-section-body">
              We offer a comprehensive range of pest management and hygiene solutions,
              each designed to deliver complete protection tailored to your environment.
            </p>
            <div className="ap-services-grid">
              {coreServices.map((s) => (
                <div key={s.name} className="ap-service-card">
                  <div className="ap-service-icon">{s.icon}</div>
                  <div>
                    <div className="ap-service-name">{s.name}</div>
                    <div className="ap-service-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Service Approach ── */}
          <div className="ap-section" ref={addRef(2)}>
            <div className="ap-section-label">
              <div className="ap-section-bar" />
              <span className="ap-section-tag">Our Approach</span>
            </div>
            <h2 className="ap-section-h2">A Systematic 5-Step Process</h2>
            <p className="ap-section-body">
              OnGuard follows a structured and professional approach that ensures complete
              pest elimination and long-term protection for every client.
            </p>
            <div className="ap-steps">
              {approach.map((a) => (
                <div key={a.step} className="ap-step">
                  <div className="ap-step-num">{a.step}</div>
                  <div className="ap-step-content">
                    <div className="ap-step-title">{a.title}</div>
                    <div className="ap-step-desc">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Key Features ── */}
          <div className="ap-section" ref={addRef(3)}>
            <div className="ap-section-label">
              <div className="ap-section-bar" />
              <span className="ap-section-tag">Key Features</span>
            </div>
            <h2 className="ap-section-h2">Why Choose OnGuard?</h2>
            <div className="ap-features-grid">
              {keyFeatures.map((f) => (
                <div key={f.title} className="ap-feat-card">
                  <div className="ap-feat-icon-wrap">{f.icon}</div>
                  <div className="ap-feat-title">{f.title}</div>
                  <div className="ap-feat-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Industries Served ── */}
          <div className="ap-section" ref={addRef(4)}>
            <div className="ap-section-label">
              <div className="ap-section-bar" />
              <span className="ap-section-tag">Industries Served</span>
            </div>
            <h2 className="ap-section-h2">Serving 6+ Sectors Across Kerala</h2>
            <p className="ap-section-body">
              OnGuard Pest Controls provides services across multiple sectors,
              delivering reliable pest management wherever it's needed.
            </p>
            <div className="ap-industries-grid">
              {industries.map((ind) => (
                <div key={ind.label} className="ap-industry-pill">
                  <span className="ap-industry-icon">{ind.icon}</span>
                  <span className="ap-industry-label">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mission & Vision ── */}
          <div className="ap-section" ref={addRef(5)}>
            <div className="ap-section-label">
              <div className="ap-section-bar" />
              <span className="ap-section-tag">Mission & Vision</span>
            </div>
            <h2 className="ap-section-h2">What Drives Us Forward</h2>
            <div className="ap-mv-grid">
              <div className="ap-mv-card mission">
                <div className="ap-mv-label">Our Mission</div>
                <div className="ap-mv-text">
                  To provide effective, safe, and sustainable pest control and hygiene
                  solutions that improve the quality of life for our customers — in every
                  home and business we serve.
                </div>
              </div>
              <div className="ap-mv-card vision">
                <div className="ap-mv-label">Our Vision</div>
                <div className="ap-mv-text">
                  To become a trusted and leading pest control service provider known for
                  innovation, reliability, and customer satisfaction across Kerala and
                  beyond.
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA Band ── */}
          <div className="ap-cta-band" ref={addRef(6)}>
            <div>
              <div className="ap-cta-title">Ready for a Pest-Free Environment?</div>
              <div className="ap-cta-sub">Get a free inspection from our certified team today.</div>
            </div>
            <button className="ap-cta-btn" onClick={() => { navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
              Book Free Inspection →
            </button>
          </div>

        </div>
      </div>
    </>
  );
}