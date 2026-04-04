import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { navy, green } from "../constants";

import img_rat        from "../Assets/rat.jpg";
import img_cockroach  from "../Assets/cockroach.png";
import img_bedbug     from "../Assets/bedbug.jpg";
import img_mosquito   from "../Assets/mosquito.jpg";
import img_housefly   from "../Assets/housefly.jpg";
import img_termit     from "../Assets/termit.png";
import img_wood       from "../Assets/wood.jpg";
import img_honeybee   from "../Assets/honeybee.jpg";
import img_snake      from "../Assets/snake.jpg";
import img_deepclean  from "../Assets/deepcleaning.jpg";
import img_disinfect  from "../Assets/distincfection.jpg";
import img_terminate  from "../Assets/terminate.jpg";
import img_termite    from "../Assets/termite.png";
import logoImg        from "../Assets/LoGoLogo.png";

const CRITICAL_IMAGES = [
  img_rat, img_cockroach, img_bedbug, img_mosquito,
  img_housefly, img_termit, img_wood, img_honeybee,
  img_snake, img_deepclean, img_disinfect, img_terminate, img_termite,
];

export default function Loader({ onComplete }) {
  const wrapRef      = useRef(null);
  const barRef       = useRef(null);
  const pctRef       = useRef(null);
  const numRef       = useRef(null);
  const logoRef      = useRef(null);
  const logoGlowRef  = useRef(null);
  const ring1Ref     = useRef(null);
  const ring2Ref     = useRef(null);
  const ring3Ref     = useRef(null);
  const textRef      = useRef(null);
  const tagRef       = useRef(null);
  const barWrapRef   = useRef(null);
  const scanRef      = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    let safety;
    document.body.style.overflow = "hidden";

    /* ── Force logo visible from the start ── */
    gsap.set(logoRef.current, { opacity: 1, scale: 1, y: 0 });

    /* ── Single entrance timeline ── */
    const tl = gsap.timeline({ delay: 0.2 });

    /* rings pop in */
    tl.from([ring3Ref.current, ring2Ref.current, ring1Ref.current], {
      scale: 0, autoAlpha: 0, duration: 1,
      ease: "elastic.out(1, 0.6)", stagger: 0.15,
      transformOrigin: "center center",
    });

    /* logo drops in */
    tl.from(logoRef.current, {
      y: -30, scale: 0.6,
      duration: 0.9, ease: "back.out(1.7)",
    }, "-=0.6");

    /* glow fades in */
    tl.from(logoGlowRef.current, {
      autoAlpha: 0, scale: 0.3, duration: 0.6,
    }, "-=0.4");

    /* scan line */
    tl.from(scanRef.current, {
      autoAlpha: 0, duration: 0.3,
    }, "-=0.2");

    /* text — y only, opacity stays 1 from JSX inline style */
    tl.from(
      [textRef.current, tagRef.current],
      { y: 16, duration: 0.6, ease: "power3.out", stagger: 0.12 },
      "-=0.2"
    );

    /* bar wrap — y only */
    tl.from(
      barWrapRef.current,
      { y: 10, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    );

    /* ── Continuous animations ── */
    gsap.to(ring1Ref.current, {
      rotation: 360, duration: 8, repeat: -1,
      ease: "none", transformOrigin: "center center",
    });
    gsap.to(ring2Ref.current, {
      rotation: -360, duration: 14, repeat: -1,
      ease: "none", transformOrigin: "center center",
    });

    /* glow pulse */
    gsap.to(logoGlowRef.current, {
      scale: 1.3, opacity: 0.15,
      duration: 2, repeat: -1, yoyo: true,
      ease: "sine.inOut",
    });

    /* scan sweeps */
    gsap.to(scanRef.current, {
      y: 180, duration: 1.8,
      ease: "none", repeat: -1, yoyo: true,
    });

    /* particles float */
    particlesRef.current.forEach((p) => {
      if (!p) return;
      gsap.to(p, {
        y: -(30 + Math.random() * 50),
        x: (Math.random() - 0.5) * 30,
        opacity: 0,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
        repeat: -1,
        ease: "power1.out",
      });
    });

    /* ── Image loading ── */
    const domImgs     = Array.from(document.querySelectorAll("img"));
    const preloadImgs = CRITICAL_IMAGES.map((src) => {
      const img = new window.Image();
      img.src = src;
      return img;
    });
    const domSrcs   = new Set(domImgs.map((i) => i.src));
    const extraImgs = preloadImgs.filter((i) => !domSrcs.has(i.src));
    const allImgs   = [...domImgs, ...extraImgs];
    const total     = allImgs.length || 1;
    let loaded      = 0;
    let finished    = false;

    const step = () => {
      if (finished) return;
      loaded = Math.min(loaded + 1, total);
      const pct = Math.round((loaded / total) * 100);
      if (barRef.current) {
        gsap.to(barRef.current, { width: pct + "%", duration: 0.35, ease: "power2.out" });
      }
      if (numRef.current && pctRef.current) {
        gsap.to(numRef.current, {
          textContent: pct, duration: 0.3, ease: "none",
          snap: { textContent: 1 },
          onUpdate() {
            if (pctRef.current && numRef.current) {
              pctRef.current.textContent = Math.round(numRef.current.textContent) + "%";
            }
          },
        });
      }
      if (loaded >= total) finish();
    };

    allImgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) { step(); }
      else {
        img.addEventListener("load",  step, { once: true });
        img.addEventListener("error", step, { once: true });
      }
    });

    /* ── Finish / exit animation ── */
    function finish() {
      if (finished) return;
      finished = true;
      if (safety) clearTimeout(safety);

      const out = gsap.timeline({
        onComplete() {
          document.body.style.overflow = "";
          if (wrapRef.current) wrapRef.current.style.display = "none";
          window.dispatchEvent(new Event("loaderDone"));
          onComplete?.();
        },
      });

      /* fill bar to 100% */
      if (barRef.current) {
        out.to(barRef.current, { width: "100%", duration: 0.4, ease: "power2.out" });
      }

      /* hold at 100% so user sees it */
      out.to({}, { duration: 1.2 });

      /* fade out everything except logo */
      out.to([
        ring1Ref.current,
        ring2Ref.current,
        ring3Ref.current,
        logoGlowRef.current,
        scanRef.current,
        textRef.current,
        tagRef.current,
        barWrapRef.current,
      ], {
        autoAlpha: 0, duration: 0.5, ease: "power2.in", stagger: 0.04,
      });

      /* logo scales up then fades out last */
      out.to(logoRef.current, {
        scale: 1.15, duration: 0.3, ease: "power2.in",
      });
      out.to(logoRef.current, {
        scale: 8, autoAlpha: 0, duration: 0.55, ease: "power3.in",
      });

      /* whole screen slides up */
      if (wrapRef.current) {
        out.to(wrapRef.current, {
          yPercent: -100, duration: 1.1, ease: "expo.inOut",
        }, "-=0.05");
      }
    }

    safety = setTimeout(finish, 6000);
    return () => {
      if (safety) clearTimeout(safety);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const particles = useRef(
    Array.from({ length: 14 }, () => ({
      left: `${10 + Math.random() * 80}%`,
      top:  `${10 + Math.random() * 80}%`,
      size: 2 + Math.random() * 3,
    }))
  ).current;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;700;900&display=swap');

        .og-loader-wrap {
          position: fixed; inset: 0; z-index: 99999;
          background: #04091a;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }
        .og-loader-wrap::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.03) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none; z-index: 0;
        }
        .og-top-line {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, ${green}, transparent);
          opacity: 0.9; z-index: 2;
        }
        .og-corner {
          position: absolute; width: 44px; height: 44px;
          pointer-events: none; z-index: 2;
        }
        .og-corner::before, .og-corner::after {
          content: ''; position: absolute;
          background: ${green}; opacity: 0.6;
        }
        .og-corner::before { width: 100%; height: 2px; top: 0; left: 0; }
        .og-corner::after  { width: 2px; height: 100%; top: 0; left: 0; }
        .og-corner.tl { top: 28px; left: 28px; }
        .og-corner.tr { top: 28px; right: 28px; transform: scaleX(-1); }
        .og-corner.bl { bottom: 28px; left: 28px; transform: scaleY(-1); }
        .og-corner.br { bottom: 28px; right: 28px; transform: scale(-1); }

        .og-center {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          display: flex; flex-direction: column;
          align-items: center;
          z-index: 3;
        }

        .og-rings-wrap {
          position: absolute;
          width: 180px; height: 180px;
          top: 0; left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .og-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .og-logo-wrap {
          position: relative;
          width: 180px; height: 180px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 28px;
          flex-shrink: 0;
          z-index: 4;
        }
        .og-logo-glow {
          position: absolute;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(91,199,40,.1) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }
        .og-logo-img {
          width: 180px; height: 180px;
          object-fit: contain;
          position: relative; z-index: 2;
          display: block;
          opacity: 1 !important;
        }
        .og-scan {
          position: absolute;
          width: 180px; height: 2px;
          background: linear-gradient(90deg, transparent, ${green}, transparent);
          opacity: 0.55;
          top: 0; left: 0; z-index: 3;
          pointer-events: none;
          border-radius: 1px;
        }

        .og-brand {
          font-size: 11px; font-weight: 900;
          letter-spacing: 5px; text-transform: uppercase;
          color: rgba(255,255,255,.9);
          margin-bottom: 6px; text-align: center;
        }
        .og-tag {
          font-size: 9px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: ${green}; opacity: 0.8;
          margin-bottom: 36px; text-align: center;
        }

        .og-bar-wrap {
          width: 220px;
          display: flex; flex-direction: column; align-items: center;
        }
        .og-pct {
          align-self: flex-end;
          font-size: 11px; font-weight: 900;
          color: ${green}; letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .og-bar-track {
          width: 100%; height: 2px;
          background: rgba(255,255,255,.07);
          border-radius: 2px; overflow: hidden;
        }
        .og-bar-fill {
          height: 100%; width: 0%;
          background: linear-gradient(90deg, ${green}, #8ef55a);
          border-radius: 2px;
          box-shadow: 0 0 12px rgba(91,199,40,.7);
          position: relative;
        }
        .og-bar-fill::after {
          content: '';
          position: absolute; top: 0; right: -20px;
          width: 40px; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent);
          animation: og-shimmer 1.1s ease-in-out infinite;
        }
        @keyframes og-shimmer {
          0%   { transform: translateX(-40px); opacity: 0; }
          50%  { opacity: 1; }
          100% { transform: translateX(40px); opacity: 0; }
        }
        .og-loading-label {
          margin-top: 14px;
          font-size: 9px; font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase;
          color: rgba(255,255,255,.35);
        }
        .og-status-dots {
          display: flex; gap: 6px;
          margin-top: 18px;
          align-items: center; justify-content: center;
        }
        .og-sdot {
          width: 5px; height: 5px; border-radius: 50%;
          background: ${green};
          animation: og-sdot 1.4s ease-in-out infinite;
        }
        .og-sdot:nth-child(2) { animation-delay: 0.2s; }
        .og-sdot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes og-sdot {
          0%,100% { opacity: 0.2; transform: scale(0.8); }
          50%     { opacity: 1;   transform: scale(1.3); }
        }
      `}</style>

      <div ref={wrapRef} className="og-loader-wrap">
        <div className="og-top-line" />
        <div className="og-corner tl" />
        <div className="og-corner tr" />
        <div className="og-corner bl" />
        <div className="og-corner br" />

        {particles.map((p, i) => (
          <div
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            style={{
              position: "absolute",
              left: p.left, top: p.top,
              width: p.size, height: p.size,
              borderRadius: "50%",
              background: green, opacity: 0.3,
              pointerEvents: "none", zIndex: 1,
            }}
          />
        ))}

        <div className="og-center">

          <div className="og-rings-wrap">
            <div ref={ring3Ref} className="og-ring" style={{
              width: 380, height: 380,
              border: "1px solid rgba(91,199,40,.06)",
            }} />
            <div ref={ring2Ref} className="og-ring" style={{
              width: 290, height: 290,
              border: "1px dashed rgba(91,199,40,.11)",
            }} />
            <div ref={ring1Ref} className="og-ring" style={{
              width: 220, height: 220,
              border: "1.5px solid rgba(91,199,40,.22)",
            }} />
          </div>

          {/* logo — always full color, never dimmed */}
          <div ref={logoRef} className="og-logo-wrap">
            <div ref={logoGlowRef} className="og-logo-glow" />
            <img src={logoImg} alt="OnGuard" className="og-logo-img" />
            <div ref={scanRef} className="og-scan" />
          </div>

          {/* opacity:1 inline — GSAP only animates y, never touches opacity */}
          <div ref={textRef} className="og-brand" style={{ opacity: 1 }}>
            OnGuard Pest Control
          </div>
          <div ref={tagRef} className="og-tag" style={{ opacity: 1 }}>
            Always On Guard · Kerala
          </div>

          <div ref={barWrapRef} className="og-bar-wrap" style={{ opacity: 1 }}>
            <div className="og-pct" ref={pctRef}>0%</div>
            <div className="og-bar-track">
              <div ref={barRef} className="og-bar-fill" />
            </div>
            <div className="og-loading-label">Securing your space</div>
            <div className="og-status-dots">
              <div className="og-sdot" />
              <div className="og-sdot" />
              <div className="og-sdot" />
            </div>
          </div>

        </div>

        <span ref={numRef} style={{ display: "none" }} />
      </div>
    </>
  );
}