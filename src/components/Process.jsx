
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { green, IMG, STEPS } from "../constants";
import process from "../Assets/processbg.png";
import process1 from "../Assets/inspection.png";
import process2 from "../Assets/pest-control.png";
gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const secRef = useRef();
  const l1Ref = useRef();
  const l2Ref = useRef();
  const rg1 = useRef(),
    rg2 = useRef(),
    rg3 = useRef();
  const cardsRef = useRef([]);
  const lineRef = useRef();
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    /* ── bg parallax (gentle) ── */
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid = window.innerHeight / 2 - rect.top - rect.height / 2;
      gsap.set(l1Ref.current, { y: mid * 0.22 });
      gsap.set(l2Ref.current, { y: mid * 0.14 });
      gsap.set(rg1.current, { y: mid * -0.18, rotate: mid * 0.008 });
      gsap.set(rg2.current, { y: mid * -0.12, rotate: -mid * 0.006 });
      gsap.set(rg3.current, { y: mid * -0.24, x: mid * 0.01 });
    };
    window.addEventListener("scroll", tick, { passive: true });

    /* ── connector line draw ── */
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.4,
        ease: "power2.inOut",
        transformOrigin: "left center",
        scrollTrigger: { trigger: secRef.current, start: "top 60%" },
      },
    );

    /* ── card stagger entrance ── */
    cardsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.14,
          scrollTrigger: { trigger: secRef.current, start: "top 65%" },
        },
      );
    });

    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <>
      <style>{`
      

        /* ── Section ── */
        #process {
          position: relative;
          padding: 140px 60px;
          overflow: hidden;
          min-height: 700px;
        }

        /* ── BG layers ── */
        .proc-layer {
          position: absolute;
          inset: -28% 0;
          will-change: transform;
        }
        .proc-layer img { width: 100%; height: 100%; object-fit: cover; }

        /* ── Multi-stop overlay for depth ── */
        .proc-overlay {
          position: absolute; inset: 0; z-index: 2;
          background:
            radial-gradient(ellipse 70% 60% at 50% 40%, rgba(5,40,12,.55) 0%, transparent 70%),
            linear-gradient(180deg,
              rgba(3,8,20,.96) 0%,
              rgba(3,8,20,.88) 40%,
              rgba(3,8,20,.94) 100%
            );
        }

        /* ── Scanline texture ── */
        .proc-scanlines {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,.06) 3px,
            rgba(0,0,0,.06) 4px
          );
        }

        /* ── Rings ── */
        .proc-ring {
          position: absolute; border-radius: 50%;
          pointer-events: none; will-change: transform; z-index: 3;
        }

        /* ── Content ── */
        .proc-content {
          position: relative; z-index: 5;
          max-width: 1240px; margin: 0 auto;
        }

        /* ── Header ── */
        .proc-label {
          display: inline-flex; align-items: center; gap: 12px;
          margin-bottom: 18px;
        }
        .proc-label-bar {
          height: 2px; width: 36px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
          border-radius: 2px;
        }
        .proc-label-text {
          font-family: 'Lato', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #5bc728;
        }
        .proc-heading {
          font-family: 'Lato', sans-serif;
          font-size: clamp(36px, 5vw, 72px);
          font-weight: 900; color: #fff;
          letter-spacing: -1px; line-height: 0.95;
          text-transform: uppercase; margin: 0 0 8px;
        }
        .proc-heading span { color: #5bc728; }
        .proc-sub {
          font-family: 'Lato', sans-serif;
          font-size: 14px; color: rgba(255,255,255,.42);
          max-width: 480px; line-height: 1.75;
        }

        /* ── Connector line (desktop) ── */
        .proc-connector {
          display: none;
        }
        @media (min-width: 992px) {
          .proc-connector {
            display: block;
            position: absolute;
            top: 52px; left: calc(12.5% + 44px); right: calc(12.5% + 44px);
            height: 1px; z-index: 10;
            background: linear-gradient(90deg,
              transparent 0%,
              rgba(91,199,40,.3) 15%,
              rgba(91,199,40,.3) 85%,
              transparent 100%
            );
            transform-origin: left center;
          }
          .proc-connector::before {
            content: '';
            position: absolute; inset: -1px;
            background: inherit;
            filter: blur(3px); opacity: 0.5;
          }
        }

        /* ── Step number badge ── */
        .proc-num {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(91,199,40,.12);
          border: 1.5px solid rgba(91,199,40,.4);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 900;
          color: #5bc728; margin: 0 auto 20px;
          position: relative; z-index: 2;
          transition: all .3s;
        }
        .proc-num::after {
          content: '';
          position: absolute; inset: -5px;
          border-radius: 50%;
          border: 1px dashed rgba(91,199,40,.2);
        }

        /* ── Icon circle ── */
        .proc-icon {
          width: 80px; height: 80px; border-radius: 50%;
          margin: 0 auto 22px;
          display: flex; align-items: center; justify-content: center;
          font-size: 32px;
          position: relative;
          transition: all .35s;
        }
        .proc-icon.filled {
          background: linear-gradient(135deg, #5bc728 0%, #3fa81a 100%);
          box-shadow: 0 0 0 0 rgba(91,199,40,.4);
        }
        .step-card:hover .proc-icon.filled {
          box-shadow: 0 0 0 10px rgba(91,199,40,.12), 0 0 40px rgba(91,199,40,.4);
        }
        .proc-icon.outline {
          background: rgba(91,199,40,.06);
          border: 1.5px solid rgba(91,199,40,.35);
        }
        .proc-icon-ring {
          position: absolute; inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(91,199,40,.15);
          transition: all .4s;
        }
        .step-card:hover .proc-icon-ring {
          inset: -14px;
          border-color: rgba(91,199,40,.3);
        }

        /* ── Card ── */
        .step-card {
          background: rgba(255,255,255,.033);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 20px;
          padding: 36px 24px 32px;
          text-align: center;
          backdrop-filter: blur(16px);
          transition: all .4s cubic-bezier(.25,.46,.45,.94);
          height: 100%;
          position: relative;
          overflow: hidden;
          cursor: default;
        }

        /* Card top glow on hover */
        .step-card::before {
          content: '';
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(91,199,40,.6), transparent);
          opacity: 0; transition: opacity .4s;
        }
        .step-card:hover::before { opacity: 1; }

        /* Card bottom gradient fill on hover */
        .step-card::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 120%, rgba(91,199,40,.09) 0%, transparent 70%);
          opacity: 0; transition: opacity .4s;
          pointer-events: none;
        }
        .step-card:hover::after { opacity: 1; }

        .step-card:hover {
          transform: translateY(-10px);
          border-color: rgba(91,199,40,.3);
          box-shadow: 0 40px 80px rgba(0,0,0,.4), 0 0 0 1px rgba(91,199,40,.1);
        }

        /* Active card */
        .step-card.active {
          border-color: rgba(91,199,40,.45);
          background: rgba(91,199,40,.07);
        }

        .step-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 20px; font-weight: 700;
          color: #fff; text-transform: uppercase;
          letter-spacing: 0.3px;
          margin: 0 0 11px;
        }
        .step-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: rgba(255,255,255,.42);
          line-height: 1.82; margin: 0;
        }

        /* Arrow between cards (desktop) */
        .proc-arrow {
          display: none;
        }
        @media (min-width: 992px) {
          .proc-arrow {
            display: flex; align-items: center; justify-content: center;
            position: absolute; top: 50px; right: -14px; z-index: 11;
            color: rgba(91,199,40,.5); font-size: 18px;
          }
        }

        /* ── Bottom CTA strip ── */
        .proc-cta-strip {
          margin-top: 56px;
          display: flex; align-items: center; justify-content: center;
          gap: 20px; flex-wrap: wrap;
        }
        .proc-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #5bc728; color: #030814;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 14px; font-weight: 900;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 15px 34px;
          border: none; cursor: pointer; border-radius: 50px;
          box-shadow: 0 12px 32px rgba(91,199,40,.4);
          transition: all .3s; text-decoration: none;
        }
        .proc-cta-btn:hover {
          background: #6fe030; transform: translateY(-2px);
          box-shadow: 0 18px 44px rgba(91,199,40,.5);
          color: #030814;
        }
        .proc-cta-note {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: rgba(255,255,255,.35);
        }
        .proc-cta-note strong {
          color: rgba(255,255,255,.65); font-weight: 600;
        }

        @media (max-width: 768px) {
          #process { padding: 90px 20px !important; }
          .proc-connector { display: none; }
        }
      `}</style>

      <section id="process" ref={secRef}>
        {/* L1 — bg photo */}
        <div ref={l1Ref} className="proc-layer" style={{ zIndex: 0 }}>
          <img src={process} alt="" />
        </div>

        {/* L2 — blend layer */}
        <div
          ref={l2Ref}
          className="proc-layer"
          style={{ zIndex: 1, mixBlendMode: "multiply", opacity: 0.45 }}
        >
          <img src={IMG.processL2} alt="" />
        </div>

        {/* Overlays */}
        <div className="proc-overlay" />
        <div className="proc-scanlines" />

        {/* Decorative rings */}
        <div
          ref={rg1}
          className="proc-ring"
          style={{
            top: "6%",
            right: "7%",
            width: 220,
            height: 220,
            border: "1px dashed rgba(91,199,40,.18)",
          }}
        />
        <div
          ref={rg2}
          className="proc-ring"
          style={{
            bottom: "10%",
            left: "5%",
            width: 160,
            height: 160,
            border: "1px dashed rgba(255,255,255,.06)",
          }}
        />
        <div
          ref={rg3}
          className="proc-ring"
          style={{
            top: "38%",
            left: "16%",
            width: 90,
            height: 90,
            border: "1.5px solid rgba(91,199,40,.08)",
          }}
        />

        {/* ── Content ── */}
        <div className="proc-content">
          {/* Header — split layout */}
          <div className="row align-items-end mb-5">
            <div className="col-lg-6">
              <div className="proc-label">
                <div className="proc-label-bar" />
                <span className="proc-label-text">How It Works</span>
              </div>
              <h2 className="proc-heading">
                Our Simple
                <br />
                <span>4-Step</span> Process
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="proc-sub ms-lg-auto" style={{ marginBottom: 0 }}>
                From your first call to a pest-free home — our streamlined
                process ensures fast, professional results with zero hassle.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div style={{ position: "relative" }}>
            {/* Desktop connector line */}
            <div ref={lineRef} className="proc-connector" />

            <div className="row g-4">
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  className="col-12 col-sm-6 col-lg-3"
                  style={{ position: "relative" }}
                >
                  <div
                    className={`step-card${activeCard === i ? " active" : ""}`}
                    ref={(el) => (cardsRef.current[i] = el)}
                    onMouseEnter={() => setActiveCard(i)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {/* Step number */}
                    <div className="proc-num">0{i + 1}</div>

                    {/* Icon */}
                    <div
                      className={`proc-icon ${s.type === "img" ? "outline" : "filled"}`}
                    >
                      <div className="proc-icon-ring" />

                      {s.type === "img" ? (
                        <img src={s.ic} alt={s.t} style={{ width: 38 }} />
                      ) : (
                        s.ic
                      )}
                    </div>
                    <h3 className="step-title">{s.t}</h3>
                    <p className="step-desc">{s.d}</p>

                    {/* Arrow (not on last) */}
                    {i < STEPS.length - 1 && (
                      <div className="proc-arrow">›</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA strip */}
          <div className="proc-cta-strip">
            <a href="#contact" className="proc-cta-btn">
              Start Your Free Inspection →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
