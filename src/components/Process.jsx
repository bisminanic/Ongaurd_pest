/* ═══════════════════════════════════════════════════════
   SECTION 07 — Process
   4-step cards on 3-layer parallax background
   Dependencies: React, GSAP, ScrollTrigger, Bootstrap 5
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { green, IMG, STEPS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const secRef  = useRef();
  const l1Ref   = useRef();   /* city photo    */
  const l2Ref   = useRef();   /* forest blend  */
  const rg1     = useRef(), rg2 = useRef(), rg3 = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    /* ── 3-layer bg + ring parallax ── */
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid  = window.innerHeight / 2 - rect.top - rect.height / 2;

      gsap.set(l1Ref.current, { y: mid * 0.48 });
      gsap.set(l2Ref.current, { y: mid * 0.28 });
      gsap.set(rg1.current,   { y: mid * -0.55, rotate: mid * 0.012 });
      gsap.set(rg2.current,   { y: mid * -0.38, rotate: -mid * 0.009 });
      gsap.set(rg3.current,   { y: mid * -0.68, x: mid * 0.015 });
    };
    window.addEventListener("scroll", tick, { passive: true });

    /* ── step card entrances ── */
    cardsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el,
        { y: 88, opacity: 0, scale: 0.88 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "back.out(1.4)",
          delay: i * 0.17,
          scrollTrigger: { trigger: secRef.current, start: "top 68%" } }
      );
    });

    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <>
      <style>{`
        #process {
          position:relative; padding:150px 60px;
          overflow:hidden; min-height:700px;
        }
        .process-layer {
          position:absolute; inset:-25% 0 -25%;
          will-change:transform;
        }
        .process-layer img { width:100%; height:100%; object-fit:cover; }
        .process-overlay {
          position:absolute; inset:0;
          background:rgba(5,11,28,.92); z-index:2;
        }
        .process-ring {
          position:absolute; border-radius:50%;
          pointer-events:none; will-change:transform; z-index:3;
        }
        .process-content { position:relative; z-index:4; max-width:1220px; margin:0 auto; }

        .step-card {
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.09);
          border-radius:20px; padding:44px 28px;
          text-align:center; backdrop-filter:blur(14px);
          transition:all .42s cubic-bezier(.25,.46,.45,.94);
          height:100%;
        }
        .step-card:hover {
          background:rgba(91,199,40,.13);
          transform:translateY(-13px) scale(1.04);
          border-color:rgba(91,199,40,.55);
          box-shadow:0 34px 80px rgba(0,0,0,.42);
        }
        .step-icon {
          width:88px; height:88px; border-radius:50%;
          margin:0 auto 28px; display:flex;
          align-items:center; justify-content:center;
        }
        .step-icon.filled {
          background:${green};
          box-shadow:0 0 44px rgba(91,199,40,.52);
          font-size:36px;
        }
        .step-icon.outline {
          background:rgba(91,199,40,.12);
          border:2px solid rgba(91,199,40,.48);
          font-family:'Lato',sans-serif; font-size:20px;
          font-weight:900; color:${green};
        }

        @media(max-width:768px){ #process{ padding:90px 20px !important; } }
      `}</style>

      <section id="process" ref={secRef}>

        {/* L1 — city photo */}
        <div ref={l1Ref} className="process-layer" style={{ zIndex: 0 }}>
          <img src={IMG.processBg} alt="" />
        </div>

        {/* L2 — forest blended */}
        <div ref={l2Ref} className="process-layer"
          style={{ zIndex: 1, mixBlendMode: "multiply", opacity: 0.5 }}>
          <img src={IMG.processL2} alt="" />
        </div>

        {/* Dark overlay */}
        <div className="process-overlay" />

        {/* Decorative rings */}
        <div ref={rg1} className="process-ring"
          style={{ top:"7%", right:"8%", width:200, height:200,
            border:"1px dashed rgba(91,199,40,.2)" }} />
        <div ref={rg2} className="process-ring"
          style={{ bottom:"8%", left:"6%", width:148, height:148,
            border:"1px dashed rgba(255,255,255,.08)" }} />
        <div ref={rg3} className="process-ring"
          style={{ top:"40%", left:"18%", width:82, height:82,
            border:"1.5px solid rgba(91,199,40,.1)" }} />

        {/* Content */}
        <div className="process-content">

          {/* Header */}
          <div className="text-center mb-5">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
              <div style={{ width:44, height:3, background:green, borderRadius:2 }} />
              <span style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700,
                letterSpacing:2.2, color:green, textTransform:"uppercase" }}>How It Works</span>
              <div style={{ width:44, height:3, background:green, borderRadius:2 }} />
            </div>
            <h2 style={{ fontFamily:"'Lato',sans-serif", fontSize:"clamp(30px,4.5vw,66px)",
              fontWeight:900, color:"#fff", margin:0, letterSpacing:-0.8 }}>
              Our Simple <span style={{ color:green }}>4-Step</span> Process
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="row g-4">
            {STEPS.map((s, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3">
                <div className="step-card" ref={(el) => (cardsRef.current[i] = el)}>
                  <div className={`step-icon ${i % 2 === 0 ? "filled" : "outline"}`}>
                    {i % 2 === 0 ? s.ic : s.n}
                  </div>
                  <h3 style={{ fontFamily:"'Lato',sans-serif", fontSize:17, fontWeight:900,
                    color:"#fff", margin:"0 0 13px", letterSpacing:0.1 }}>{s.t}</h3>
                  <p style={{ fontFamily:"'Lato',sans-serif", fontSize:13,
                    color:"rgba(255,255,255,.46)", lineHeight:1.8, margin:0 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
