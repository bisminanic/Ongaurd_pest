/* ═══════════════════════════════════════════════════════
   SECTION 06 — About (Kerala Edition)
   Modern editorial split layout with 5-layer parallax
   Dependencies: React, GSAP, ScrollTrigger, Bootstrap 5
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, gd, muted, IMG } from "../constants";
import About1 from "../Assets/about1.png";
import About2 from "../Assets/about2.jpg";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const navigate = useNavigate();
  const secRef = useRef();
  const bgRef = useRef();
  const imgW1 = useRef(),
    imgI1 = useRef();
  const imgW2 = useRef(),
    imgI2 = useRef();
  const badgeRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    /* ── 5-layer parallax ── */
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid = window.innerHeight / 2 - rect.top - rect.height / 2;
      if (bgRef.current) gsap.set(bgRef.current, { y: mid * 0.12 });
      if (imgW1.current) gsap.set(imgW1.current, { y: mid * -0.06 });
      if (imgI1.current) gsap.set(imgI1.current, { y: mid * -0.18 });
      if (imgW2.current) gsap.set(imgW2.current, { y: mid * 0.08 });
      if (imgI2.current) gsap.set(imgI2.current, { y: mid * 0.2 });
      if (badgeRef.current) gsap.set(badgeRef.current, { y: mid * -0.14 });
    };
    window.addEventListener("scroll", tick, { passive: true });

    /* ── text entrance ── */
    gsap.fromTo(
      textRef.current.children,
      { x: 70, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: secRef.current, start: "top 72%" },
      },
    );

    /* ── image entrance ── */
    gsap.fromTo(
      [imgW1.current, imgW2.current],
      { scale: 1.07, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: { trigger: secRef.current, start: "top 75%" },
      },
    );

    /* ── badge pop ── */
    gsap.fromTo(
      badgeRef.current,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: secRef.current, start: "top 65%" },
      },
    );

    return () => window.removeEventListener("scroll", tick);
  }, []);

  const features = [
    { icon: "🏛️", text: "Govt. Certified & Licensed Technicians" },
    { icon: "🌿", text: "Eco-Friendly Treatments — Safe for Family & Pets" },
    { icon: "📋", text: "AMC (Annual Maintenance Contracts) Available" },
    { icon: "⚡", text: "Same-Day Emergency Pest Response Across Kerala" },
  ];

  return (
    <>
      <style>{`

        @keyframes bob {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-14px) rotate(0deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        /* ── Section ── */
        #about {
          background: #f8f9f4;
          padding: 130px 60px;
          overflow: hidden;
          position: relative;
        }

        /* ── Subtle grid texture ── */
        #about::before {
          content: '';
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.06) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }

        /* ── Large BG number watermark ── */
        .about-watermark {
          position: absolute;
          top: -40px; left: -20px; z-index: 1;
          font-family: Lato, serif;
          font-size: clamp(160px, 18vw, 280px);
          font-weight: 900;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(91,199,40,.1);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* ── Image cluster ── */
        .about-cluster {
          position: relative;
          height: 620px;
        }

        /* Main image */
        .about-img-main {
          position: absolute; top: 0; left: 0;
          width: 69%; height: 72%;
          border-radius: 4px 28px 4px 28px;
          overflow: hidden;
          box-shadow: 0 50px 110px rgba(27,58,107,.22);
          will-change: transform;
        }
        .about-img-main::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(160deg, transparent 45%, rgba(8,20,50,.35) 100%);
        }
        .about-img-main img {
          width: 100%; height: 170%;
          object-fit: cover;
          position: absolute; top: -35%; left: 0;
          will-change: transform;
        }

        /* Sub image */
        .about-img-sub {
          position: absolute; bottom: 0; right: 0;
          width: 56%; height: 54%;
          border-radius: 28px 4px 28px 4px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(27,58,107,.28);
          border: 6px solid #f8f9f4;
          will-change: transform;
        }
        .about-img-sub img {
          width: 100%; height: 170%;
          object-fit: cover;
          position: absolute; top: -35%; left: 0;
          will-change: transform;
        }

        /* Cert tag on main image */
        .about-cert {
          position: absolute; top: 20px; right: 20px; z-index: 4;
          background: rgba(8,20,50,.82);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(91,199,40,.4);
          border-radius: 10px;
          padding: 9px 16px;
          display: flex; align-items: center; gap: 8px;
        }
        .about-cert-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #5bc728;
          box-shadow: 0 0 8px rgba(91,199,40,.8);
          animation: certPulse 2s ease-in-out infinite;
        }
        @keyframes certPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.5); }
        }

        /* Float badge */
        .about-badge {
          position: absolute;     top: 62%;
    left: 28%;
          transform: translate(-50%,-50%) ;
          z-index: 6;
          will-change: transform;
          animation: bob 5.5s ease-in-out infinite;
        }
        .about-badge-inner {
          background: linear-gradient(135deg, #5bc728 0%, #3fa81a 100%);
          border-radius: 20px;
          padding: 22px 26px;
          text-align: center;
          box-shadow:
            0 28px 70px rgba(91,199,40,.45),
            inset 0 1px 0 rgba(255,255,255,.25);
          position: relative; overflow: hidden;
        }
        .about-badge-inner::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg,
            transparent 0%, rgba(255,255,255,.15) 50%, transparent 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .about-badge-num {
          font-family: 'Playfair Display', serif;
          font-size: 52px; font-weight: 900;
          color: #fff; line-height: 1;
          position: relative; z-index: 1;
        }
        .about-badge-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 700;
          color: rgba(255,255,255,.9);
          letter-spacing: 1.5px; text-transform: uppercase;
          margin-top: 6px; line-height: 1.5;
          position: relative; z-index: 1;
        }

        /* Deco corners — anchored to section, not cluster */
        .about-deco-tl {
          position: absolute;top: -20px;
    left: 4px;
          width: 50px; height: 50px; z-index: 3;
          border-top: 3px solid #5bc728;
          border-left: 3px solid #5bc728;
          border-radius: 6px 0 0 0;
          pointer-events: none;
        }
        .about-deco-br {
          position: absolute;bottom: -28px;
    left: calc(50% + 273px);

          width: 38px; height: 38px; z-index: 3;
          border-bottom: 3px solid ${navy};
          border-right: 3px solid ${navy};
          border-radius: 0 0 6px 0;
          pointer-events: none;
        }

        /* Kerala leaf accent */
        .about-kerala-tag {
          position: absolute; bottom: 58%; left: -18px; z-index: 7;
          background: #fff;
          border-radius: 10px;
          padding: 10px 16px 10px 14px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 12px 40px rgba(0,0,0,.12);
          border-left: 3px solid #5bc728;
        }

        /* ── Text side ── */
        .about-label-line {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 16px;
        }
        .about-label-bar {
          height: 3px; width: 36px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
          border-radius: 2px;
        }

        .about-heading {
          font-family: 'Lato', serif;
          font-size: clamp(30px, 3.8vw, 58px);
          font-weight: 900;
          color: #0a1628;
          line-height: 1.08;
          letter-spacing: -0.5px;
          margin: 0 0 24px;
        }
        .about-heading em {
          font-style: normal;
          color: #5bc728;
          position: relative;
        }
        .about-heading em::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #5bc728, transparent);
          border-radius: 2px;
        }

        .about-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; color: #5a6476;
          line-height: 1.9; margin-bottom: 14px;
        }

        /* Feature rows */
        .about-feat {
          display: flex; align-items: center; gap: 14px;
          padding: 11px 0;
          border-bottom: 1px solid rgba(0,0,0,.05);
        }
        .about-feat:last-of-type { border-bottom: none; }
        .about-feat-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(91,199,40,.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; flex-shrink: 0;
          border: 1px solid rgba(91,199,40,.2);
        }
        .about-feat-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500;
          color: #1a2540;
        }

        /* CTA */
        .about-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #0a1628; color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 700;
          padding: 16px 36px;
          border: none; cursor: pointer; border-radius: 50px;
          box-shadow: 0 12px 32px rgba(10,22,40,.25);
          transition: all .3s; text-decoration: none;
          letter-spacing: 0.3px;
        }
        .about-cta:hover {
          background: #5bc728; color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(91,199,40,.35);
        }
        .about-cta-arrow { transition: transform .3s; }
        .about-cta:hover .about-cta-arrow { transform: translateX(5px); }

        /* Kerala stats strip */
        .about-stats-strip {
          display: flex; gap: 0;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,.08);
          overflow: hidden;
          margin-top: 32px;
        }
        .about-stat-cell {
          flex: 1; padding: 18px 20px; text-align: center;
          border-right: 1px solid rgba(0,0,0,.06);
          transition: background .2s;
        }
        .about-stat-cell:last-child { border-right: none; }
        .about-stat-cell:hover { background: rgba(91,199,40,.05); }
        .about-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 26px; font-weight: 900;
          color: #0a1628; line-height: 1;
        }
        .about-stat-num span { color: #5bc728; }
        .about-stat-lbl {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.2px;
          color: #9aa5b8; margin-top: 4px;
        }

        @media (max-width: 992px) { .about-cluster { height: 420px; } }
        @media (max-width: 768px) { .about-cluster { display: none; } }
        @media (max-width: 600px) { #about { padding: 80px 20px !important; } }
      `}</style>

      <section id="about" ref={secRef}>
        {/* BG watermark */}
        <div className="about-watermark">15</div>

        {/* subtle bg photo layer */}
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            inset: "-18% 0",
            zIndex: 0,
            opacity: 0.035,
            overflow: "hidden",
            willChange: "transform",
          }}
        >
          <img
            src={IMG.aboutBg}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Green radial glow — right side */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: 0,
            width: 500,
            height: 600,
            background:
              "radial-gradient(ellipse at right, rgba(220,242,200,.65) 0%, transparent 68%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div
          style={{
            maxWidth: 1220,
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Static corner decorations — not inside parallax */}

          <div className="row align-items-center g-5">
            {/* ── Image Cluster ── */}
            <div className="col-lg-6" style={{ position: "relative" }}>
              <div className="about-deco-tl" />
              <div className="about-deco-br" />
              <div className="about-cluster">
                {/* Main image */}
                <div ref={imgW1} className="about-img-main">
                  <img ref={imgI1} src={About1} alt="Professional inspection" />
                  <div className="about-cert">
                    <div className="about-cert-dot" />
                    <span
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      Govt. Licensed
                    </span>
                  </div>
                </div>

                {/* Sub image */}
                <div ref={imgW2} className="about-img-sub">
                  <img ref={imgI2} src={About2} alt="Professional team" />
                </div>

                {/* Floating badge */}
                <div ref={badgeRef} className="about-badge">
                  <div className="about-badge-inner">
                    <div className="about-badge-num">15+</div>
                    <div className="about-badge-lbl">
                      Years of
                      <br />
                      Excellence
                    </div>
                  </div>
                </div>

                {/* Kerala location tag */}
                <div className="about-kerala-tag">
                  <span style={{ fontSize: 16 }}>📍</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#0a1628",
                        lineHeight: 1.2,
                      }}
                    >
                      Serving All Kerala
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: 10,
                        color: "#9aa5b8",
                        marginTop: 2,
                      }}
                    >
                      Kochi · Trivandrum · Calicut
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Text Content ── */}
            <div className="col-lg-6">
              <div ref={textRef}>
                {/* Label */}
                <div className="about-label-line">
                  <div className="about-label-bar" />
                  <span
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 2.5,
                      color: "#5bc728",
                      textTransform: "uppercase",
                    }}
                  >
                    Who We Are
                  </span>
                </div>

                {/* Heading */}
                <h2 className="about-heading">
                  Kerala's Most <em>Trusted</em>
                  <br />
                  Pest Control Partner
                </h2>

                {/* ── UPDATED CONTENT FROM PDF ── */}
                <p className="about-body">
                  Since 2010, OnGuard Pest Controls has been a professional pest management
                  and hygiene service provider based in Kerala — dedicated to creating safe,
                  healthy, and pest-free environments for residential, commercial, and
                  industrial clients through modern techniques and trained expertise.
                </p>
                <p className="about-body" style={{ marginBottom: 28 }}>
                  We treat your home or office as though it were our own. From termites,
                  rodents, and bed bugs to cockroaches, mosquitoes, and more — every client
                  receives a personalized pest control plan backed by our commitment to
                  quality, safety, and long-term results.
                </p>

                {/* Features */}
                <div style={{ marginBottom: 28 }}>
                  {features.map((f, i) => (
                    <div key={i} className="about-feat">
                      <div className="about-feat-icon">{f.icon}</div>
                      <span className="about-feat-text">{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginBottom: 0 }}>
                  <a href="#contact" className="about-cta">
                    Book Free Inspection
                    <span className="about-cta-arrow">→</span>
                  </a>
                  <button
                    onClick={() => navigate("/about-us")}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 10,
                      background: "transparent", color: "#0a1628",
                      border: "2px solid #0a1628", cursor: "pointer",
                      fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 700,
                      padding: "15px 35px", borderRadius: "50px",
                      letterSpacing: "0.3px", transition: "all .3s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background="#5bc728"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#5bc728"; e.currentTarget.style.boxShadow="0 18px 40px rgba(91,199,40,.35)"; e.currentTarget.style.transform="translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#0a1628"; e.currentTarget.style.borderColor="#0a1628"; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="none"; }}
                  >
                    View More About Us
                    <span style={{ transition: "transform .3s" }}>→</span>
                  </button>
                </div>

                {/* Stats strip — updated to reflect real company data */}
                <div className="about-stats-strip">
                  {[
                    { val: "15", sfx: "+", lbl: "Years Experience" },
                    { val: "13", sfx: "+", lbl: "Services Offered" },
                    { val: "6", sfx: "+", lbl: "Sectors Served" },
                    { val: "24", sfx: "/7", lbl: "Support" },
                  ].map((s, i) => (
                    <div key={i} className="about-stat-cell">
                      <div className="about-stat-num">
                        {s.val}
                        <span>{s.sfx}</span>
                      </div>
                      <div className="about-stat-lbl">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}