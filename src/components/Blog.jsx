/* ═══════════════════════════════════════════════════════
   Blog.jsx — Light theme blog section (brief cards)
   Learn More → /blog/:slug
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BLOGS } from "../blogdata";

gsap.registerPlugin(ScrollTrigger);

const TAG_COLORS = {
  "Cockroach Control": { color: "#1a3a1a", bg: "rgba(91,199,40,.12)" },
  "Pest Control": { color: "#0a1628", bg: "rgba(10,22,40,.08)" },
  "Pest Control Cost": { color: "#2a1500", bg: "rgba(200,100,0,.1)" },
  "Emergency Pest Control": { color: "#2a0000", bg: "rgba(200,0,0,.08)" },
  "Termite Control": { color: "#1a0d00", bg: "rgba(150,80,0,.1)" },
  "Bed Bug Control": { color: "#1a001a", bg: "rgba(120,0,120,.08)" },
  "Ant Control": { color: "#0d1a00", bg: "rgba(60,120,0,.1)" },
  "Commercial Pest Control": { color: "#001a2a", bg: "rgba(0,60,120,.08)" },
  "Rodent Control": { color: "#1a0a00", bg: "rgba(150,60,0,.1)" },
  "Mosquito Control": { color: "#001a0d", bg: "rgba(0,120,60,.1)" },
};

function BlogCard({ blog, index }) {
  const navigate = useNavigate();
  const cardRef = useRef();
  const tc = TAG_COLORS[blog.tag] || {
    color: "#0a1628",
    bg: "rgba(10,22,40,.08)",
  };

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 55, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: (index % 3) * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 92%",
          once: true,
        },
      },
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="blg-card"
      onClick={() => navigate(`/blog/${blog.slug}`)}
    >
      <div className="blg-card-bar" />
      <div className="blg-card-body">
        <div className="blg-card-top">
          <span className="blg-emoji">{blog.emoji}</span>
          <div style={{ flex: 1 }}>
            <div className="blg-meta">
              <span
                className="blg-tag"
                style={{ color: tc.color, background: tc.bg }}
              >
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
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/blog/${blog.slug}`);
          }}
        >
          Learn More →
        </button>
      </div>
    </div>
  );
}

export default function Blog() {
  const secRef = useRef();
  const headRef = useRef();
const location = useLocation();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current.children, {
        y: 28,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, secRef);
    return () => ctx.revert();
   
  }, []);

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════
           BLOG SECTION — light off-white
        ══════════════════════════════════════ */
        .blg-section {
          background: #f4f6f0;
          padding: 88px 56px 100px;
          position: relative;
          overflow: hidden;
          font-family: 'Lato', sans-serif;
        }

        /* Dot grid background */
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

        /* ── Grid: 3 columns ── */
        .blg-grid {
          max-width: 1600px; margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative; z-index: 1;
        }

        /* ── Card ── */
      .blg-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 28px rgba(10,22,40,.07);
  border: 1px solid rgba(10,22,40,.06);
  display: flex;
  flex-direction: column;
  cursor: pointer;

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
  position: absolute;
  inset: 0;
  border-radius: 18px;
  background: radial-gradient(circle at top, rgba(91,199,40,0.15), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.blg-card:hover::after {
  opacity: 1;
}
        .blg-card-bar {
          height: 4px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
          flex-shrink: 0;
        }
        .blg-card-body {
          padding: 24px 24px 22px;
          display: flex; flex-direction: column;
          flex: 1;
        }
        .blg-card-top {
          display: grid; gap: 14px;
          align-items: flex-start;
          flex: 1;
        }
        .blg-emoji {
          font-size: 34px; line-height: 1;
          flex-shrink: 0; margin-top: 3px;
        }
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
        }
          .blg-title {
  transition: color 0.3s ease;
}

.blg-card:hover .blg-title {
  color: #5bc728;
}
  .blg-emoji {
  transition: transform 0.3s ease;
}

.blg-card:hover .blg-emoji {
  transform: translateY(-4px) scale(1.1);
}
        .blg-excerpt {
          font-size: 13px; color: #5a6476;
          line-height: 1.75; margin: 0;
          /* Clamp to 3 lines */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* ── Learn More button ── */
        .blg-btn {
          margin-top: 18px;
          display: inline-flex; align-items: center; gap: 6px;
          background: none; border: none; cursor: pointer; padding: 0;
          color: #5bc728; font-family: 'Lato', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.3px;
          transition: gap .25s, color .2s;justify-content: end;
        }
        .blg-btn:hover { gap: 10px; color: #3fa81a; }
        .blg-btn-arrow { transition: transform .2s; }
        .blg-btn:hover .blg-btn-arrow { transform: translateX(4px); }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .blg-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 680px) {
          .blg-grid { grid-template-columns: 1fr; }
          .blg-section { padding: 60px 20px 70px; }
          .blg-header { margin-bottom: 32px; }
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

        {/* Cards */}
        <div className="blg-grid">
          {BLOGS.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
