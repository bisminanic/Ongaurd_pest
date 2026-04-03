import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "./Logo";
import { navy, green } from "../constants";

/* ── Pre-import every service image so the browser fetches them
      during the loader, not after it hides.                      ── */
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

/* All critical images that must be loaded before the site reveals */
const CRITICAL_IMAGES = [
  img_rat, img_cockroach, img_bedbug, img_mosquito,
  img_housefly, img_termit, img_wood, img_honeybee,
  img_snake, img_deepclean, img_disinfect, img_terminate, img_termite,
];

export default function Loader({ onComplete }) {
  const wrapRef  = useRef(null);
  const barRef   = useRef(null);
  const pctRef   = useRef(null);
  const numRef   = useRef(null);
  const logoRef  = useRef(null);
  const textRef  = useRef(null);
  const dotsRef  = useRef([]);

  useEffect(() => {
    let safety;
    document.body.style.overflow = "hidden";

    /* ── entrance animations ── */
    if (logoRef.current) {
      gsap.from(logoRef.current, { y: -20, autoAlpha: 0, duration: 0.7, ease: "power3.out", delay: 0.15 });
    }
    if (textRef.current) {
      gsap.from(textRef.current, { y: 12, autoAlpha: 0, duration: 0.6, ease: "power3.out", delay: 0.35 });
    }
    if (barRef.current?.parentElement) {
      gsap.from(barRef.current.parentElement, { y: 12, autoAlpha: 0, duration: 0.6, ease: "power3.out", delay: 0.5 });
    }

    /* ── combine DOM <img> elements + critical pre-imports ── */
    const domImgs     = Array.from(document.querySelectorAll("img"));
    const preloadImgs = CRITICAL_IMAGES.map((src) => {
      const img = new window.Image();
      img.src = src;
      return img;
    });

    /* Deduplicate by src so we don't double-count images
       that are already in the DOM                          */
    const domSrcs = new Set(domImgs.map((i) => i.src));
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
      if (numRef.current) {
        gsap.to(numRef.current, {
          textContent: pct,
          duration: 0.3,
          ease: "none",
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
      if (img.complete && img.naturalWidth > 0) {
        step();
      } else {
        img.addEventListener("load",  step, { once: true });
        img.addEventListener("error", step, { once: true });
      }
    });

    /* ── finish: fill bar → pause → slide up → reveal ── */
    function finish() {
      if (finished) return;
      finished = true;
      if (safety) clearTimeout(safety);

      const tl = gsap.timeline({
        onComplete() {
          document.body.style.overflow = "";
          if (wrapRef.current) wrapRef.current.style.display = "none";
          window.dispatchEvent(new Event("loaderDone"));
          onComplete?.();          /* ← tells App.jsx to reveal content */
        },
      });

      if (barRef.current) {
        tl.to(barRef.current, { width: "100%", duration: 0.25, ease: "power2.out" });
      }
      tl.to({}, { duration: 0.35 }); /* hold at 100% briefly */
      if (wrapRef.current) {
        tl.to(wrapRef.current, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, "+=0.1");
      }
    }

    /* Safety fallback — never hang longer than 6s */
    safety = setTimeout(finish, 6000);

    return () => {
      if (safety) clearTimeout(safety);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const dotPositions = [
    { top: "18%", left: "8%" },
    { top: "72%", left: "5%" },
    { top: "35%", left: "90%" },
    { top: "80%", left: "88%" },
    { top: "12%", left: "52%" },
    { top: "60%", left: "45%" },
  ];

  return (
    <div
      ref={wrapRef}
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        background: navy,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* decorative rings */}
      {dotPositions.map((pos, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          style={{
            position: "absolute", ...pos,
            width: i % 2 === 0 ? 180 : 120,
            height: i % 2 === 0 ? 180 : 120,
            borderRadius: "50%",
            border: `1px solid rgba(91,199,40,${i < 2 ? 0.08 : 0.05})`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, transparent, ${green}, transparent)`,
        opacity: 0.7,
      }} />

      <div ref={logoRef} style={{ marginBottom: 24 }}>
        <Logo sz={48} tc="#fff" />
      </div>

      <div
        ref={textRef}
        style={{
          fontFamily: "'Lato', sans-serif", fontSize: 13, fontWeight: 700,
          letterSpacing: 4, textTransform: "uppercase",
          color: "rgba(255,255,255,.38)", marginBottom: 52,
        }}
      >
        OnGuard Pest Control
      </div>

      <div style={{ width: 220, position: "relative" }}>
        <div style={{ height: 2, background: "rgba(255,255,255,.08)", borderRadius: 2, overflow: "hidden" }}>
          <div
            ref={barRef}
            style={{
              height: "100%", width: "0%",
              background: `linear-gradient(90deg, ${green}, #8ef55a)`,
              borderRadius: 2,
              boxShadow: `0 0 12px rgba(91,199,40,.6)`,
            }}
          />
        </div>

        <div
          ref={pctRef}
          style={{
            position: "absolute", right: 0, top: -22,
            fontFamily: "'Lato', sans-serif", fontSize: 11, fontWeight: 900,
            color: green, letterSpacing: 1,
          }}
        >
          0%
        </div>

        <span ref={numRef} style={{ display: "none" }} />
      </div>

      <div style={{
        marginTop: 18,
        fontFamily: "'Lato', sans-serif", fontSize: 10,
        fontWeight: 700, letterSpacing: 3, textTransform: "uppercase",
        color: "rgba(255,255,255,.2)",
      }}>
        Loading
      </div>
    </div>
  );
}