/* ═══════════════════════════════════════════════════════
   Testimonials.jsx — Real Google reviews (hardcoded)
   • 10 actual OnGuard Google reviews
   • Desktop: auto-rotating single card
   • Mobile: horizontal snap carousel with dots
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navy, green, IMG } from "../constants";

gsap.registerPlugin(ScrollTrigger);

/* ── 10 Real Google Reviews ─────────────────────────────────────────────── */
const REVS = [
  {
    name: "Fahad F",
    role: "Google Review",
    date: "Mar 2026",
    stars: 5,
    text: "Good services and good quality. Nice behaviour. Highly recommended!",
    av: "FF",
  },
  {
    name: "Akash Jayaprakash",
    role: "Google Review",
    date: "Feb 2026",
    stars: 5,
    text: "Very nice service and affordable rate, also customer friendly.",
    av: "AJ",
  },
  {
    name: "Hari Hari",
    role: "Google Review",
    date: "Feb 2026",
    stars: 5,
    text: "Very good company. Service is good.",
    av: "HH",
  },
  {
    name: "Anseer Anseer",
    role: "Google Review",
    date: "Dec 2025",
    stars: 5,
    text: "Best service, amazing customer dealing. Very good technicians. Friendly guys, best price. Thank you OnGuard Pest Control!",
    av: "AA",
  },
  {
    name: "RE J IN",
    role: "Google Review",
    date: "Dec 2025",
    stars: 5,
    text: "Very good service, best price. Best pest control of Trivandrum.",
    av: "RJ",
  },
  {
    name: "Akash Mohan",
    role: "Google Review",
    date: "Nov 2025",
    stars: 5,
    text: "Best service and affordable. Highly recommended!",
    av: "AM",
  },
  {
    name: "Archana Aravind",
    role: "Google Review",
    date: "Nov 2025",
    stars: 5,
    text: "Best termite control service in Trivandrum.",
    av: "AA",
  },
  {
    name: "Jiyas Jiya",
    role: "Google Review",
    date: "Nov 2025",
    stars: 5,
    text: "Best service in Trivandrum. Customer friendly, very good behavior. Thank you OnGuard Pest Control. Highly recommend this company!",
    av: "JJ",
  },
  {
    name: "Ansi Fathima",
    role: "Google Review",
    date: "Nov 2025",
    stars: 5,
    text: "Best service! Really satisfied with the results. Will definitely use OnGuard again.",
    av: "AF",
  },
  {
    name: "Alfina bn",
    role: "Google Review",
    date: "Nov 2025",
    stars: 5,
    text: "Best service. Very professional team and excellent results.",
    av: "AB",
  },
];

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function Testimonials() {
  const secRef = useRef();
  const l1Ref = useRef();
  const l2Ref = useRef();
  const tiRef = useRef();
  const trackRef = useRef();
  const dotsRef = useRef([]);

  const [act, setAct] = useState(0);
  const [vis, setVis] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  /* ── detect mobile ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── auto-rotate (desktop only) every 5.5s ── */
  useEffect(() => {
    if (isMobile) return;
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => {
        setAct((a) => (a + 1) % REVS.length);
        setVis(true);
      }, 220);
    }, 5500);
    return () => clearInterval(t);
  }, [isMobile]);

  /* ── parallax ── */
  useEffect(() => {
    const tick = () => {
      if (!secRef.current) return;
      const rect = secRef.current.getBoundingClientRect();
      const mid = window.innerHeight / 2 - rect.top - rect.height / 2;
      if (l1Ref.current) gsap.set(l1Ref.current, { y: mid * 0.42 });
      if (l2Ref.current) gsap.set(l2Ref.current, { y: mid * 0.22 });
    };
    window.addEventListener("scroll", tick, { passive: true });

    /* entrance */
    if (tiRef.current) {
      gsap.fromTo(
        tiRef.current,
        { y: 72, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: secRef.current, start: "top 75%" },
        },
      );
    }

    return () => window.removeEventListener("scroll", tick);
  }, []);

  /* ── mobile dot sync ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updateDots = () => {
      if (window.innerWidth >= 768) return;
      const items = track.querySelectorAll(".trev-item");
      if (!items.length) return;
      const gap = 16;
      const itemW = items[0].offsetWidth + gap;
      const active = Math.min(
        Math.round(track.scrollLeft / itemW),
        REVS.length - 1,
      );
      dotsRef.current.forEach((d, i) => {
        if (!d) return;
        d.classList.toggle("trev-dot-active", i === active);
      });
    };
    track.addEventListener("scroll", updateDots, { passive: true });
    window.addEventListener("resize", updateDots);
    updateDots();
    return () => {
      track.removeEventListener("scroll", updateDots);
      window.removeEventListener("resize", updateDots);
    };
  }, []);

  const scrollToCard = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll(".trev-item");
    items[i]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setAct(i);
  };

  /* Google G SVG icon */
  const GoogleIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );

  return (
    <>
      <style>{`
        #review {
          position: relative;
          padding: 140px 60px;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }

        /* ── Parallax layers ── */
        .testi-layer {
          position: absolute; inset: -22% 0 -22%;
          will-change: transform;
        }
        .testi-layer img { width: 100%; height: 100%; object-fit: cover; }
        .testi-overlay {
          position: absolute; inset: 0;
          background: rgba(238,245,230,.97); z-index: 2;
        }

        /* ── Content wrapper ── */
        .testi-content {
          position: relative; z-index: 3;
          max-width: 900px; margin: 0 auto; text-align: center;
        }

        /* ══════════════════════════════════════
           DESKTOP — single rotating card
        ══════════════════════════════════════ */
        @media (min-width: 768px) {
          .trev-carousel   { display: none; }
          .trev-dots-wrap  { display: none; }
          .trev-desktop    { display: block; }
        }

        /* ══════════════════════════════════════
           MOBILE — horizontal snap carousel
        ══════════════════════════════════════ */
        @media (max-width: 767px) {
          #review { padding: 72px 0 80px; }

          .trev-desktop { display: none; }

          .trev-carousel {
            display: flex;
            gap: 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 8px 20px 16px 20px;
          }
          .trev-carousel::-webkit-scrollbar { display: none; }

          .trev-item {
            flex: 0 0 84vw;
            max-width: 340px;
            scroll-snap-align: start;
          }

          /* dots */
          .trev-dots-wrap {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 7px;
            margin-top: 14px;
            padding: 0 20px;
          }
          .trev-dot {
            width: 7px; height: 7px;
            border-radius: 50%;
            background: rgba(27,58,107,.18);
            border: none; padding: 0;
            cursor: pointer;
            transition: background .3s, transform .3s;
          }
          .trev-dot-active {
            background: ${green};
            transform: scale(1.4);
          }

          .testi-content { max-width: 100%; }
          .trev-header { padding: 0 20px; }
        }

        /* ── Review card (shared) ── */
        .review-card {
          background: #fff;
          border-radius: 24px;
          padding: 48px 52px;
          box-shadow: 0 28px 90px rgba(27,58,107,.1);
          position: relative;
          text-align: left;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (max-width: 767px) {
          .review-card { padding: 28px 24px; }
        }

        .review-quote {
          position: absolute; top: 16px; left: 28px;
          font-size: 96px; color: ${green};
          font-family: Georgia, serif;
          line-height: .7; opacity: .07;
          font-weight: 900; pointer-events: none;
        }

        /* ── Stars ── */
        .rev-stars { display: flex; gap: 3px; margin-bottom: 16px; }
        .rev-star  { color: #F5A623; font-size: 18px; }

        /* ── Quote text ── */
        .rev-text {
          font-size: clamp(13px, 1.6vw, 16px);
          color: #0a1628;
          line-height: 1.85;
          font-style: italic;
          font-weight: 300;
          margin: 0 0 28px;
          flex: 1;
        }

        /* ── Author row ── */
        .rev-author {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .rev-author-left { display: flex; align-items: center; gap: 12px; }

        .avatar {
          width: 48px; height: 48px; border-radius: 50%;
          background: linear-gradient(135deg, ${navy}, ${green});
          display: flex; align-items: center; justify-content: center;
          font-family: 'Lato', sans-serif;
          font-size: 15px; font-weight: 900; color: #fff;
          box-shadow: 0 6px 20px rgba(27,58,107,.3);
          flex-shrink: 0;
        }
        .rev-name {
          font-size: 14px; font-weight: 900;
          color: ${navy}; font-family: 'Lato', sans-serif;
        }
        .rev-meta {
          font-size: 11px; color: #8a9ab0;
          font-family: 'Lato', sans-serif;
          margin-top: 2px;
        }

        /* Google badge */
        .rev-google {
          display: flex; align-items: center; gap: 5px;
          font-size: 10px; font-weight: 700;
          color: #8a9ab0; font-family: 'Lato', sans-serif;
          flex-shrink: 0;
        }

        /* ── Desktop dot nav ── */
        .dot-nav { display: flex; justify-content: center; gap: 8px; margin-top: 32px; }
        .dot-nav button {
          border: none; cursor: pointer; border-radius: 5px; height: 10px;
          transition: all .42s cubic-bezier(.25,.46,.45,.94);
        }

        /* ── Rating summary ── */
        .rev-summary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #fff; border-radius: 50px;
          padding: 10px 20px;
          box-shadow: 0 6px 24px rgba(27,58,107,.08);
          margin-bottom: 40px;
          font-family: 'Lato', sans-serif;
        }
          .rev-summary {
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.25s ease;
}
.rev-summary:hover {
  box-shadow: 0 10px 32px rgba(27,58,107,.15);
  transform: translateY(-2px);
}
        .rev-summary-score {
          font-size: 20px; font-weight: 900; color: ${navy};
        }
        .rev-summary-label {
          font-size: 11px; color: #8a9ab0; font-weight: 600;
          letter-spacing: .5px;
        }
        .rev-summary-stars { display: flex; gap: 2px; }
        .rev-summary-star  { color: #F5A623; font-size: 15px; }
        .rev-google {
  transition: opacity 0.2s ease;
}
.rev-google:hover {
  opacity: 0.7;
}
      `}</style>

      <section id="review" ref={secRef}>
        {/* Parallax layers */}
        <div ref={l1Ref} className="testi-layer" style={{ zIndex: 0 }}>
          <img src={IMG.testiMain} alt="" />
        </div>
        <div
          ref={l2Ref}
          className="testi-layer"
          style={{ zIndex: 1, mixBlendMode: "luminosity", opacity: 0.3 }}
        >
          <img src={IMG.testiL2} alt="" />
        </div>
        <div className="testi-overlay" />

        <div ref={tiRef} className="testi-content">
          {/* ── Header ── */}
          <div className="trev-header">
            <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
              <div
                style={{
                  width: 44,
                  height: 3,
                  background: green,
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  fontFamily: "'Lato',sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 2.2,
                  color: green,
                  textTransform: "uppercase",
                }}
              >
                Client Stories
              </span>
              <div
                style={{
                  width: 44,
                  height: 3,
                  background: green,
                  borderRadius: 2,
                }}
              />
            </div>
            <h2
              style={{
                fontFamily: "'Lato',sans-serif",
                fontSize: "clamp(26px,4vw,56px)",
                fontWeight: 900,
                color: navy,
                margin: "0 0 28px",
                letterSpacing: -0.7,
              }}
            >
              What Our Clients <span style={{ color: green }}>Say</span>
            </h2>

            {/* Rating summary pill */}
            <div className="d-flex justify-content-center mb-2">
              <div
                className="rev-summary"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/search/OnGuard+Pest+Controls+Reviews",
                    "_blank",
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <GoogleIcon />
                <div className="rev-summary-score">5.0</div>
                <div className="rev-summary-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="rev-summary-star">
                      ★
                    </span>
                  ))}
                </div>
                <div className="rev-summary-label">388+ Google Reviews</div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              DESKTOP — single auto-rotating card
          ══════════════════════════════════════ */}
          <div className="trev-desktop">
            <div
              className="review-card"
              style={{ opacity: vis ? 1 : 0, transition: "opacity .22s" }}
            >
              <div className="review-quote">"</div>

              <div className="rev-stars">
                {[...Array(REVS[act].stars)].map((_, i) => (
                  <span key={i} className="rev-star">
                    ★
                  </span>
                ))}
              </div>

              <p className="rev-text">"{REVS[act].text}"</p>

              <div className="rev-author">
                <div className="rev-author-left">
                  <div className="avatar">{REVS[act].av}</div>
                  <div>
                    <div className="rev-name">{REVS[act].name}</div>
                    <div className="rev-meta">{REVS[act].date}</div>
                  </div>
                </div>
                <div className="rev-google">
                  <a
                    href="https://www.google.com/maps/search/OnGuard+Pest+Controls+Reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rev-google"
                    style={{ textDecoration: "none" }}
                  >
                    <GoogleIcon /> Google
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop dot nav */}
            <div className="dot-nav">
              {REVS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAct(i);
                    setVis(true);
                  }}
                  style={{
                    width: i === act ? 32 : 10,
                    background: i === act ? green : "rgba(27,58,107,.18)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════
              MOBILE — horizontal snap carousel
          ══════════════════════════════════════ */}
          <div ref={trackRef} className="trev-carousel">
            {REVS.map((r, i) => (
              <div key={i} className="trev-item">
                <div className="review-card">
                  <div className="review-quote">"</div>
                  <div className="rev-stars">
                    {[...Array(r.stars)].map((_, j) => (
                      <span key={j} className="rev-star">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="rev-text">"{r.text}"</p>
                  <div className="rev-author">
                    <div className="rev-author-left">
                      <div className="avatar">{r.av}</div>
                      <div>
                        <div className="rev-name">{r.name}</div>
                        <div className="rev-meta">{r.date}</div>
                      </div>
                    </div>

                    <a
                      href="https://www.google.com/maps/search/OnGuard+Pest+Controls+Reviews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rev-google"
                      style={{ textDecoration: "none" }}
                    >
                      <GoogleIcon /> Google
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile dots */}
          <div className="trev-dots-wrap">
            {REVS.map((_, i) => (
              <button
                key={i}
                ref={(el) => (dotsRef.current[i] = el)}
                className={`trev-dot${i === 0 ? " trev-dot-active" : ""}`}
                aria-label={`Review ${i + 1}`}
                onClick={() => scrollToCard(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
