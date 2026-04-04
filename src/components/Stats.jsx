import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imag1 from "../Assets/whytrust.png";

gsap.registerPlugin(ScrollTrigger);

const G = "#3ade6e";

const STATS = [
  {
    n: 15,
    suf: "+",
    label: "Years Experience",
    sub: "Serving Kerala homes & businesses since 2009",
    bar: 75,
  },
  {
    n: 10000,
    suf: "+",
    label: "Pests Eliminated",
    sub: "Across homes & commercial spaces",
    bar: 100,
  },
  {
    n: 500,
    suf: "+",
    label: "Happy Clients",
    sub: "With 4.9★ average rating",
    bar: 82,
  },
  {
    n: 98,
    suf: "%",
    label: "Success Rate",
    sub: "First-treatment guarantee",
    bar: 98,
  },
];

function Counter({ to, suf = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          gsap.to(
            { n: 0 },
            {
              n: to,
              duration: 2.5,
              onUpdate: function () {
                setVal(Math.round(this.targets()[0].n));
              },
            }
          );
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suf}
    </span>
  );
}

function Bar({ pct }) {
  const [w, setW] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setW(pct);
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div
      ref={ref}
      style={{
        height: 3,
        background: "rgba(255,255,255,0.1)",
        marginTop: 15,
        borderRadius: 2,
      }}
    >
      <div
        style={{
          width: `${w}%`,
          height: "100%",
          background: G,
          borderRadius: 2,
          transition: "width 1.5s ease",
        }}
      />
    </div>
  );
}

export default function Stats() {
  const secRef = useRef();
  const l1Ref = useRef();
  const l2Ref = useRef();

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      gsap.to(l1Ref.current, { x: x * 40, y: y * 40, scale: 1.1, duration: 1.2 });
      gsap.to(l2Ref.current, { x: x * 20, y: y * 20, scale: 1.05, duration: 1.2 });
    };

    window.addEventListener("mousemove", handleMove);

    gsap.to(l1Ref.current, {
      yPercent: 15,
      scrollTrigger: { trigger: secRef.current, scrub: true },
    });
    gsap.to(l2Ref.current, {
      yPercent: 8,
      scrollTrigger: { trigger: secRef.current, scrub: true },
    });

    gsap.to(l1Ref.current, { y: "+=20", duration: 6, repeat: -1, yoyo: true });
    gsap.to(l2Ref.current, { y: "-=15", duration: 5, repeat: -1, yoyo: true });

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const glow = document.querySelector(".st9-cursor-glow");
    if (!glow) return;
    const moveGlow = (e) => {
      gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.3 });
    };
    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <>
      <style>{`
        #stats9 {
          position: relative;
          padding: 120px 40px;
          overflow: hidden;
          color: #fff;
          background: #05091a;
        }

        /* ── background layers ── */
        .st9-layer {
          position: absolute;
          inset: -20%;
          pointer-events: none;
        }
        .st9-layer img {
          width: 110%;
          height: 110%;
          object-fit: cover;
        }

        /* ── dark overlay ── */
        .st9-overlay {
          position: absolute;
          inset: 0;
          background: rgba(5, 9, 26, 0.94);
          pointer-events: none;
        }

        /* ── cursor glow ── */
        .st9-cursor-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(58,222,110,0.2), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }

        /* ── content wrapper ── */
        .st9-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .st9-content h2 {
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 60px;
        }

        /* ── cards grid ── */
        .st9-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 0;
        }

        .st9-card {
          padding: 30px;
          border-radius: 12px;
          background: rgba(91, 199, 40, 0.08);
          border: 1px solid rgba(91, 199, 40, 0.16);
          text-align: center;
        }

        .st9-num {
          font-size: 40px;
          font-weight: 700;
          color: ${G};
          line-height: 1.1;
          margin-bottom: 10px;
        }

        .st9-card-title {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin: 8px 0 6px;
        }

        .st9-card-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .st9-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          #stats9 { padding: 80px 20px; }
          .st9-cards { grid-template-columns: 1fr; }
          .st9-num { font-size: 32px; }
        }
      `}</style>

      <section id="stats9" ref={secRef}>
        {/* Background layers */}
        <div ref={l1Ref} className="st9-layer">
          <img src={imag1} alt="" />
        </div>
        <div ref={l2Ref} className="st9-layer">
          <img src={imag1} alt="" />
        </div>

        {/* Overlay */}
        <div className="st9-overlay" />

        {/* Cursor glow */}
        <div className="st9-cursor-glow" />

        {/* Content */}
        <div className="st9-content">
          <h2>
            Why Kerala Trusts{" "}
            <span style={{ color: G }}>OnGuard</span>
          </h2>

          <div className="st9-cards">
            {STATS.map((s, i) => (
              <div className="st9-card" key={i}>
                <div className="st9-num">
                  <Counter to={s.n} suf={s.suf} />
                </div>
                <h4 className="st9-card-title">{s.label}</h4>
                <p className="st9-card-sub">{s.sub}</p>
                <Bar pct={s.bar} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}