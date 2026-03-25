/* ═══════════════════════════════════════════════════════
   SECTION 09 — Stats
   Animated counters + 3D mouse tilt + 3-layer parallax bg
   Dependencies: React, GSAP, ScrollTrigger, Bootstrap 5
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { green, IMG, STATS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

/* ── Animated Counter ── */
function Counter({ to, suf = "" }) {
  const [val, setVal] = useState(0);
  const ref  = useRef();
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        gsap.to({ n: 0 }, {
          n: to, duration: 2.8, ease: "power2.out",
          onUpdate: function () { setVal(Math.round(this.targets()[0].n)); },
        });
      }
    }, { threshold: 0.6 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{val.toLocaleString()}{suf}</span>;
}

/* ── Stats Section ── */
export default function Stats() {
  const secRef  = useRef();
  const l1Ref   = useRef(), l2Ref = useRef(), mistRef = useRef();
  const cardRefs = useRef([]);

  useEffect(() => {
    /* ── 3-layer parallax ── */
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid  = window.innerHeight / 2 - rect.top - rect.height / 2;
      gsap.set(l1Ref.current,   { y: mid * 0.45  });
      gsap.set(l2Ref.current,   { y: mid * 0.28  });
      gsap.set(mistRef.current, { y: mid * -0.2  });
    };
    window.addEventListener("scroll", tick, { passive: true });

    /* ── card entrance ── */
    gsap.fromTo(cardRefs.current,
      { scale: 0.78, y: 62, opacity: 0 },
      { scale: 1, y: 0, opacity: 1, duration: 0.9, stagger: 0.13, ease: "back.out(1.8)",
        scrollTrigger: { trigger: secRef.current, start: "top 72%" } }
    );

    /* ── 3D mouse tilt per card ── */
    cardRefs.current.forEach((c) => {
      if (!c) return;
      c.addEventListener("mousemove", (e) => {
        const r = c.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        gsap.to(c, { rotateY: x * 18, rotateX: -y * 18, scale: 1.06,
          duration: 0.42, ease: "power2.out", transformPerspective: 700 });
      });
      c.addEventListener("mouseleave", () =>
        gsap.to(c, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.7, ease: "power3.out" })
      );
    });

    return () => window.removeEventListener("scroll", tick);
  }, []);

  return (
    <>
      <style>{`
        #stats { position:relative; padding:140px 60px; overflow:hidden; }

        .stats-layer { position:absolute; inset:-25% 0 -25%; will-change:transform; }
        .stats-layer img { width:100%; height:100%; object-fit:cover; }
        .stats-overlay { position:absolute; inset:0; background:rgba(7,14,36,.93); z-index:2; }
        .stats-mist {
          position:absolute; inset:0; z-index:3; pointer-events:none; will-change:transform;
          background:radial-gradient(ellipse at 50% 100%,rgba(91,199,40,.08) 0%,transparent 60%);
        }
        .stats-content { position:relative; z-index:4; max-width:1220px; margin:0 auto; }

        .stat-card {
          background:rgba(255,255,255,.05);
          border:1px solid rgba(91,199,40,.18);
          border-radius:20px; padding:50px 24px;
          text-align:center; backdrop-filter:blur(16px);
          transition:border-color .3s, background .3s, box-shadow .3s;
          transform-style:preserve-3d; cursor:default;
          height:100%;
        }
        .stat-card:hover {
          background:rgba(91,199,40,.15);
          border-color:${green};
          box-shadow:0 0 60px rgba(91,199,40,.16);
        }
        .stat-num {
          font-family:'Lato',sans-serif;
          font-size:clamp(40px,5vw,66px);
          font-weight:900; color:${green}; line-height:1;
          margin-bottom:12px;
        }
        .stat-label {
          font-family:'Lato',sans-serif;
          font-size:15px; font-weight:700; color:#fff;
        }

        @media(max-width:600px){ #stats{ padding:90px 20px !important; } }
      `}</style>

      <section id="stats" ref={secRef}>

        {/* L1 forest */}
        <div ref={l1Ref} className="stats-layer" style={{ zIndex:0 }}>
          <img src={IMG.statsBg} alt="" />
        </div>

        {/* L2 blended */}
        <div ref={l2Ref} className="stats-layer"
          style={{ zIndex:1, mixBlendMode:"multiply", opacity:0.4 }}>
          <img src={IMG.processBg} alt="" />
        </div>

        <div className="stats-overlay" />
        <div ref={mistRef} className="stats-mist" />

        <div className="stats-content">

          {/* Header */}
          <div className="text-center mb-5">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
              <div style={{ width:44, height:3, background:green, borderRadius:2 }} />
              <span style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700,
                letterSpacing:2.2, color:green, textTransform:"uppercase" }}>By The Numbers</span>
              <div style={{ width:44, height:3, background:green, borderRadius:2 }} />
            </div>
            <h2 style={{ fontFamily:"'Lato',sans-serif", fontSize:"clamp(28px,4.5vw,64px)",
              fontWeight:900, color:"#fff", margin:0, letterSpacing:-0.8 }}>
              Why Delhi NCR Trusts <span style={{ color:green }}>OnGuard</span>
            </h2>
          </div>

          {/* Stat Cards */}
          <div className="row g-4">
            {STATS.map((s, i) => (
              <div key={i} className="col-6 col-lg-3">
                <div className="stat-card" ref={(el) => (cardRefs.current[i] = el)}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{s.ic}</div>
                  <div className="stat-num">
                    <Counter to={s.n} suf={s.suf} />
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
