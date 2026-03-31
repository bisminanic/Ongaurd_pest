/* ═══════════════════════════════════════════════════════
   ServiceDetailPage.jsx
   Dynamic service detail page — reads slug from URL params
   Route: /services/:slug
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICE_DATA } from "../service";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef();
  const sectionsRef = useRef([]);

  const service = SERVICE_DATA[slug];

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!service) return;

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
    );

    sectionsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%" },
        },
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [slug, service]);

  const addRef = (i) => (el) => {
    sectionsRef.current[i] = el;
  };

  if (!service) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f8f9f4",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64 }}>🔍</div>
          <h2
            style={{
              fontFamily: "'Lato',sans-serif",
              color: "#0a1628",
              marginTop: 16,
            }}
          >
            Service Not Found
          </h2>
          <button
            onClick={() => navigate("/#services")}
            style={{
              marginTop: 24,
              background: "#5bc728",
              color: "#fff",
              border: "none",
              padding: "14px 32px",
              borderRadius: 50,
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            ← Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');

        .sdp-root { background: #f8f9f4; min-height: 100vh; font-family: 'DM Sans', sans-serif; }

        /* Topbar */
        .sdp-topbar {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,0.96); backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(0,0,0,.07);
          padding: 14px 48px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .sdp-back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans',sans-serif; font-size: 14px; font-weight: 700;
          color: #0a1628; padding: 8px 16px; border-radius: 50px; transition: all .25s;
        }
        .sdp-back-btn:hover { background: rgba(91,199,40,.1); color: #5bc728; }
        .sdp-logo { font-family: 'Lato',sans-serif; font-size: 17px; font-weight: 900; color: #0a1628; }
        .sdp-logo span { color: #5bc728; }

        /* Hero */
        .sdp-hero {
          padding: 90px 48px 70px;
          position: relative; overflow: hidden;
        }
        .sdp-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(91,199,40,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,199,40,.04) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }
        .sdp-hero-glow {
          position: absolute; top: -80px; right: -80px; width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(91,199,40,.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .sdp-hero-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; }
        .sdp-hero-tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(91,199,40,.15); border: 1px solid rgba(91,199,40,.4);
          border-radius: 50px; padding: 7px 18px; margin-bottom: 24px;
          font-size: 11px; font-weight: 700; color: #5bc728;
          letter-spacing: 2px; text-transform: uppercase;
        }
        .sdp-hero-dot { width: 6px; height: 6px; border-radius: 50%; background: #5bc728; }
        .sdp-hero-icon { font-size: 64px; margin-bottom: 20px; display: block; line-height: 1; }
        .sdp-hero-h1 {
          font-family: 'Lato',sans-serif; font-size: clamp(32px, 5vw, 60px);
          font-weight: 900; color: #fff; line-height: 1.06;
          letter-spacing: -1px; margin: 0 0 16px;
        }
        .sdp-hero-h1 em { font-style: normal; color: #5bc728; }
        .sdp-hero-tagline {
          font-size: 17px; color: rgba(255,255,255,.65);
          line-height: 1.7; max-width: 580px; font-weight: 400; margin-bottom: 36px;
        }
        .sdp-hero-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: #5bc728; color: #fff; border: none; cursor: pointer;
          font-family: 'DM Sans',sans-serif; font-size: 15px; font-weight: 700;
          padding: 16px 36px; border-radius: 50px;
          box-shadow: 0 12px 40px rgba(91,199,40,.35); transition: all .3s;
        }
        .sdp-hero-cta:hover { transform: translateY(-3px); box-shadow: 0 20px 50px rgba(91,199,40,.45); }

        /* Content */
        .sdp-content { max-width: 1100px; margin: 0 auto; padding: 0 48px 100px; }
        .sdp-section { margin-top: 72px; }
        .sdp-section-label { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .sdp-section-bar { height: 3px; width: 32px; background: linear-gradient(90deg, #5bc728, #3fa81a); border-radius: 2px; }
        .sdp-section-tag { font-size: 11px; font-weight: 700; color: #5bc728; letter-spacing: 2.5px; text-transform: uppercase; }
        .sdp-section-h2 {
          font-family: 'Lato',sans-serif; font-size: clamp(22px, 3vw, 36px);
          font-weight: 900; color: #0a1628; letter-spacing: -0.5px; margin: 0 0 28px;
        }

        /* Intro card */
        .sdp-intro-card {
          background: #fff; border-radius: 20px; padding: 36px 40px;
          box-shadow: 0 8px 40px rgba(0,0,0,.06); border-left: 4px solid #5bc728;
          font-size: 15px; color: #5a6476; line-height: 1.9;
        }

        /* Why Important */
        .sdp-why-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
        .sdp-why-card {
          background: #fff; border-radius: 16px; padding: 24px 26px;
          box-shadow: 0 4px 24px rgba(0,0,0,.05); border: 1px solid rgba(0,0,0,.05);
          transition: all .25s;
        }
        .sdp-why-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(91,199,40,.12); border-color: rgba(91,199,40,.2); }
        .sdp-why-num {
          font-family: 'Playfair Display',serif; font-size: 36px; font-weight: 900;
          color: rgba(91,199,40,.25); line-height: 1; margin-bottom: 12px;
        }
        .sdp-why-title { font-size: 15px; font-weight: 700; color: #0a1628; margin-bottom: 8px; }
        .sdp-why-desc { font-size: 13px; color: #5a6476; line-height: 1.7; }

        /* Signs */
        .sdp-signs-grid { display: flex; flex-direction: column; gap: 0; }
        .sdp-sign-item {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,.06);
        }
        .sdp-sign-item:last-child { border-bottom: none; }
        .sdp-sign-dot {
          width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
          background: rgba(91,199,40,.12); border: 1px solid rgba(91,199,40,.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; color: #5bc728; font-weight: 900;
        }
        .sdp-sign-text { font-size: 14px; font-weight: 500; color: #1a2540; }

        /* Methods */
        .sdp-methods-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
        .sdp-method-card {
          background: #fff; border-radius: 16px; padding: 24px 26px;
          box-shadow: 0 4px 24px rgba(0,0,0,.05); border: 1px solid rgba(0,0,0,.05);
          transition: all .25s; position: relative; overflow: hidden;
        }
        .sdp-method-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #5bc728, #3fa81a);
          transform: scaleX(0); transform-origin: left; transition: transform .3s;
        }
        .sdp-method-card:hover::before { transform: scaleX(1); }
        .sdp-method-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(91,199,40,.12); }
        .sdp-method-name { font-size: 15px; font-weight: 700; color: #0a1628; margin-bottom: 10px; }
        .sdp-method-desc { font-size: 13px; color: #5a6476; line-height: 1.7; }

        /* Sectors */
        .sdp-sectors-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
        .sdp-sector-pill {
          background: #fff; border-radius: 12px; padding: 16px 20px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 3px 16px rgba(0,0,0,.05);
          border: 1px solid rgba(0,0,0,.05); transition: all .2s;
        }
        .sdp-sector-pill:hover { border-color: rgba(91,199,40,.3); background: rgba(91,199,40,.04); }
        .sdp-sector-icon { font-size: 20px; }
        .sdp-sector-label { font-size: 13px; font-weight: 600; color: #1a2540; line-height: 1.3; }

        /* Tips */
        .sdp-tips-grid { display: flex; flex-wrap: wrap; gap: 10px; }
        .sdp-tip-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid rgba(91,199,40,.25);
          border-radius: 50px; padding: 10px 18px;
          font-size: 13px; font-weight: 600; color: #1a2540;
          box-shadow: 0 2px 10px rgba(0,0,0,.05);
        }
        .sdp-tip-check { color: #5bc728; font-weight: 900; }

        /* CTA Band */
        .sdp-cta-band {
          background: linear-gradient(135deg, #0a1628 0%, #1a2f50 100%);
          border-radius: 20px; padding: 48px 52px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          margin-top: 72px; flex-wrap: wrap;
          box-shadow: 0 24px 64px rgba(10,22,40,.25);
          position: relative; overflow: hidden;
        }
        .sdp-cta-band::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .sdp-cta-title { font-family: 'Lato',sans-serif; font-size: 26px; font-weight: 900; color: #fff; margin-bottom: 8px; position: relative; z-index: 1; }
        .sdp-cta-sub { font-size: 14px; color: rgba(255,255,255,.6); position: relative; z-index: 1; }
        .sdp-cta-btn {
          background: #5bc728; color: #fff; border: none; cursor: pointer;
          font-family: 'DM Sans',sans-serif; font-size: 15px; font-weight: 700;
          padding: 16px 36px; border-radius: 50px; white-space: nowrap;
          box-shadow: 0 12px 36px rgba(91,199,40,.4); transition: all .3s;
          position: relative; z-index: 1;
        }
        .sdp-cta-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 50px rgba(91,199,40,.5); }

        /* AMC badge */
        .sdp-amc-badge {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
          background: linear-gradient(135deg, rgba(91,199,40,.1), rgba(91,199,40,.05));
          border: 1px solid rgba(91,199,40,.25); border-radius: 16px;
          padding: 24px 28px; margin-top: 24px;
        }
        .sdp-amc-icon { font-size: 32px; }
        .sdp-amc-title { font-size: 15px; font-weight: 700; color: #0a1628; }
        .sdp-amc-sub { font-size: 13px; color: #5a6476; margin-top: 3px; }

        @media (max-width: 768px) {
          .sdp-hero { padding: 70px 24px 50px; }
          .sdp-content { padding: 0 24px 80px; }
          .sdp-topbar { padding: 12px 24px; }
          .sdp-cta-band { padding: 36px 28px; }
        }
      `}</style>

      <div className="sdp-root">
        {/* Topbar */}
        <div className="sdp-topbar">
          <button className="sdp-back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <div className="sdp-logo">
            OnGuard <span>Pest Controls</span>
          </div>
          <div style={{ width: 100 }} />
        </div>

        {/* Hero */}
        <div
          className="sdp-hero"
          ref={heroRef}
          style={{
            background: `linear-gradient(135deg, ${service.heroColor}ee 0%, #0a1628f0 100%)`,
            position: "relative",
          }}
        >
          {/* Hero background image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${service.heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
              filter: "brightness(0.28) saturate(1.2)",
            }}
          />

          <div className="sdp-hero-glow" style={{ zIndex: 1 }} />

          <div
            className="sdp-hero-inner"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="sdp-hero-tag">
              <span className="sdp-hero-dot" />
              OnGuard Pest Controls
            </div>
            <span className="sdp-hero-icon">{service.icon}</span>
            <h1 className="sdp-hero-h1">{service.title}</h1>
            <p className="sdp-hero-tagline">{service.tagline}</p>
            <button
              className="sdp-hero-cta"
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
             Get Free Inspection →
            </button>
          </div>
        </div>

        <div className="sdp-content">
          {/* Overview */}
          <div className="sdp-section" ref={addRef(0)}>
            <div className="sdp-section-label">
              <div className="sdp-section-bar" />
              <span className="sdp-section-tag">Overview</span>
            </div>
            <h2 className="sdp-section-h2">About This Service</h2>
            <div className="sdp-intro-card">{service.intro}</div>
          </div>

          {/* Why Important */}
          <div className="sdp-section" ref={addRef(1)}>
            <div className="sdp-section-label">
              <div className="sdp-section-bar" />
              <span className="sdp-section-tag">Why It Matters</span>
            </div>
            <h2 className="sdp-section-h2">
              Why Professional Control is Essential
            </h2>
            <div className="sdp-why-grid">
              {service.whyImportant.map((item, i) => (
                <div key={i} className="sdp-why-card">
                  <div className="sdp-why-num">0{i + 1}</div>
                  <div className="sdp-why-title">{item.title}</div>
                  <div className="sdp-why-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Signs */}
          <div className="sdp-section" ref={addRef(2)}>
            <div className="sdp-section-label">
              <div className="sdp-section-bar" />
              <span className="sdp-section-tag">Early Detection</span>
            </div>
            <h2 className="sdp-section-h2">Signs of Infestation</h2>
            <div
              className="sdp-signs-grid"
              style={{
                background: "#fff",
                borderRadius: 16,
                padding: "8px 28px",
                boxShadow: "0 4px 24px rgba(0,0,0,.06)",
              }}
            >
              {service.signs.map((sign, i) => (
                <div key={i} className="sdp-sign-item">
                  <div className="sdp-sign-dot">✓</div>
                  <span className="sdp-sign-text">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methods */}
          <div className="sdp-section" ref={addRef(3)}>
            <div className="sdp-section-label">
              <div className="sdp-section-bar" />
              <span className="sdp-section-tag">Treatment Methods</span>
            </div>
            <h2 className="sdp-section-h2">Our Control Methods</h2>
            <div className="sdp-methods-grid">
              {service.methods.map((m, i) => (
                <div key={i} className="sdp-method-card">
                  <div className="sdp-method-name">{m.name}</div>
                  <div className="sdp-method-desc">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div className="sdp-section" ref={addRef(4)}>
            <div className="sdp-section-label">
              <div className="sdp-section-bar" />
              <span className="sdp-section-tag">Sectors Served</span>
            </div>
            <h2 className="sdp-section-h2">Who We Serve</h2>
            <div className="sdp-sectors-grid">
              {service.sectors.map((s, i) => {
                const icons = ["🏠", "🏢", "🍽️", "🏥", "🏭", "🏫"];
                return (
                  <div key={i} className="sdp-sector-pill">
                    <span className="sdp-sector-icon">
                      {icons[i % icons.length]}
                    </span>
                    <span className="sdp-sector-label">{s}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preventive Tips */}
          <div className="sdp-section" ref={addRef(5)}>
            <div className="sdp-section-label">
              <div className="sdp-section-bar" />
              <span className="sdp-section-tag">Preventive Tips</span>
            </div>
            <h2 className="sdp-section-h2">
              How to Prevent Future Infestations
            </h2>
            <div className="sdp-tips-grid">
              {service.preventiveTips.map((tip, i) => (
                <div key={i} className="sdp-tip-pill">
                  <span className="sdp-tip-check">✓</span>
                  {tip}
                </div>
              ))}
            </div>

            {/* AMC */}
            <div className="sdp-amc-badge">
              <div className="sdp-amc-icon">📋</div>
              <div>
                <div className="sdp-amc-title">
                  Annual Maintenance Contracts (AMC) Available
                </div>
                <div className="sdp-amc-sub">
                  Regular inspections, preventive treatments, priority service,
                  and cost savings — ideal for homes and businesses.
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="sdp-cta-band" ref={addRef(6)}>
            <div>
              <div className="sdp-cta-title">
                Ready to Get Rid of{" "}
                {service.title.replace(" Services", "").replace(" Service", "")}
                ?
              </div>
              <div className="sdp-cta-sub">
                Get a free inspection from our certified team — available 24
                hours across Kerala & South Tamil Nadu.
              </div>
            </div>
            <button
              className="sdp-cta-btn"
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
        </div>
      </div>
    </>
  );
}
