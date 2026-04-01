/* ═══════════════════════════════════════════════════════
   Associates.jsx — International Associates
   Parallax bg animation matching Process.jsx style
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMG } from "../constants";
import process from "../Assets/associate.png";
import flag1 from "../Assets/canada.png";
import flag2 from "../Assets/georgia.png";
import flag3 from "../Assets/statue-of-liberty.png";
import flag4 from "../Assets/ireland.png";

gsap.registerPlugin(ScrollTrigger);

const ASSOCIATES = [
  {
    brand:    "ONGUARD",
    sub:      "PEST & WILDLIFE LTD.",
    location: "Ontario, Canada",
    flag:     flag1,
  },
  {
    brand:    "ONGUARD",
    sub:      "PEST CONTROL",
    location: "Georgia, USA",
    flag:     flag2,
  },
  {
    brand:    "ONGUARD",
    sub:      "PEST SERVICE",
    location: "New York, USA",
    flag:     flag3,
  },
  {
    brand:    "ONGUARD",
    sub:      "PEST SOLUTION",
    location: "Dublin, Ireland",
    flag:     flag4,
  },
];

export default function Associates() {
  const secRef   = useRef();
  const l1Ref    = useRef();
  const l2Ref    = useRef();
  const rg1      = useRef();
  const rg2      = useRef();
  const rg3      = useRef();
  const rg4      = useRef();
  const headRef  = useRef();
  const cardsRef = useRef([]);
  const [hov, setHov] = useState(null);

  useEffect(() => {
    /* ── Parallax scroll tick ── */
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid  = window.innerHeight / 2 - rect.top - rect.height / 2;
      gsap.set(l1Ref.current,  { y: mid * 0.22 });
      gsap.set(l2Ref.current,  { y: mid * 0.14 });
      gsap.set(rg1.current,    { y: mid * -0.18, rotate:  mid * 0.008 });
      gsap.set(rg2.current,    { y: mid * -0.12, rotate: -mid * 0.006 });
      gsap.set(rg3.current,    { y: mid * -0.24, x: mid * 0.01 });
      gsap.set(rg4.current,    { y: mid * -0.10, rotate:  mid * 0.004 });
    };
    window.addEventListener("scroll", tick, { passive: true });

    /* ── Header entrance ── */
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        y: 35, autoAlpha: 0, stagger: 0.1, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%", once: true },
      });

      /* ── Card stagger entrance ── */
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { y: 60, opacity: 0, scale: 0.96 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.75, ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: secRef.current, start: "top 65%", once: true },
          },
        );
      });
    }, secRef);

    return () => {
      window.removeEventListener("scroll", tick);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════
           ASSOCIATES SECTION
        ══════════════════════════════════════ */
        .assoc-section {
          position: relative;
          padding: 120px 60px 130px;
          overflow: hidden;
          min-height: 580px;
          font-family: 'Lato', sans-serif;
        }

        /* ── Parallax photo layers ── */
        .assoc-layer {
          position: absolute;
          inset: -28% 0;
          will-change: transform;
        }
        .assoc-layer img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center 30%;
        }

        /* ── Multi-stop dark overlay ── */
        .assoc-overlay {
          position: absolute; inset: 0; z-index: 2;
          background:
            radial-gradient(ellipse 65% 55% at 50% 45%, rgba(5,20,50,.6) 0%, transparent 70%),
            linear-gradient(180deg,
              rgba(7,17,40,.97) 0%,
              rgba(7,17,40,.88) 40%,
              rgba(7,17,40,.95) 100%
            );
        }

        /* ── Scanlines ── */
        .assoc-scanlines {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,.05) 3px,
            rgba(0,0,0,.05) 4px
          );
        }

        /* ── Diagonal stripe texture ── */
        .assoc-diag {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background-image: repeating-linear-gradient(
            -48deg,
            transparent,
            transparent 38px,
            rgba(255,255,255,.018) 38px,
            rgba(255,255,255,.018) 39px
          );
        }

        /* ── Decorative rings ── */
        .assoc-ring {
          position: absolute; border-radius: 50%;
          pointer-events: none; will-change: transform; z-index: 3;
        }

        /* ── Top accent line ── */
        .assoc-top-line {
          position: absolute; top: 0; left: 0; right: 0; height: 3px; z-index: 4;
          background: linear-gradient(90deg, transparent 0%, #5bc728 25%, #5bc728 75%, transparent 100%);
          opacity: .5;
        }

        /* ── Corner brackets ── */
        .assoc-corner {
          position: absolute; z-index: 6;
          width: 22px; height: 22px; pointer-events: none;
        }
        .assoc-corner--tl {
          top: 40px; left: 22px;
          border-top: 2px solid rgba(91,199,40,.45);
          border-left: 2px solid rgba(91,199,40,.45);
        }
        .assoc-corner--br {
          bottom: 20px; right: 22px;
          border-bottom: 2px solid rgba(91,199,40,.45);
          border-right: 2px solid rgba(91,199,40,.45);
        }

        /* ── Content ── */
        .assoc-content {
          position: relative; z-index: 5;
          max-width: 1200px; margin: 0 auto;
        }

        /* ── Header ── */
        .assoc-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .assoc-eyebrow {
          display: inline-flex; align-items: center; gap: 14px;
          margin-bottom: 16px;
        }
        .assoc-eyebrow-line {
          height: 1px; width: 52px;
          background: linear-gradient(90deg, transparent, #5bc728);
        }
        .assoc-eyebrow-line.r {
          background: linear-gradient(90deg, #5bc728, transparent);
        }
        .assoc-eyebrow-text {
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #5bc728;
        }
        .assoc-title {
          font-family: 'Lato', sans-serif;
          font-size: clamp(28px, 3.8vw, 52px);
          font-weight: 900; color: #fff;
          letter-spacing: -0.5px; line-height: 1.06; margin: 0;
          text-transform: uppercase;
        }
        .assoc-title span { color: #5bc728; }
        .assoc-subtitle {
          font-size: 14px; color: rgba(255,255,255,.4);
          margin-top: 12px; line-height: 1.8;
        }

        /* ── Card grid ── */
        .assoc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── Individual card ── */
        .assoc-card {
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 18px;
          padding: 38px 24px 34px;
          display: flex; flex-direction: column;
          align-items: center; text-align: center; gap: 6px;
          backdrop-filter: blur(18px);
          transition: all .4s cubic-bezier(.25,.46,.45,.94);
          cursor: default;
          position: relative; overflow: hidden;
          text-decoration: none;
        }

        /* Card top glow sweep */
        .assoc-card::before {
          content: '';
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(91,199,40,.7), transparent);
          opacity: 0; transition: opacity .4s;
        }
        .assoc-card:hover::before { opacity: 1; }

        /* Card radial bottom glow */
        .assoc-card::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 120%, rgba(91,199,40,.1) 0%, transparent 70%);
          opacity: 0; transition: opacity .4s; pointer-events: none;
        }
        .assoc-card:hover::after { opacity: 1; }

        .assoc-card:hover {
          transform: translateY(-10px);
          border-color: rgba(91,199,40,.35);
          background: rgba(91,199,40,.06);
          box-shadow: 0 40px 80px rgba(0,0,0,.4), 0 0 0 1px rgba(91,199,40,.12);
        }

        /* Flag circle */
        .assoc-flag-wrap {
          width: 58px; height: 58px; border-radius: 50%;
          background: rgba(91,199,40,.08);
          border: 1.5px solid rgba(91,199,40,.28);
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 14px;
          position: relative; transition: all .35s;
        }
        .assoc-flag-wrap::after {
          content: '';
          position: absolute; inset: -7px; border-radius: 50%;
          border: 1px dashed rgba(91,199,40,.2);
          transition: all .4s;
        }
        .assoc-card:hover .assoc-flag-wrap {
          background: rgba(91,199,40,.15);
          border-color: rgba(91,199,40,.5);
          box-shadow: 0 0 24px rgba(91,199,40,.3);
        }
        .assoc-card:hover .assoc-flag-wrap::after {
          inset: -12px;
          border-color: rgba(91,199,40,.3);
        }

        /* Brand */
        .assoc-brand {
          font-size: 22px; font-weight: 900;
          color: #5bc728; letter-spacing: 1px;
          text-transform: uppercase;
          text-shadow: 0 0 20px rgba(91,199,40,.35);
          line-height: 1;
        }
        .assoc-sub-brand {
          font-size: 9px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(91,199,40,.55);
          margin-top: 2px;
        }
        .assoc-divider {
          width: 28px; height: 1px;
          background: rgba(255,255,255,.15);
          margin: 10px 0;
        }
        .assoc-location {
          font-size: 15px; font-weight: 600;
          color: rgba(255,255,255,.82); letter-spacing: 0.3px;
        }

        /* ── Note ── */
        .assoc-note {
          text-align: center; margin-top: 44px;
          font-size: 12px; color: rgba(255,255,255,.25);
          letter-spacing: 1px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .assoc-grid { grid-template-columns: repeat(2, 1fr); }
          .assoc-section { padding: 80px 24px 90px; }
        }
        @media (max-width: 540px) {
          .assoc-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="assoc-section" ref={secRef} id="associates">

        {/* ── L1 — bg photo ── */}
        <div ref={l1Ref} className="assoc-layer" style={{ zIndex: 0 }}>
          <img src={process} alt="" />
        </div>

        {/* ── L2 — multiply blend ── */}
        <div
          ref={l2Ref}
          className="assoc-layer"
          style={{ zIndex: 1, mixBlendMode: "multiply", opacity: 0.45 }}
        >
          <img src={IMG.processL2 || process} alt="" />
        </div>

        {/* ── Overlays ── */}
        <div className="assoc-overlay" />
        <div className="assoc-scanlines" />
        {/* <div className="assoc-diag" /> */}
        <div className="assoc-top-line" />

        {/* ── Decorative rings (parallax) ── */}
        <div
          ref={rg1}
          className="assoc-ring"
          style={{
            top: "8%", right: "6%",
            width: 200, height: 200,
            border: "1px dashed rgba(91,199,40,.2)",
          }}
        />
        <div
          ref={rg2}
          className="assoc-ring"
          style={{
            bottom: "12%", left: "4%",
            width: 150, height: 150,
            border: "1px dashed rgba(255,255,255,.06)",
          }}
        />
        <div
          ref={rg3}
          className="assoc-ring"
          style={{
            top: "42%", left: "14%",
            width: 80, height: 80,
            border: "1.5px solid rgba(91,199,40,.1)",
          }}
        />
        <div
          ref={rg4}
          className="assoc-ring"
          style={{
            bottom: "18%", right: "18%",
            width: 110, height: 110,
            border: "1px dashed rgba(91,199,40,.12)",
          }}
        />

        {/* ── Corner brackets ── */}
        <div className="assoc-corner assoc-corner--tl" />
        <div className="assoc-corner assoc-corner--br" />

        {/* ── Content ── */}
        <div className="assoc-content">

          {/* Header */}
          <div className="assoc-header" ref={headRef}>
            <div className="assoc-eyebrow">
              <span className="assoc-eyebrow-line" />
              <span className="assoc-eyebrow-text">Global Network</span>
              <span className="assoc-eyebrow-line r" />
            </div>
            <h2 className="assoc-title">
              International <span>Associates</span>
            </h2>
            <p className="assoc-subtitle">
              Trusted OnGuard partners operating across North America &amp; Europe
            </p>
          </div>

          {/* Cards */}
          <div className="assoc-grid">
            {ASSOCIATES.map((a, i) => (
              <div
                key={i}
                className="assoc-card"
                ref={el => (cardsRef.current[i] = el)}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
              >
                <div className="assoc-flag-wrap"><img  src={a.flag} alt="International Associate" style={{width:58 , height:58}}/></div>
                <div className="assoc-brand">{a.brand}</div>
                <div className="assoc-sub-brand">{a.sub}</div>
                <div className="assoc-divider" />
                <div className="assoc-location">{a.location}</div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="assoc-note">
            Recognised OnGuard partners · Operating across 3 continents
          </p>

        </div>
      </section>
    </>
  );
}