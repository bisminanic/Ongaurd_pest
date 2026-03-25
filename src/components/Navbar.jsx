/* ═══════════════════════════════════════════════════════
   SECTION 01 — Navbar  (Kerala Edition)
   Dependencies: React, GSAP, Bootstrap 5, Logo
═══════════════════════════════════════════════════════ */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Logo from "./Logo";
import { navy, green, gd, muted } from "../constants";

export default function Navbar() {
  const navRef      = useRef();
  const linksRef    = useRef([]);
  const ctaBtnRef   = useRef();
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  /* ── Entrance + scroll glass effect ── */
  useEffect(() => {
    /* 1. Start hidden */
    gsap.set(navRef.current, { y: -80, autoAlpha: 0 });

    /* 2. Slide down after a beat */
    const tl = gsap.timeline({ delay: 0.4 });

    tl.to(navRef.current, {
      y: 0,
      autoAlpha: 1,
      duration: 1.0,
      ease: "expo.out",
    });

    /* 3. Stagger the links in */
    tl.fromTo(
      linksRef.current,
      { y: -12, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out", stagger: 0.07 },
      "-=0.55"
    );

    /* 4. CTA button scale-in */
    tl.fromTo(
      ctaBtnRef.current,
      { scale: 0.82, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.55, ease: "back.out(1.8)" },
      "-=0.35"
    );

    /* scroll listener */
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      tl.kill();
    };
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = ["services", "about", "process", "contact"];

  return (
    <>
      <style>{`
        .og-nav {
          position:fixed; top:0; left:0; right:0; z-index:2000;
          height:70px; transition:all .4s ease;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 56px;
        }
        .og-nav.scrolled {
          background:rgba(255,255,255,.97);
          backdrop-filter:blur(22px);
          box-shadow:0 2px 32px rgba(27,58,107,.09);
          border-bottom:1px solid rgba(27,58,107,.07);
        }
        .og-nav.transparent { background:transparent; }

        /* Kerala service tag */
        .og-kerala-tag {
          display:inline-flex; align-items:center; gap:6px;
          font-family:'Lato',sans-serif; font-size:10px; font-weight:700;
          letter-spacing:1px; text-transform:uppercase;
          padding:4px 12px; border-radius:50px;
          transition:all .3s;
        }
        .og-nav.scrolled .og-kerala-tag {
          background:rgba(91,199,40,.1);
          color:${green};
          border:1px solid rgba(91,199,40,.25);
        }
        .og-nav.transparent .og-kerala-tag {
          background:rgba(255,255,255,.1);
          color:rgba(255,255,255,.7);
          border:1px solid rgba(255,255,255,.18);
        }

        .og-nav-link {
          background:none; border:none; font-family:'Lato',sans-serif;
          font-size:14px; font-weight:700; cursor:pointer;
          border-bottom:2px solid transparent; padding:4px 0;
          transition:all .25s; letter-spacing:.3px;
        }
        .og-nav-link:hover { color:${green}!important; border-bottom-color:${green}!important; }

        .og-cta-btn {
          background:${green}; color:#fff; border:none;
          border-radius:50px; font-family:'Lato',sans-serif;
          font-size:13px; font-weight:900; padding:12px 30px;
          cursor:pointer; letter-spacing:.4px;
          box-shadow:0 10px 36px rgb(91 199 40 / 22%);
          transition:all .3s;
        }
        .og-cta-btn:hover {
          background:${gd};
          transform:translateY(-2px) scale(1.05);
          box-shadow:0 18px 44px rgba(91,199,40,.4);
        }

        .og-hamburger {
          display:none; flex-direction:column; gap:5px;
          background:none; border:none; cursor:pointer; padding:4px;
        }
        .og-hamburger span {
          display:block; width:25px; height:2.5px;
          border-radius:2px; transition:all .3s;
        }

        .og-mobile-menu {
          position:fixed; top:70px; left:0; right:0; z-index:1999;
          background:#fff; padding:22px 40px 30px;
          box-shadow:0 18px 55px rgba(27,58,107,.14);
          border-top:3px solid ${green};
          animation: slideDown .3s ease forwards;
        }
        @keyframes slideDown {
          from { transform:translateY(-12px); opacity:0; }
          to   { transform:translateY(0);     opacity:1; }
        }
        .og-mobile-link {
          display:block; background:none; border:none;
          cursor:pointer; font-family:'Lato',sans-serif;
          font-size:22px; font-weight:900; color:${navy};
          padding:9px 0; width:100%; text-align:left; transition:color .2s;
        }
        .og-mobile-link:hover { color:${green}; }
        .og-mobile-kerala {
          font-family:'Lato',sans-serif; font-size:11px; font-weight:700;
          color:${muted}; letter-spacing:1.2px; text-transform:uppercase;
          margin-top:16px; padding-top:16px;
          border-top:1px solid rgba(27,58,107,.07);
        }

        @media(max-width:860px){
          .og-desktop-links { display:none!important; }
          .og-hamburger     { display:flex!important; }
          .og-nav           { padding:0 24px; }
          .og-kerala-tag    { display:none!important; }
        }
      `}</style>

      <nav ref={navRef} className={`og-nav ${scrolled ? "scrolled" : "transparent"}`}>

        {/* Logo + Kerala tag */}
        <div className="d-flex align-items-center gap-3" style={{ cursor:"pointer" }}
          onClick={() => scrollTo("hero")}>
          <Logo sz={34} tc={scrolled ? navy : "#fff"} />
          {/* <span className="og-kerala-tag">
            🌴 Kerala
          </span> */}
        </div>

        {/* Desktop links */}
        <div className="og-desktop-links d-flex align-items-center gap-4">
          {links.map((id, i) => (
            <button
              key={id}
              ref={(el) => (linksRef.current[i] = el)}
              className="og-nav-link"
              onClick={() => scrollTo(id)}
              style={{ color: scrolled ? muted : "rgba(255,255,255,.84)" }}
            >
              {id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
          <button
            ref={ctaBtnRef}
            className="og-cta-btn"
            onClick={() => scrollTo("contact")}
          >
            Free Inspection
          </button>
        </div>

        {/* Hamburger */}
        <button className="og-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          {[0,1,2].map((i) => (
            <span key={i} style={{ background: scrolled ? navy : "#fff" }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="og-mobile-menu">
          {links.map((id) => (
            <button key={id} className="og-mobile-link" onClick={() => scrollTo(id)}>
              {id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
          <div className="og-mobile-kerala">
            🌴 Serving all of Kerala — Trivandrum · Kochi · Kozhikode · Thrissur & more
          </div>
        </div>
      )}
    </>
  );
}