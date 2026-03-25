/* ═══════════════════════════════════════════════════════
   SECTION 10 — Testimonials
   Auto-rotating reviews on 3-layer parallax background
   Dependencies: React, GSAP, ScrollTrigger, Bootstrap 5
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, IMG, REVS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const secRef = useRef();
  const l1Ref  = useRef(), l2Ref = useRef();
  const tiRef  = useRef();

  const [act, setAct] = useState(0);
  const [vis, setVis] = useState(true);

  /* ── auto-rotate every 5.5 s ── */
  useEffect(() => {
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => {
        setAct((a) => (a + 1) % REVS.length);
        setVis(true);
      }, 220);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  /* ── 3-layer parallax ── */
  useEffect(() => {
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid  = window.innerHeight / 2 - rect.top - rect.height / 2;
      gsap.set(l1Ref.current, { y: mid * 0.42 });
      gsap.set(l2Ref.current, { y: mid * 0.22 });
    };
    window.addEventListener("scroll", tick, { passive: true });

    /* entrance */
    gsap.fromTo(tiRef.current,
      { y: 72, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: secRef.current, start: "top 75%" } }
    );

    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <>
      <style>{`
        #testimonials { position:relative; padding:140px 60px; overflow:hidden; }

        .testi-layer { position:absolute; inset:-22% 0 -22%; will-change:transform; }
        .testi-layer img { width:100%; height:100%; object-fit:cover; }
        .testi-overlay { position:absolute; inset:0; background:rgba(238,245,230,.97); z-index:2; }
        .testi-content { position:relative; z-index:3; max-width:860px; margin:0 auto; text-align:center; }

        .review-card {
          background:#fff; border-radius:24px; padding:56px 60px;
          box-shadow:0 28px 90px rgba(27,58,107,.1);
          position:relative; transition:opacity .22s;
        }
        .review-quote {
          position:absolute; top:22px; left:36px;
          font-size:120px; color:${green}; font-family:Georgia,serif;
          line-height:.7; opacity:.07; font-weight:900; pointer-events:none;
        }

        .dot-nav button {
          border:none; cursor:pointer; border-radius:5px; height:10px;
          transition:all .42s cubic-bezier(.25,.46,.45,.94);
        }

        .avatar {
          width:56px; height:56px; border-radius:50%;
          background:linear-gradient(135deg,${navy},${green});
          display:flex; align-items:center; justify-content:center;
          font-family:'Lato',sans-serif; font-size:17px; font-weight:900; color:#fff;
          box-shadow:0 8px 24px rgba(27,58,107,.36);
        }

        @media(max-width:600px){
          #testimonials{ padding:100px 20px !important; }
          .review-card{ padding:36px 24px !important; }
        }
      `}</style>

      <section id="testimonials" ref={secRef}>

        {/* L1 warm indoor */}
        <div ref={l1Ref} className="testi-layer" style={{ zIndex:0 }}>
          <img src={IMG.testiMain} alt="" />
        </div>

        {/* L2 blended */}
        <div ref={l2Ref} className="testi-layer"
          style={{ zIndex:1, mixBlendMode:"luminosity", opacity:0.3 }}>
          <img src={IMG.testiL2} alt="" />
        </div>

        <div className="testi-overlay" />

        <div ref={tiRef} className="testi-content">

          {/* Header */}
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <div style={{ width:44, height:3, background:green, borderRadius:2 }} />
            <span style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700,
              letterSpacing:2.2, color:green, textTransform:"uppercase" }}>Client Stories</span>
            <div style={{ width:44, height:3, background:green, borderRadius:2 }} />
          </div>
          <h2 style={{ fontFamily:"'Lato',sans-serif", fontSize:"clamp(26px,4vw,56px)",
            fontWeight:900, color:navy, margin:"0 0 56px", letterSpacing:-0.7 }}>
            What Our Clients <span style={{ color:green }}>Say</span>
          </h2>

          {/* Review card */}
          <div className="review-card" style={{ opacity: vis ? 1 : 0 }}>
            <div className="review-quote">"</div>

            {/* Stars */}
            <div className="d-flex justify-content-center gap-1 mb-4">
              {Array(REVS[act].stars).fill(0).map((_, i) => (
                <span key={i} style={{ color:"#F5A623", fontSize:22 }}>★</span>
              ))}
            </div>

            {/* Quote text */}
            <p style={{ fontFamily:"'Lato',sans-serif", fontSize:"clamp(14px,1.9vw,17px)",
              color:"#0a1628", lineHeight:1.88, margin:"0 0 38px",
              fontStyle:"italic", fontWeight:300 }}>
              "{REVS[act].text}"
            </p>

            {/* Author */}
            <div className="d-flex align-items-center justify-content-center gap-3">
              <div className="avatar">{REVS[act].av}</div>
              <div className="text-start">
                <div style={{ fontFamily:"'Lato',sans-serif", fontSize:15,
                  fontWeight:900, color:navy }}>{REVS[act].name}</div>
                <div style={{ fontFamily:"'Lato',sans-serif", fontSize:12,
                  color:green, marginTop:3, fontWeight:700 }}>{REVS[act].role}</div>
              </div>
            </div>
          </div>

          {/* Dot navigation */}
          <div className="dot-nav d-flex justify-content-center gap-2 mt-4">
            {REVS.map((_, i) => (
              <button key={i} onClick={() => setAct(i)}
                style={{
                  width: i === act ? 32 : 10,
                  background: i === act ? green : "rgba(27,58,107,.18)",
                }} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
