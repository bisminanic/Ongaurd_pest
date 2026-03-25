/* ═══════════════════════════════════════════════════════
   SECTION 06 — About
   5 independent parallax image layers
   Dependencies: React, GSAP, ScrollTrigger, Bootstrap 5
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, gd, muted, IMG } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const secRef   = useRef();
  const bgAbout  = useRef();                           /* L1 — section bg (very slow) */
  const imgW1    = useRef(), imgI1 = useRef();         /* L2+3 — main image wrapper + inner */
  const imgW2    = useRef(), imgI2 = useRef();         /* L4+5 — sub image wrapper + inner */
  const badge3d  = useRef();                           /* L6 — floating badge */
  const textRef  = useRef();

  useEffect(() => {
    /* ── 5-layer scroll parallax ── */
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid  = window.innerHeight / 2 - rect.top - rect.height / 2;

      if (bgAbout.current)  gsap.set(bgAbout.current,  { y: mid * 0.28  });  /* bg — very slow  */
      if (imgW1.current)    gsap.set(imgW1.current,    { y: mid * -0.14 });  /* wrapper — up    */
      if (imgI1.current)    gsap.set(imgI1.current,    { y: mid * -0.38 });  /* inner — faster up */
      if (imgW2.current)    gsap.set(imgW2.current,    { y: mid * 0.18  });  /* wrapper — down  */
      if (imgI2.current)    gsap.set(imgI2.current,    { y: mid * 0.42  });  /* inner — faster down */
      if (badge3d.current)  gsap.set(badge3d.current,  { y: mid * -0.3  });  /* badge — fast up */
    };
    window.addEventListener("scroll", tick, { passive: true });

    /* ── text entrance ── */
    gsap.fromTo(textRef.current.children,
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: secRef.current, start: "top 72%" } }
    );

    /* ── image entrance ── */
    gsap.fromTo([imgW1.current, imgW2.current],
      { scale: 1.08, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.3, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: secRef.current, start: "top 75%" } }
    );

    return () => window.removeEventListener("scroll", tick);
  }, []);

  const features = [
    "Govt. Certified & Licensed Technicians",
    "Safe for children, pets & sensitive individuals",
    "AMC (Annual Maintenance Contracts) available",
    "Same-day emergency pest response across NCR",
  ];

  return (
    <>
      <style>{`
        @keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }

        #about { background:#fff; padding:140px 60px; overflow:hidden; position:relative; }

        .about-img-cluster { position:relative; height:610px; }

        .about-img-main {
          position:absolute; top:0; left:0; width:70%; height:73%;
          border-radius:22px; overflow:hidden;
          box-shadow:0 44px 100px rgba(27,58,107,.24); will-change:transform;
        }
        .about-img-main img {
          width:100%; height:148%; object-fit:cover;
          position:absolute; top:-12%; left:0; will-change:transform;
        }

        .about-img-sub {
          position:absolute; bottom:0; right:0; width:57%; height:55%;
          border-radius:20px; overflow:hidden;
          box-shadow:0 28px 74px rgba(27,58,107,.27);
          border:5px solid #fff; will-change:transform;
        }
        .about-img-sub img {
          width:100%; height:148%; object-fit:cover;
          position:absolute; top:-12%; left:0; will-change:transform;
        }

        .about-float-badge {
          position:absolute; top:46%; left:58%;
          transform:translate(-50%,-50%);
          background:${green}; border-radius:18px; padding:24px 28px;
          text-align:center; z-index:5;
          box-shadow:0 24px 66px rgba(91,199,40,.52);
          animation:bob 5s ease-in-out infinite;
          will-change:transform;
        }

        .about-iso-badge {
          position:absolute; top:18px; left:18px;
          background:${green}; border-radius:9px; padding:7px 14px;
          display:flex; align-items:center; gap:7px;
        }

        .about-corner-tl {
          position:absolute; top:0; left:0;
          width:46px; height:46px; background:${green};
          border-radius:16px 0 16px 0;
        }
        .about-corner-br {
          position:absolute; bottom:0; right:0;
          width:30px; height:30px; background:${navy};
          border-radius:0 0 0 12px;
        }

        .about-feature {
          display:flex; align-items:center; gap:14px; margin-bottom:14px;
        }
        .about-check {
          width:26px; height:26px; border-radius:50%;
          background:${green}; display:flex; align-items:center; justify-content:center;
          flex-shrink:0; box-shadow:0 4px 14px rgba(91,199,40,.4);
          font-size:13px; font-weight:900; color:#fff;
        }

        .btn-about {
          background:${navy}; color:#fff; border:none; border-radius:50px;
          font-family:'Lato',sans-serif; font-size:14px; font-weight:900;
          padding:16px 40px; cursor:pointer;
          box-shadow:0 10px 30px rgba(27,58,107,.3); transition:all .35s;
        }
        .btn-about:hover { background:${green}; transform:translateY(-3px); }

        @media(max-width:992px){ .about-img-cluster{ height:420px; } }
        @media(max-width:768px){ .about-img-cluster{ display:none; } }
        @media(max-width:600px){ #about{ padding:80px 20px !important; } }
      `}</style>

      <section id="about" ref={secRef}>

        {/* subtle bg photo layer */}
        <div ref={bgAbout} style={{
          position:"absolute", inset:"-18% 0", zIndex:0, opacity:0.04, willChange:"transform",
          overflow:"hidden",
        }}>
          <img src={IMG.aboutBg} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        </div>

        {/* green radial glow */}
        <div style={{
          position:"absolute", top:"16%", right:0, width:520, height:640,
          background:"radial-gradient(circle at right,rgba(238,245,230,.9) 0%,transparent 66%)",
          pointerEvents:"none", zIndex:1,
        }} />

        <div style={{ maxWidth:1220, margin:"0 auto", position:"relative", zIndex:2 }}>
          <div className="row align-items-center g-5">

            {/* ── Image Cluster (5 parallax layers) ── */}
            <div className="col-lg-6">
              <div className="about-img-cluster">

                {/* Main image */}
                <div ref={imgW1} className="about-img-main">
                  <img ref={imgI1} src={IMG.aboutA} alt="Professional inspection" />
                  <div style={{ position:"absolute", inset:0,
                    background:"linear-gradient(to bottom,transparent 52%,rgba(8,18,44,.3) 100%)" }} />
                  <div className="about-iso-badge">
                    <span style={{ color:"#fff", fontSize:11 }}>✓</span>
                    <span style={{ fontFamily:"'Lato',sans-serif", fontSize:11, fontWeight:900, color:"#fff" }}>ISO Certified</span>
                  </div>
                </div>

                {/* Sub image */}
                <div ref={imgW2} className="about-img-sub">
                  <img ref={imgI2} src={IMG.aboutB} alt="Professional team" />
                </div>

                {/* Floating badge */}
                <div ref={badge3d} className="about-float-badge">
                  <div style={{ fontFamily:"'Lato',sans-serif", fontSize:50, fontWeight:900, color:"#fff", lineHeight:1 }}>15+</div>
                  <div style={{ fontFamily:"'Lato',sans-serif", fontSize:10, color:"rgba(255,255,255,.9)",
                    fontWeight:700, marginTop:5, lineHeight:1.5, letterSpacing:0.5 }}>
                    Years of<br/>Excellence
                  </div>
                </div>

                <div className="about-corner-tl" />
                <div className="about-corner-br" />
              </div>
            </div>

            {/* ── Text Content ── */}
            <div className="col-lg-6">
              <div ref={textRef}>

                {/* Label */}
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div style={{ width:44, height:3, background:green, borderRadius:2 }} />
                  <span style={{ fontFamily:"'Lato',sans-serif", fontSize:12, fontWeight:700,
                    letterSpacing:2.2, color:green, textTransform:"uppercase" }}>Who We Are</span>
                </div>

                {/* Heading */}
                <h2 style={{ fontFamily:"'Lato',sans-serif", fontSize:"clamp(28px,3.8vw,58px)",
                  fontWeight:900, color:navy, margin:"0 0 22px", lineHeight:1.05, letterSpacing:-0.8 }}>
                  Delhi NCR's Most <span style={{ color:green }}>Trusted</span> Pest Partner
                </h2>

                <p style={{ fontFamily:"'Lato',sans-serif", fontSize:15, color:muted,
                  lineHeight:1.88, marginBottom:16 }}>
                  Since 2010, OnGuard has shielded thousands of Delhi NCR homes. Our certified team
                  uses eco-friendly formulations — lethal to pests, gentle on your loved ones.
                </p>
                <p style={{ fontFamily:"'Lato',sans-serif", fontSize:15, color:muted,
                  lineHeight:1.88, marginBottom:36 }}>
                  Every service includes satisfaction guarantee, 30-day free re-treatment,
                  and a full post-service report.
                </p>

                {/* Features list */}
                {features.map((f, i) => (
                  <div key={i} className="about-feature">
                    <div className="about-check">✓</div>
                    <span style={{ fontFamily:"'Lato',sans-serif", fontSize:14, color:"#0a1628" }}>{f}</span>
                  </div>
                ))}

                {/* CTA */}
                <button
                  className="btn-about mt-4"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}
                >
                  Book Free Inspection →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
