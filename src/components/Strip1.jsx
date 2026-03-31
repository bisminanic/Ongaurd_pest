
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { green, IMG } from "../constants";
import ImG from "../Assets/Strip1.png";

export default function Strip1() {
  const secRef  = useRef();
  const l1Ref   = useRef();
  const l2Ref   = useRef();
  const txRef   = useRef();

 
  useEffect(() => {
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid  = window.innerHeight / 2 - rect.top - rect.height / 2;
      gsap.set(l1Ref.current, { y: mid * 0.45 });
      gsap.set(l2Ref.current, { y: mid * 0.28 });
      gsap.set(txRef.current, { y: mid * -0.18 });
    };
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, []);


  useEffect(() => {
    gsap.fromTo(".s1-pill",
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power3.out", delay: 0.3 }
    );
    gsap.fromTo(".s1-stat",
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.55, ease: "power3.out", delay: 0.1 }
    );
    gsap.fromTo(".s1-headline",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  const pills = [
    { icon: "✓", label: "Eco-certified chemicals" },
    { icon: "✓", label: "Child & pet safe"        },
    { icon: "✓", label: "30-day guarantee"        },
  ];

  const stats = [
    { value: "5000", suffix: "+", label: "Treatments Done" },
    { value: "98",   suffix: "%", label: "Success Rate"    },
    { value: "30",   suffix: " days", label: "Guarantee"   },
  ];

  return (
    <>
      <style>{`
        /* ── Wrapper ── */
        .s1-wrap {
          position: relative;
          height: 460px;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }

        /* ── Parallax layers ── */
        .s1-layer {
          position: absolute;
          inset: -22% 0;
          will-change: transform;
        }
        .s1-layer img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 35%;
        }

        /* ── Diagonal overlay ── */
        .s1-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            105deg,
            rgba(3,8,24,.97) 0%,
            rgba(3,8,24,.92) 38%,
            rgba(3,8,24,.68) 58%,
            rgba(3,8,24,.15) 100%
          );
        }

        /* ── Animated scan line ── */
        .s1-scanline {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          overflow: hidden;
        }
        .s1-scanline::after {
          content: '';
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(91,199,40,.6) 40%, rgba(91,199,40,.9) 50%, rgba(91,199,40,.6) 60%, transparent 100%);
          animation: scanDown 3.5s ease-in-out infinite;
          box-shadow: 0 0 18px 4px rgba(91,199,40,.35);
        }
        @keyframes scanDown {
          0%   { top: -4px; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* ── Green diagonal accent bar ── */
        .s1-accent-bar {
          position: absolute;
          top: 0; bottom: 0;
          left: 44%;
          width: 3px;
          background: linear-gradient(180deg, transparent 0%, #5bc728 30%, #5bc728 70%, transparent 100%);
          transform: skewX(-12deg);
          z-index: 4;
          opacity: 0.55;
          box-shadow: 0 0 22px 4px rgba(91,199,40,.4);
        }

        /* ── Noise texture overlay ── */
        .s1-noise {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          opacity: 0.032;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
        }

        /* ── Main content ── */
        .s1-content {
            position: absolute;
    inset: 0;
    z-index: 5;
    will-change: transform;
    display: flex;
    align-items: center;
    padding: 0 56px;
    gap: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
        }

        /* ── Left block ── */
        .s1-left { flex: 0 0 auto; max-width: 560px; }

        .s1-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Lato', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #5bc728; margin-bottom: 16px;
        }
        .s1-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #5bc728;
          box-shadow: 0 0 8px 2px rgba(91,199,40,.7);
          animation: pulse 1.8s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.6); opacity: 0.5; }
        }

        .s1-headline {
          font-family: 'Lato', sans-serif;
          font-size: clamp(28px, 4.5vw, 58px);
          font-weight: 900;
          color: #fff;
          line-height: 0.95;
          letter-spacing: -1px;
          margin: 0 0 6px;
          text-transform: uppercase;
        }
        .s1-headline span {
          color: #5bc728;
          display: block;
          text-shadow: 0 0 40px rgba(91,199,40,.35);
        }

        .s1-sub {
          font-size: 13px; font-weight: 400;
          color: rgba(255,255,255,.52);
          max-width: 390px;
          line-height: 1.9;
          margin: 14px 0 28px;
        }

        /* ── CTA button ── */
        .s1-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #5bc728;
          color: #030818;
          font-family: 'Lato', sans-serif;
          font-size: 13px; font-weight: 900;
          letter-spacing: 1.8px; text-transform: uppercase;
          border: none; cursor: pointer;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
          transition: background .2s, box-shadow .2s;
          text-decoration: none;
        }
        .s1-cta:hover {
          background: #6fe030;
          box-shadow: 0 0 28px rgba(91,199,40,.5);
          color: #030818;
        }
        .s1-cta-arrow { font-size: 16px; transition: transform .2s; }
        .s1-cta:hover .s1-cta-arrow { transform: translateX(4px); }

        /* ── Center stats column ── */
        .s1-stats-center {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 0;
          flex: 0 0 auto;
          padding: 0 40px;
          position: relative;
        }
        .s1-stats-center::before,
        .s1-stats-center::after {
          content: '';
          position: absolute; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(91,199,40,.25) 30%, rgba(91,199,40,.25) 70%, transparent);
        }
        .s1-stats-center::before { left: 0; }
        .s1-stats-center::after  { right: 0; }

        .s1-stat {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          padding: 14px 0;
        }
        .s1-stat-val {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 42px; font-weight: 900;
          color: #fff; line-height: 1;
          letter-spacing: -1.5px;
        }
        .s1-stat-val em {
          font-style: normal; color: #5bc728;
          text-shadow: 0 0 20px rgba(91,199,40,.5);
        }
        .s1-stat-lbl {
          font-size: 9px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,.38);
          margin-top: 4px;
        }
        .s1-stat-divider {
          width: 40px; height: 1px;
          background: rgba(255,255,255,.08);
        }

        /* ── Right pills ── */
        .s1-pills {
          // margin-left: auto;
          display: flex; flex-direction: column;
          gap: 10px; flex-shrink: 0;
        }
        .s1-pill {
          display: flex; align-items: center; gap: 14px;
          background: rgba(91,199,40,.07);
          border: 1px solid rgba(91,199,40,.25);
          padding: 13px 22px 13px 18px;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
          backdrop-filter: blur(12px);
          transition: background .2s, border-color .2s;
          cursor: default;
        }
        .s1-pill:hover {
          background: rgba(91,199,40,.14);
          border-color: rgba(91,199,40,.5);
        }
        .s1-pill-icon {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: rgba(91,199,40,.18);
          border: 1.5px solid rgba(91,199,40,.5);
          display: flex; align-items: center; justify-content: center;
          color: #5bc728; font-size: 11px; font-weight: 900;
          flex-shrink: 0;
        }
        .s1-pill-text {
          font-family: 'Lato', sans-serif;
          font-size: 14px; font-weight: 700;
          letter-spacing: 0.5px;
          color: rgba(255,255,255,.88);
          text-transform: uppercase;
        }

        /* ── Corner bracket decorations ── */
        .s1-corner {
          position: absolute; z-index: 6;
          width: 24px; height: 24px;
          pointer-events: none;
        }
        .s1-corner--tl { top: 18px; left: 20px;
          border-top: 2px solid rgba(91,199,40,.5);
          border-left: 2px solid rgba(91,199,40,.5); }
        .s1-corner--br { bottom: 18px; right: 20px;
          border-bottom: 2px solid rgba(91,199,40,.5);
          border-right: 2px solid rgba(91,199,40,.5); }

        @media (max-width: 900px) {
          .s1-pills { display: none !important; }
          .s1-stats-center { display: none !important; }
          .s1-content { padding: 0 28px; }
        }
        @media (max-width: 600px) {
          .s1-wrap { height: 420px; }
        }
      `}</style>

      <div className="s1-wrap" ref={secRef}>

        {/* L1 — main background photo */}
        <div ref={l1Ref} className="s1-layer" style={{ zIndex: 0 }}>
          <img src={ImG} alt="" />
        </div>

        {/* L2 — blend photo */}
        <div ref={l2Ref} className="s1-layer"
          style={{ zIndex: 1, mixBlendMode: "multiply", opacity: 0.3 }}>
          <img src={IMG.strip2} alt="" />
        </div>

        {/* Overlays */}
        <div className="s1-overlay" />
        <div className="s1-noise" />
        <div className="s1-scanline" />
        <div className="s1-accent-bar" />

        {/* Corner decorations */}
        <div className="s1-corner s1-corner--tl" />
        <div className="s1-corner s1-corner--br" />

        {/* Main content */}
        <div ref={txRef} className="s1-content">

          {/* LEFT — Text block */}
          <div className="s1-left">
            <div className="s1-eyebrow">
              <span className="s1-eyebrow-dot" />
              Expert In Action
            </div>

            <h3 className="s1-headline s1-headline">
              Precision Treatment.
              <span>Zero Compromise.</span>
            </h3>

            <p className="s1-sub">
              Every treatment by govt-licensed professionals using latest
              equipment &amp; approved eco-safe formulations.
            </p>

            <a href="#contact" className="s1-cta">
              Get Free Inspection
              <span className="s1-cta-arrow">→</span>
            </a>
          </div>

          {/* CENTER — Stats column */}
          <div className="s1-stats-center">
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="s1-stat-divider" />}
                <div className="s1-stat s1-stat">
                  <div className="s1-stat-val">
                    {s.value}<em>{s.suffix}</em>
                  </div>
                  <div className="s1-stat-lbl">{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* RIGHT — Pill list */}
          <div className="s1-pills">
            {pills.map(({ icon, label }, i) => (
              <div key={i} className="s1-pill">
                <div className="s1-pill-icon">{icon}</div>
                <span className="s1-pill-text">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}