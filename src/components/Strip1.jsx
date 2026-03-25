/* ═══════════════════════════════════════════════════════
   SECTION 04 — Strip1 (Action Banner)
   Full-bleed 3-layer parallax image strip
   Dependencies: React, GSAP, Bootstrap 5
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { green, IMG } from "../constants";

export default function Strip1() {
  const secRef = useRef();
  const l1Ref  = useRef();
  const l2Ref  = useRef();
  const txRef  = useRef();

  useEffect(() => {
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid  = window.innerHeight / 2 - rect.top - rect.height / 2;
      gsap.set(l1Ref.current, { y: mid * 0.45 });   /* bg photo   — slow   */
      gsap.set(l2Ref.current, { y: mid * 0.28 });   /* blend photo — mid   */
      gsap.set(txRef.current, { y: mid * -0.22 });  /* text        — fast (opposite) */
    };
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, []);

  const pills = [
    ["✓", "Eco-certified chemicals"],
    ["✓", "Child & pet safe"],
    ["✓", "30-day guarantee"],
  ];

  return (
    <>
      <style>{`
        .strip1-wrap { position:relative; height:400px; overflow:hidden; }
        .strip1-layer { position:absolute; inset:-20% 0; will-change:transform; }
        .strip1-layer img { width:100%; height:100%; object-fit:cover; object-position:center 35%; }
        .strip1-overlay {
          position:absolute; inset:0; z-index:2;
          background:linear-gradient(90deg,rgba(5,12,32,.96) 0%,rgba(5,12,32,.72) 52%,rgba(5,12,32,.25) 100%);
        }
        .strip1-content { position:absolute; inset:0; z-index:3; will-change:transform; }
        .strip1-pill {
          display:flex; align-items:center; gap:12px;
          background:rgba(91,199,40,.12); border:1px solid rgba(91,199,40,.32);
          border-radius:10px; padding:12px 20px; backdrop-filter:blur(8px);
        }
        @media(max-width:700px){ .strip1-pills{ display:none !important; } }
      `}</style>

      <div className="strip1-wrap" ref={secRef}>

        {/* L1 — main photo */}
        <div ref={l1Ref} className="strip1-layer" style={{ zIndex: 0 }}>
          <img src={IMG.strip1} alt="" />
        </div>

        {/* L2 — blended photo */}
        <div ref={l2Ref} className="strip1-layer"
          style={{ zIndex: 1, mixBlendMode: "multiply", opacity: 0.35 }}>
          <img src={IMG.strip2} alt="" />
        </div>

        {/* Dark overlay */}
        <div className="strip1-overlay" />

        {/* L3 — text (opposite direction) */}
        <div ref={txRef} className="strip1-content d-flex align-items-center px-5">
          <div>
            <div style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700,
              letterSpacing:2.2, color:green, textTransform:"uppercase", marginBottom:14 }}>
              Expert In Action
            </div>
            <h3 style={{ fontFamily:"'Lato',sans-serif", fontSize:"clamp(24px,4vw,54px)",
              fontWeight:900, color:"#fff", margin:"0 0 18px", lineHeight:1.05,
              maxWidth:600, letterSpacing:-0.5 }}>
              Precision Treatment. <span style={{ color:green }}>Zero Compromise.</span>
            </h3>
            <p style={{ fontFamily:"'Lato',sans-serif", fontSize:14,
              color:"rgba(255,255,255,.58)", maxWidth:420, lineHeight:1.85, fontWeight:400 }}>
              Every treatment by govt-licensed professionals using latest equipment &amp; approved eco-safe formulations.
            </p>
          </div>

          {/* Pill list */}
          <div className="strip1-pills ms-auto d-flex flex-column gap-3 flex-shrink-0">
            {pills.map(([ic, t], i) => (
              <div key={i} className="strip1-pill">
                <span style={{ color:green, fontSize:16, fontWeight:900 }}>{ic}</span>
                <span style={{ fontFamily:"'Lato',sans-serif", fontSize:13,
                  color:"rgba(255,255,255,.84)", fontWeight:700 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
