/* ═══════════════════════════════════════════════════════
   SECTION 08 — Strip2 (Guarantee Banner)
   3-layer parallax — 30-day promise
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { green, IMG } from "../constants";

export default function Strip2() {
  const secRef = useRef(), l1Ref = useRef(), l2Ref = useRef(), txRef = useRef();

  useEffect(() => {
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid  = window.innerHeight / 2 - rect.top - rect.height / 2;
      gsap.set(l1Ref.current, { y: mid * 0.45 });
      gsap.set(l2Ref.current, { y: mid * 0.22 });
      gsap.set(txRef.current, { y: mid * -0.2 });
    };
    window.addEventListener("scroll", tick, { passive: true });
    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <>
      <style>{`
        .strip2-wrap { position:relative; height:340px; overflow:hidden; }
        .strip2-layer { position:absolute; inset:-18% 0; will-change:transform; }
        .strip2-layer img { width:100%; height:100%; object-fit:cover; }
        .strip2-overlay { position:absolute; inset:0; background:rgba(5,12,30,.88); z-index:2; }
        .strip2-content {
          position:absolute; inset:0; z-index:3; will-change:transform;
          display:flex; align-items:center; justify-content:center;
          flex-direction:column; text-align:center; padding:0 40px;
        }
      `}</style>

      <div className="strip2-wrap" ref={secRef}>
        <div ref={l1Ref} className="strip2-layer" style={{ zIndex:0 }}>
          <img src={IMG.statsL2} alt="" />
        </div>
        <div ref={l2Ref} className="strip2-layer"
          style={{ zIndex:1, mixBlendMode:"soft-light", opacity:0.4 }}>
          <img src={IMG.deco3} alt="" />
        </div>
        <div className="strip2-overlay" />
        <div ref={txRef} className="strip2-content">
          <div style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700,
            letterSpacing:2.2, color:green, textTransform:"uppercase", marginBottom:16 }}>Our Promise</div>
          <h3 style={{ fontFamily:"'Lato',sans-serif", fontSize:"clamp(22px,3.8vw,50px)",
            fontWeight:900, color:"#fff", lineHeight:1.06, maxWidth:700, letterSpacing:-0.5 }}>
            If pests return within <span style={{ color:green }}>30 days</span> — we re-treat at absolutely{" "}
            <span style={{ color:green }}>zero cost.</span>
          </h3>
          <p style={{ fontFamily:"'Lato',sans-serif", fontSize:14,
            color:"rgba(255,255,255,.5)", marginTop:18, maxWidth:500, lineHeight:1.8 }}>
            No questions asked. No extra charges. That's the OnGuard guarantee.
          </p>
        </div>
      </div>
    </>
  );
}
