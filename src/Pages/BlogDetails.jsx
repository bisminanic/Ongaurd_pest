/* ═══════════════════════════════════════════════════════
   BlogDetail.jsx — Full blog post detail page
   Route: /blog/:slug
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BLOGS } from "../blogdata";

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef();
  const sectionsRef = useRef([]);

  const blog = BLOGS.find((b) => b.slug === slug);

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!blog) return;

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
    );

    sectionsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 44 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [slug, blog]);

  const addRef = (i) => (el) => {
    sectionsRef.current[i] = el;
  };

  /* Related blogs (exclude current, pick 3) */
  const related = BLOGS.filter((b) => b.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f6f0",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 60 }}>📄</div>
          <h2
            style={{
              fontFamily: "'Lato',sans-serif",
              color: "#0a1628",
              marginTop: 16,
            }}
          >
            Article Not Found
          </h2>
          <button
            onClick={() => {
  navigate("/#blog");
}}
            style={{
              marginTop: 24,
              background: "#5bc728",
              color: "#fff",
              border: "none",
              padding: "14px 32px",
              borderRadius: 50,
              fontFamily: "'Lato',sans-serif",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=DM+Sans:wght@400;500;700&display=swap');

        /* ══════════════════════════════════════
           BLOG DETAIL PAGE
        ══════════════════════════════════════ */
        .bd-root {
          background: #f4f6f0;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Topbar ── */
        .bd-topbar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,.97);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,0,0,.07);
          padding: 14px 52px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .bd-back {
          display: inline-flex; align-items: center; gap: 8px;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
          color: #0a1628; padding: 8px 16px; border-radius: 50px;
          transition: all .25s;
        }
        .bd-back:hover { background: rgba(91,199,40,.1); color: #5bc728; }
        .bd-logo {
          font-family: 'Lato', sans-serif;
          font-size: 17px; font-weight: 900; color: #0a1628;
        }
        .bd-logo span { color: #5bc728; }

        /* ── Hero ── */
        .bd-hero {
          background: linear-gradient(135deg, #071128 0%, #0d2040 60%, #071128 100%);
          padding: 80px 52px 72px;
          position: relative; overflow: hidden;
        }
        .bd-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .bd-hero-glow {
          position: absolute; top: -60px; right: -60px;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(91,199,40,.15) 0%, transparent 65%);
          pointer-events: none;
        }
        .bd-hero-inner {
          max-width: 860px; margin: 0 auto;
          position: relative; z-index: 2;
        }
        .bd-hero-meta {
          display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
          margin-bottom: 20px;
        }
        .bd-hero-tag {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #5bc728;
          background: rgba(91,199,40,.15); border: 1px solid rgba(91,199,40,.3);
          padding: 5px 14px; border-radius: 50px;
        }
        .bd-hero-date { font-size: 13px; color: rgba(255,255,255,.45); }
        .bd-hero-dot  { color: rgba(255,255,255,.3); }
        .bd-hero-time { font-size: 13px; color: rgba(255,255,255,.45); }

        .bd-hero-emoji {
          font-size: 60px; display: block;
          line-height: 1; margin-bottom: 18px;
        }
        .bd-hero-title {
          font-family: 'Lato', sans-serif;
          font-size: clamp(28px, 4.5vw, 54px);
          font-weight: 900; color: #fff;
          line-height: 1.1; letter-spacing: -1px;
          margin: 0 0 18px;
        }
        .bd-hero-excerpt {
          font-size: 16px; color: rgba(255,255,255,.6);
          line-height: 1.75; max-width: 620px; margin: 0;
        }

        /* ── Content area ── */
        .bd-content {
          max-width: 860px; margin: 0 auto;
          padding: 0 52px 80px;
        }

        /* ── Sections ── */
        .bd-section {
          margin-top: 56px;
        }
        .bd-section-label {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 28px;
        }
        .bd-section-bar {
          height: 3px; width: 32px; border-radius: 2px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
        }
        .bd-section-num {
          font-family: 'Lato', sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #5bc728;
        }

        /* Article sections */
        .bd-articles { margin-top: 40px; }
        .bd-article {
          background: #fff; border-radius: 18px;
          padding: 32px 36px;
          box-shadow: 0 4px 28px rgba(10,22,40,.07);
          border: 1px solid rgba(10,22,40,.06);
          margin-bottom: 20px;
          display: flex; gap: 20px;
          transition: box-shadow .3s;
        }
        .bd-article:hover { box-shadow: 0 12px 48px rgba(10,22,40,.11); }
        .bd-article-num {
          font-family: 'Lato', sans-serif;
          font-size: 40px; font-weight: 900;
          color: rgba(91,199,40,.2); line-height: 1;
          flex-shrink: 0; width: 52px;
          padding-top: 4px;
        }
        .bd-article-body { flex: 1; }
        .bd-article-heading {
          font-family: 'Lato', sans-serif;
          font-size: 18px; font-weight: 900;
          color: #0a1628; margin: 0 0 12px;
          letter-spacing: -0.2px;
        }
        .bd-article-content {
          font-size: 14.5px; color: #4a5568;
          line-height: 1.85; margin: 0;
        }

        /* ── FAQ Section ── */
        .bd-faq-list { margin-top: 0; }
        .bd-faq-item {
          background: #fff; border-radius: 14px;
          border: 1px solid rgba(10,22,40,.06);
          margin-bottom: 12px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(10,22,40,.05);
        }
        .bd-faq-q {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 24px; cursor: pointer;
          font-size: 15px; font-weight: 700; color: #0a1628;
          gap: 12px;
          transition: background .2s;
        }
        .bd-faq-q:hover { background: rgba(91,199,40,.04); }
        .bd-faq-q.open  { color: #5bc728; }
        .bd-faq-icon {
          width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0;
          background: rgba(91,199,40,.1); border: 1px solid rgba(91,199,40,.3);
          display: flex; align-items: center; justify-content: center;
          color: #5bc728; font-size: 14px; font-weight: 900;
          transition: transform .3s, background .2s;
        }
        .bd-faq-q.open .bd-faq-icon {
          transform: rotate(45deg);
          background: #5bc728; color: #fff;
        }
        .bd-faq-a {
          padding: 0 24px;
          font-size: 14px; color: #5a6476; line-height: 1.8;
          max-height: 0; overflow: hidden;
          transition: max-height .4s ease, padding .3s;
        }
        .bd-faq-a.open {
          max-height: 300px;
          padding: 0 24px 18px;
        }

        /* ── CTA Band ── */
        .bd-cta {
          background: linear-gradient(135deg, #0a1628 0%, #1a2f50 100%);
          border-radius: 20px; padding: 44px 48px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          margin-top: 60px;
          box-shadow: 0 24px 60px rgba(10,22,40,.2);
          position: relative; overflow: hidden;
        }
        .bd-cta::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 36px 36px;
        }
        .bd-cta-title {
          font-family: 'Lato', sans-serif;
          font-size: 24px; font-weight: 900;
          color: #fff; margin-bottom: 8px;
          position: relative; z-index: 1;
        }
        .bd-cta-sub {
          font-size: 14px; color: rgba(255,255,255,.55);
          position: relative; z-index: 1;
        }
        .bd-cta-btn {
          background: #5bc728; color: #fff; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
          padding: 15px 34px; border-radius: 50px; white-space: nowrap;
          box-shadow: 0 12px 36px rgba(91,199,40,.4); transition: all .3s;
          position: relative; z-index: 1;
        }
        .bd-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 48px rgba(91,199,40,.5); }

        /* ── Related Articles ── */
        .bd-related { margin-top: 72px; }
        .bd-related-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 18px; margin-top: 28px;
        }
        .bd-rel-card {
          background: #fff; border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 4px 20px rgba(10,22,40,.07);
          border: 1px solid rgba(10,22,40,.06);
          cursor: pointer; transition: all .3s;
          border-top: 3px solid #5bc728;
        }
        .bd-rel-card:hover { transform: translateY(-4px); box-shadow: 0 16px 44px rgba(10,22,40,.12); }
        .bd-rel-emoji { font-size: 28px; margin-bottom: 10px; }
        .bd-rel-title {
          font-family: 'Lato', sans-serif;
          font-size: 14px; font-weight: 800;
          color: #0a1628; line-height: 1.4; margin: 0 0 10px;
        }
        .bd-rel-link {
          font-size: 12px; font-weight: 700; color: #5bc728;
          display: inline-flex; align-items: center; gap: 4px;
          transition: gap .2s;
        }
        .bd-rel-card:hover .bd-rel-link { gap: 8px; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .bd-hero     { padding: 60px 24px 50px; }
          .bd-content  { padding: 0 24px 60px; }
          .bd-topbar   { padding: 12px 20px; }
          .bd-article  { flex-direction: column; gap: 8px; }
          .bd-cta      { padding: 32px 24px; }
          .bd-related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="bd-root">
        {/* ── Topbar ── */}
        <div className="bd-topbar">
          <button className="bd-back" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <div className="bd-logo">
            OnGuard <span>Pest Controls</span>
          </div>
          <div style={{ width: 80 }} />
        </div>

        {/* ── Hero ── */}
        <div className="bd-hero" ref={heroRef}>
          <div className="bd-hero-glow" />
          <div className="bd-hero-inner">
            <div className="bd-hero-meta">
              <span className="bd-hero-tag">{blog.tag}</span>
              <span className="bd-hero-date">{blog.date}</span>
              <span className="bd-hero-dot">·</span>
              <span className="bd-hero-time">{blog.readTime}</span>
            </div>
            <span className="bd-hero-emoji">{blog.emoji}</span>
            <h1 className="bd-hero-title">{blog.title}</h1>
            <p className="bd-hero-excerpt">{blog.excerpt}</p>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="bd-content">
          {/* Article sections */}
          <div className="bd-section" ref={addRef(0)}>
            <div className="bd-section-label">
              <div className="bd-section-bar" />
              <span className="bd-section-num">Full Article</span>
            </div>
            <div className="bd-articles">
              {blog.sections.map((sec, i) => (
                <div key={i} className="bd-article">
                  <div className="bd-article-num">0{i + 1}</div>
                  <div className="bd-article-body">
                    <h2 className="bd-article-heading">{sec.heading}</h2>
                    <p className="bd-article-content">
                      {sec.content.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          {blog.faqs && blog.faqs.length > 0 && (
            <div className="bd-section" ref={addRef(1)}>
              <div className="bd-section-label">
                <div className="bd-section-bar" />
                <span className="bd-section-num">
                  Frequently Asked Questions
                </span>
              </div>
              <div className="bd-faq-list">
                {blog.faqs.map((faq, i) => (
                  <FaqItem key={i} faq={faq} />
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bd-cta" ref={addRef(2)}>
            <div>
              <div className="bd-cta-title">
                Need Professional Pest Control?
              </div>
              <div className="bd-cta-sub">
                Get a free inspection from our certified team — available 24
                hours across Kerala &amp; South Tamil Nadu.
              </div>
            </div>
            <button
              className="bd-cta-btn"
              onClick={() => {
                navigate("/");
                setTimeout(
                  () =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  400,
                );
              }}
            >
              Book Free Inspection →
            </button>
          </div>

          {/* Related Articles */}
          <div className="bd-related" ref={addRef(3)}>
            <div className="bd-section-label">
              <div className="bd-section-bar" />
              <span className="bd-section-num">Related Articles</span>
            </div>
            <div className="bd-related-grid">
              {related.map((r) => (
                <div
                  key={r.id}
                  className="bd-rel-card"
                  onClick={() => {
                    navigate(`/blog/${r.slug}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="bd-rel-emoji">{r.emoji}</div>
                  <div className="bd-rel-title">{r.title}</div>
                  <span className="bd-rel-link">Read More →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── FAQ Accordion Item ── */
function FaqItem({ faq }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bd-faq-item">
      <div
        className={`bd-faq-q${open ? " open" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{faq.q}</span>
        <span className="bd-faq-icon">+</span>
      </div>
      <div className={`bd-faq-a${open ? " open" : ""}`}>{faq.a}</div>
    </div>
  );
}
