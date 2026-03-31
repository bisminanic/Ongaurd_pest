import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Logo from "./Logo";
import { navy, green } from "../constants";

export default function Loader({ onComplete }) {
  const wrapRef = useRef(null);
  const barRef = useRef(null);
  const pctRef = useRef(null);
  const numRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    let safety; 

    
    document.body.style.overflow = "hidden";

    
    if (logoRef.current) {
      gsap.from(logoRef.current, {
        y: -20,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.15,
      });
    }

    if (textRef.current) {
      gsap.from(textRef.current, {
        y: 12,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.35,
      });
    }

    if (barRef.current?.parentElement) {
      gsap.from(barRef.current.parentElement, {
        y: 12,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
      });
    }


    const imgs = Array.from(document.querySelectorAll("img"));
    let loaded = 0;
    const total = imgs.length || 1;

    const onLoad = () => {
      loaded = Math.min(loaded + 1, total);
      const pct = Math.round((loaded / total) * 100);

     
      if (barRef.current) {
        gsap.to(barRef.current, {
          width: pct + "%",
          duration: 0.35,
          ease: "power2.out",
        });
      }

     
      if (numRef.current) {
        gsap.to(numRef.current, {
          textContent: pct,
          duration: 0.3,
          ease: "none",
          snap: { textContent: 1 },
          onUpdate: () => {
            if (pctRef.current && numRef.current) {
              pctRef.current.textContent =
                Math.round(numRef.current.textContent) + "%";
            }
          },
        });
      }

      if (loaded >= total) finish();
    };


    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        onLoad();
      } else {
        img.addEventListener("load", onLoad, { once: true });
        img.addEventListener("error", onLoad, { once: true });
      }
    });

   
    function finish() {
      if (safety) clearTimeout(safety);

      const tl = gsap.timeline({
        onComplete() {
          document.body.style.overflow = "";

          if (wrapRef.current) {
            wrapRef.current.style.display = "none";
          }

          window.dispatchEvent(new Event("loaderDone"));
          onComplete?.();
        },
      });

      if (barRef.current) {
        tl.to(barRef.current, {
          width: "100%",
          duration: 0.25,
          ease: "power2.out",
        });
      }

      if (pctRef.current) {
        tl.to(pctRef.current, {}, { duration: 0.3 });
      }

      if (wrapRef.current) {
        tl.to(
          wrapRef.current,
          {
            yPercent: -100,
            duration: 0.9,
            ease: "expo.inOut",
          },
          "+=0.25"
        );
      }
    }

  
    safety = setTimeout(finish, 5000);

   
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
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: navy,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      
      {dotPositions.map((pos, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          style={{
            position: "absolute",
            ...pos,
            width: i % 2 === 0 ? 180 : 120,
            height: i % 2 === 0 ? 180 : 120,
            borderRadius: "50%",
            border: `1px solid rgba(91,199,40,${
              i < 2 ? 0.08 : 0.05
            })`,
            pointerEvents: "none",
          }}
        />
      ))}

      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${green}, transparent)`,
          opacity: 0.7,
        }}
      />

      
      <div ref={logoRef} style={{ marginBottom: 24 }}>
        <Logo sz={48} tc="#fff" />
      </div>

      
      <div
        ref={textRef}
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "rgba(255,255,255,.38)",
          marginBottom: 52,
        }}
      >
        OnGuard Pest Control
      </div>

     
      <div style={{ width: 220, position: "relative" }}>
        <div
          style={{
            height: 2,
            background: "rgba(255,255,255,.08)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div
            ref={barRef}
            style={{
              height: "100%",
              width: "0%",
              background: `linear-gradient(90deg, ${green}, #8ef55a)`,
              borderRadius: 2,
              boxShadow: `0 0 12px rgba(91,199,40,.6)`,
            }}
          />
        </div>

        <div
          ref={pctRef}
          style={{
            position: "absolute",
            right: 0,
            top: -22,
            fontFamily: "'Lato', sans-serif",
            fontSize: 11,
            fontWeight: 900,
            color: green,
            letterSpacing: 1,
          }}
        >
          0%
        </div>

        <span ref={numRef} style={{ display: "none" }} />
      </div>

    
      <div
        style={{
          marginTop: 18,
          fontFamily: "'Lato', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "rgba(255,255,255,.2)",
        }}
      >
        Loading
      </div>
    </div>
  );
}