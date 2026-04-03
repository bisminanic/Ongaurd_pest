/* ═══════════════════════════════════════════════════════
   Blog.jsx — Light theme blog section (brief cards)
   • Mobile: horizontal snap carousel with dots
   • Desktop: responsive grid (4 → 2 → 1 col)
   • Simple fade-up for whole grid (no per-card stagger)
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BLOGS } from "../blogdata";

gsap.registerPlugin(ScrollTrigger);

const TAG_COLORS = {
  "Cockroach Control":        { color: "#1a3a1a", bg: "rgba(91,199,40,.12)" },
  "Pest Control":             { color: "#0a1628", bg: "rgba(10,22,40,.08)" },
  "Pest Control Cost":        { color: "#2a1500", bg: "rgba(200,100,0,.1)" },
  "Emergency Pest Control":   { color: "#2a0000", bg: "rgba(200,0,0,.08)" },
  "Termite Control":          { color: "#1a0d00", bg: "rgba(150,80,0,.1)" },
  "Bed Bug Control":          { color: "#1a001a", bg: "rgba(120,0,120,.08)" },
  "Ant Control":              { color: "#0d1a00", bg: "rgba(60,120,0,.1)" },
  "Commercial Pest Control":  { color: "#001a2a", bg: "rgba(0,60,120,.08)" },
  "Rodent Control":           { color: "#1a0a00", bg: "rgba(150,60,0,.1)" },
  "Mosquito Control":         { color: "#001a0d", bg: "rgba(0,120,60,.1)" },
};

/* ─── Card ───────────────────────────────────────────────────────────────── */
function BlogCard({ blog }) {
  const navigate = useNavigate();
  const tc = TAG_COLORS[blog.tag] || { color: "#0a1628", bg: "rgba(10,22,40,.08)" };

  return (
    <div
      className="blg-card"
      onClick={() => navigate(`/blog/${blog.slug}`)}
    >
      <div className="blg-card-bar" />
      <div className="blg-card-body">
        <div className="blg-card-top">
          <span className="blg-emoji">{blog.emoji}</span>
          <div style={{ flex: 1 }}>
            <div className="blg-meta">
              <span className="blg-tag" style={{ color: tc.color, background: tc.bg }}>
                {blog.tag}
              </span>
              <span className="blg-date">{blog.date}</span>
              <span className="blg-dot">·</span>
              <span className="blg-date">{blog.readTime}</span>
            </div>
            <h3 className="blg-title">{blog.title}</h3>
            <p className="blg-excerpt">{blog.excerpt}</p>
          </div>
        </div>
        <button
          className="blg-btn"
          onClick={(e) => { e.stopPropagation(); navigate(`/blog/${blog.slug}`); }}
        >
          Learn More →
        </button>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export default function Blog() {
  const secRef   = useRef();
  const headRef  = useRef();
  const gridRef  = useRef();
  const trackRef = useRef();
  const dotsRef  = useRef([]);
  const location = useLocation();

  /* ── Header animation ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        y: 28, autoAlpha: 0, stagger: 0.1,
        duration: 0.7, ease: "power3.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  /* ── Grid fade-up (single unit, no per-card stagger) ── */
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    gsap.set(grid, { y: 40, opacity: 0 });
    const st = ScrollTrigger.create({
      trigger: grid,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(grid, {
          y: 0, opacity: 1,
          duration: 0.65, ease: "power3.out",
          clearProps: "transform,opacity",
        });
      },
    });
    return () => st.kill();
  }, []);

  /* ── Dot sync ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateDots = () => {
      if (window.innerWidth >= 768) return;
      const items = track.querySelectorAll(".blg-carousel-item");
      if (!items.length) return;
      const itemWidth = items[0].offsetWidth + 16; // gap 16px
      const activeIndex = Math.min(
        Math.round(track.scrollLeft / itemWidth),
        BLOGS.length - 1
      );
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        dot.classList.toggle("blg-dot-active", i === activeIndex);
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

  /* ── Dot click ── */
  const scrollToCard = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll(".blg-carousel-item");
    items[index]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════
           BLOG SECTION
        ══════════════════════════════════════ */
        .blg-section {
          background: #f4f6f0;
          padding: 88px 56px 100px;
          position: relative;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }
        .blg-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(10,22,40,.065) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        /* ── Header ── */
        .blg-header {
          max-width: 1600px; margin: 0 auto 52px;
          position: relative; z-index: 1;
        }
        .blg-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #5bc728; margin-bottom: 14px;
        }
        .blg-eyebrow-bar {
          width: 36px; height: 3px; border-radius: 2px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
        }
        .blg-h2 {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 900; color: #0a1628;
          margin: 0 0 14px; line-height: 1.06; letter-spacing: -1px;
        }
        .blg-h2 span { color: #5bc728; }
        .blg-sub {
          font-size: 15px; color: #5a6476;
          max-width: 520px; line-height: 1.8; margin: 0;
        }

        /* ── Card ── */
        .blg-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 28px rgba(10,22,40,.07);
          border: 1px solid rgba(10,22,40,.06);
          display: flex; flex-direction: column;
          cursor: pointer;
          height: 100%;
          transition:
            transform 0.35s cubic-bezier(.22,1,.36,1),
            box-shadow 0.35s ease,
            border-color 0.3s ease;
          position: relative;
        }
        .blg-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 80px rgba(10,22,40,.18);
          border-color: rgba(91,199,40,.4);
        }
        .blg-card::after {
          content: "";
          position: absolute; inset: 0;
          border-radius: 18px;
          background: radial-gradient(circle at top, rgba(91,199,40,0.15), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .blg-card:hover::after { opacity: 1; }

        .blg-card-bar {
          height: 4px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
          flex-shrink: 0;
        }
        .blg-card-body {
          padding: 24px 24px 22px;
          display: flex; flex-direction: column; flex: 1;
        }
        .blg-card-top {
          display: grid; gap: 14px;
          align-items: flex-start; flex: 1;
        }
        .blg-emoji {
          font-size: 34px; line-height: 1;
          flex-shrink: 0; margin-top: 3px;
          transition: transform 0.3s ease;
        }
        .blg-card:hover .blg-emoji { transform: translateY(-4px) scale(1.1); }

        .blg-meta {
          display: flex; align-items: center;
          flex-wrap: wrap; gap: 5px; margin-bottom: 9px;
        }
        .blg-tag {
          font-size: 9px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 3px 9px; border-radius: 50px;
        }
        .blg-date { font-size: 11px; color: #8a9ab0; font-weight: 500; }
        .blg-dot  { color: #8a9ab0; font-size: 11px; }

        .blg-title {
          font-size: 16px; font-weight: 900;
          color: #0a1628; line-height: 1.4;
          margin: 0 0 9px; letter-spacing: -0.2px;
          transition: color 0.3s ease;
        }
        .blg-card:hover .blg-title { color: #5bc728; }

        .blg-excerpt {
          font-size: 13px; color: #5a6476;
          line-height: 1.75; margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blg-btn {
          margin-top: 18px;
          display: inline-flex; align-items: center; gap: 6px;
          background: none; border: none; cursor: pointer; padding: 0;
          color: #5bc728; font-family: 'Lato', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.3px;
          transition: gap .25s, color .2s;
          justify-content: flex-end;
        }
        .blg-btn:hover { gap: 10px; color: #3fa81a; }

        /* ══════════════════════════════════════
           DESKTOP GRID — 4 → 2 columns
        ══════════════════════════════════════ */
        @media (min-width: 768px) {
          .blg-carousel-track {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
          .blg-carousel-item { width: 100%; }
          .blg-carousel-dots { display: none; }
        }

        @media (min-width: 768px) and (max-width: 1100px) {
          .blg-carousel-track {
            grid-template-columns: repeat(2, 1fr);
          }
          .blg-section { padding: 72px 32px 88px; }
        }

        /* ══════════════════════════════════════
           MOBILE CAROUSEL — horizontal snap
        ══════════════════════════════════════ */
        @media (max-width: 767px) {
          .blg-section {
            padding: 60px 0 72px;
          }
          .blg-header {
            padding: 0 20px;
            margin-bottom: 32px;
          }
          .blg-track-wrapper {
            /* bleed past section padding */
            margin-left: 0;
            margin-right: 0;
          }
          .blg-carousel-track {
            display: flex !important;
            gap: 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding: 8px 20px 16px 20px;
          }
          .blg-carousel-track::-webkit-scrollbar { display: none; }

          .blg-carousel-item {
            flex: 0 0 80vw;
            max-width: 300px;
            scroll-snap-align: start;
          }

          /* ── Dots ── */
          .blg-carousel-dots {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 7px;
            margin-top: 8px;
            padding: 0 20px;
          }
          .blg-carousel-dot {
            width: 7px; height: 7px;
            border-radius: 50%;
            background: #d0d0d0;
            border: none; padding: 0;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.3s ease;
          }
          .blg-carousel-dot.blg-dot-active {
            background: #5bc728;
            transform: scale(1.4);
          }
        }

        /* ══════════════════════════════════════
           SMALL MOBILE ≤ 380px
        ══════════════════════════════════════ */
        @media (max-width: 380px) {
          .blg-carousel-item {
            flex: 0 0 88vw;
          }
        }
      `}</style>

      <section className="blg-section" ref={secRef} id="blog">

        {/* Header */}
        <div className="blg-header" ref={headRef}>
          <div className="blg-eyebrow">
            <div className="blg-eyebrow-bar" />
            Knowledge Hub
          </div>
          <h2 className="blg-h2">
            Expert Insights &amp; <span>Pest Control</span> Guides
          </h2>
          <p className="blg-sub">
            Helpful resources from our team — covering pest identification,
            treatment methods, cost guides, and prevention tips for Kerala homes
            and businesses.
          </p>
        </div>

        {/* Grid / Carousel */}
        <div ref={gridRef} style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="blg-track-wrapper">
            <div ref={trackRef} className="blg-carousel-track">
              {BLOGS.map((blog, i) => (
                <div key={blog.id} className="blg-carousel-item">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots — hidden on desktop via CSS */}
          <div className="blg-carousel-dots">
            {BLOGS.map((_, i) => (
              <button
                key={i}
                ref={(el) => (dotsRef.current[i] = el)}
                className={`blg-carousel-dot${i === 0 ? " blg-dot-active" : ""}`}
                aria-label={`Go to blog ${i + 1}`}
                onClick={() => scrollToCard(i)}
              />
            ))}
          </div>
        </div>

      </section>
    </>
  );
}